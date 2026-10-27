import subprocess
import os
import shutil

keytool = r"C:\Users\anush\.jdks\jbr-21.0.11\bin\keytool.exe"
keystore_path = os.path.abspath("android/app/kalkiram-release-key.jks")
backup_dir = os.path.abspath("keystore_backup")
os.makedirs(backup_dir, exist_ok=True)
backup_path = os.path.join(backup_dir, "kalkiram-release-key.jks")

# Remove existing keystore first if present
if os.path.exists(keystore_path):
    os.remove(keystore_path)

password = "mHar5kd4tJ8OPWOzs@tOcrpbQD9i$txa"
dname = "CN=Visva Sanatana Dharma Seva Trust, O=Visva Sanatana Dharma Seva Trust, C=IN"

cmd = [
    keytool,
    "-genkeypair",
    "-v",
    "-keystore", keystore_path,
    "-alias", "kalkiram-key",
    "-keyalg", "RSA",
    "-keysize", "2048",
    "-validity", "10000",
    "-storepass", password,
    "-keypass", password,
    "-dname", dname
]

res = subprocess.run(cmd, capture_output=True, text=True)
print("STDOUT:", res.stdout)
print("STDERR:", res.stderr)
print("Exit code:", res.returncode)

if res.returncode == 0:
    shutil.copy2(keystore_path, backup_path)
    print("Backup successfully copied to:", backup_path)
