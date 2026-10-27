import os
from PIL import Image

def generate_all():
    # 1. Load unified splash master
    unified = Image.open("scratch/splash_unified.png").convert("RGBA")
    uw, uh = unified.size
    
    base_res = "android/app/src/main/res"
    splash_configs = {
        "drawable": (480, 320),
        "drawable-port-mdpi": (320, 480),
        "drawable-port-hdpi": (480, 800),
        "drawable-port-xhdpi": (720, 1280),
        "drawable-port-xxhdpi": (960, 1600),
        "drawable-port-xxxhdpi": (1280, 1920),
        "drawable-land-mdpi": (480, 320),
        "drawable-land-hdpi": (800, 480),
        "drawable-land-xhdpi": (1280, 720),
        "drawable-land-xxhdpi": (1600, 960),
        "drawable-land-xxxhdpi": (1920, 1280),
    }

    for folder, (sw, sh) in splash_configs.items():
        folder_path = os.path.join(base_res, folder)
        os.makedirs(folder_path, exist_ok=True)
        out_canvas = Image.new("RGBA", (sw, sh), (255, 255, 255, 255))
        
        # Fit unified graphic into canvas with comfortable breathing margin
        scale = min((sw * 0.95) / uw, (sh * 0.95) / uh)
        nw, nh = int(uw * scale), int(uh * scale)
        resized = unified.resize((nw, nh), Image.Resampling.LANCZOS)
        
        px = (sw - nw) // 2
        py = (sh - nh) // 2
        out_canvas.paste(resized, (px, py), resized)
        out_canvas.save(os.path.join(folder_path, "splash.png"))
        print(f"Generated {folder}/splash.png ({sw}x{sh})")

    # 2. Prepare Google Play Store Listing Screenshots from the user's two original screens
    os.makedirs("playstore_assets", exist_ok=True)
    for idx, name in enumerate(["kalkiram-app-splash-screen-1.png", "kalkiram-app-splash-screen-2.png"], start=1):
        raw_im = Image.open(os.path.join("scratch", name))
        rw, rh = raw_im.size
        # Crop browser bar and status bar
        # Status bar + Chrome bar is y=0 to 278, bottom bar is 2715 to 2772
        cropped = raw_im.crop((0, 278, rw, 2715))
        
        # Google Play standard phone screenshot resolution (1080 x 2400 or 1272 x 2437)
        cw, ch = cropped.size
        cropped.save(f"playstore_assets/store_screenshot_{idx}.png")
        print(f"Saved playstore_assets/store_screenshot_{idx}.png ({cw}x{ch})")

    print("\nAll splash screens & store listing screenshots successfully generated!")

if __name__ == "__main__":
    generate_all()
