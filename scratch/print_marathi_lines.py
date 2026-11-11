import os, re

html_files = []
for root, dirs, files in os.walk('.'):
    if '.git' in root or '.playwright' in root or 'scratch' in root:
        continue
    for f in files:
        if f.endswith('.html') or f.endswith('.js'):
            html_files.append(os.path.join(root, f))

marathi_pattern = re.compile(r'[\u0900-\u097F]+')

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    for idx, line in enumerate(lines):
        if marathi_pattern.search(line):
            print(f"{file_path}:{idx+1}: {line.strip()}")

