import os, re

html_files = []
for root, dirs, files in os.walk('.'):
    if '.git' in root or '.playwright' in root:
        continue
    for f in files:
        if f.endswith('.html') or f.endswith('.js'):
            html_files.append(os.path.join(root, f))

marathi_pattern = re.compile(r'[\u0900-\u097F]+')

replacements = [
    # Common brand tags & headers
    ('विजेता एंटरप्रायजेस — स्वच्छता • आरोग्य • विश्वास', 'VIJETA ENTERPRISES — Cleanliness • Health • Trust'),
    ('विजेता एंटरप्रायजेस • स्वच्छता • आरोग्य • विश्वास', 'VIJETA ENTERPRISES • Cleanliness • Health • Trust'),
    ('विजेता एंटरप्रायजेस', 'VIJETA ENTERPRISES'),
    ('स्वच्छता • आरोग्य • विश्वास', 'Cleanliness • Health • Trust'),
    (' (विजेता एंटरप्रायजेस)', ''),
    ('(विजेता एंटरप्रायजेस)', ''),
    ('विजेता कार शॅम्पू • स्नो फोम आणि उच्च दर्जाची स्वच्छता', 'Vijeta Car Shampoo • Snow Foam & Premium Vehicle Care'),
    ('विजेता लिक्विड सोप • कोमल त्वचा आणि दैनंदिन स्वच्छता', 'Vijeta Liquid Soap • Gentle Skin Care & Daily Hygiene'),
    ('विजेता एंटरप्रायजेस सोबत भागीदारी करा • स्वच्छता आणि आरोग्याची नवी भरारी', 'Partner with Vijeta Enterprises • Growing Hygiene & Trust Together'),
    ('विजेता एंटरप्रायजेस • थेट संपर्क आणि जलद प्रतिसाद', 'Vijeta Enterprises • Direct Communication & Prompt Response'),
]

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    for marathi, english in replacements:
        content = content.replace(marathi, english)

    # Check if any remaining Devanagari exists
    remaining = marathi_pattern.findall(content)
    if remaining:
        print(f"Remaining in {file_path}: {set(remaining)}")

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}")

