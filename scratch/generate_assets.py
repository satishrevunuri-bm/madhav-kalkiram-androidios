import os
import subprocess
from PIL import Image, ImageDraw

def render_master_flag():
    html_path = os.path.abspath("scratch/render_test.html")
    png_path = os.path.abspath("scratch/flag_master.png")
    
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    cmd = [
        edge_path,
        "--headless=new",
        f"--screenshot={png_path}",
        "--window-size=2048,2048",
        "--default-background-color=00000000",
        f"file:///{html_path.replace(os.sep, '/')}"
    ]
    subprocess.run(cmd, check=True)
    return png_path

def create_assets():
    master_png = render_master_flag()
    im = Image.open(master_png).convert("RGBA")
    bbox = im.getbbox()
    print("Master bbox:", bbox)
    
    # Crop to flag with tight bounding box
    flag_crop = im.crop(bbox)
    w_crop, h_crop = flag_crop.size
    
    # Ensure Play Store listing asset directory
    os.makedirs("playstore_assets", exist_ok=True)
    
    # 1. Play Store Icon 512x512
    play_icon = Image.new("RGBA", (512, 512), (255, 255, 255, 255))
    target_size = 380
    scale = target_size / max(w_crop, h_crop)
    new_w, new_h = int(w_crop * scale), int(h_crop * scale)
    flag_resized = flag_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    pos_x = (512 - new_w) // 2
    pos_y = (512 - new_h) // 2
    play_icon.paste(flag_resized, (pos_x, pos_y), flag_resized)
    play_icon.convert("RGB").save("playstore_assets/playstore_icon_512.png")
    print("Saved playstore_assets/playstore_icon_512.png")
    
    # 2. Android Mipmaps
    mipmap_configs = {
        "mipmap-mdpi": (48, 108),
        "mipmap-hdpi": (72, 162),
        "mipmap-xhdpi": (96, 216),
        "mipmap-xxhdpi": (144, 324),
        "mipmap-xxxhdpi": (192, 432),
    }
    
    base_res = "android/app/src/main/res"
    
    for folder, (icon_sz, fg_sz) in mipmap_configs.items():
        folder_path = os.path.join(base_res, folder)
        os.makedirs(folder_path, exist_ok=True)
        
        # A) Foreground (adaptive icon): transparent canvas of fg_sz x fg_sz
        # Safe zone diameter is fg_sz * 0.61 -> flag max dim ~ fg_sz * 0.58
        fg_im = Image.new("RGBA", (fg_sz, fg_sz), (0, 0, 0, 0))
        fg_target = int(fg_sz * 0.58)
        sc = fg_target / max(w_crop, h_crop)
        fw, fh = int(w_crop * sc), int(h_crop * sc)
        f_resized = flag_crop.resize((fw, fh), Image.Resampling.LANCZOS)
        fx = (fg_sz - fw) // 2
        fy = (fg_sz - fh) // 2
        fg_im.paste(f_resized, (fx, fy), f_resized)
        fg_im.save(os.path.join(folder_path, "ic_launcher_foreground.png"))
        
        # B) Legacy full square icon (ic_launcher.png): white background
        sq_im = Image.new("RGBA", (icon_sz, icon_sz), (255, 255, 255, 255))
        sq_target = int(icon_sz * 0.78)
        sc = sq_target / max(w_crop, h_crop)
        sw, sh = int(w_crop * sc), int(h_crop * sc)
        s_resized = flag_crop.resize((sw, sh), Image.Resampling.LANCZOS)
        sx = (icon_sz - sw) // 2
        sy = (icon_sz - sh) // 2
        sq_im.paste(s_resized, (sx, sy), s_resized)
        sq_im.save(os.path.join(folder_path, "ic_launcher.png"))
        
        # C) Legacy round icon (ic_launcher_round.png)
        rd_im = Image.new("RGBA", (icon_sz, icon_sz), (0, 0, 0, 0))
        draw = ImageDraw.Draw(rd_im)
        draw.ellipse((0, 0, icon_sz - 1, icon_sz - 1), fill=(255, 255, 255, 255))
        rd_target = int(icon_sz * 0.68)
        sc = rd_target / max(w_crop, h_crop)
        rw, rh = int(w_crop * sc), int(h_crop * sc)
        r_resized = flag_crop.resize((rw, rh), Image.Resampling.LANCZOS)
        rx = (icon_sz - rw) // 2
        ry = (icon_sz - rh) // 2
        rd_im.paste(r_resized, (rx, ry), r_resized)
        rd_im.save(os.path.join(folder_path, "ic_launcher_round.png"))
        
        print(f"Updated {folder}")

    # 3. Splash Screens
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
        splash_im = Image.new("RGBA", (sw, sh), (255, 255, 255, 255))
        
        # Flag takes ~40% of smallest dimension
        sp_target = int(min(sw, sh) * 0.42)
        sc = sp_target / max(w_crop, h_crop)
        fw, fh = int(w_crop * sc), int(h_crop * sc)
        sp_resized = flag_crop.resize((fw, fh), Image.Resampling.LANCZOS)
        spx = (sw - fw) // 2
        spy = (sh - fh) // 2
        splash_im.paste(sp_resized, (spx, spy), sp_resized)
        splash_im.save(os.path.join(folder_path, "splash.png"))
        print(f"Updated {folder}/splash.png")

    print("\nAll assets generated successfully!")

if __name__ == "__main__":
    create_assets()
