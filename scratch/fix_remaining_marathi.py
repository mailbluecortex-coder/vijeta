import os

exact_replacements = [
    ('<h3>स्वच्छता</h3>', '<h3>Cleanliness</h3>'),
    ('<h3>आरोग्य</h3>', '<h3>Health</h3>'),
    ('<h3>विश्वास</h3>', '<h3>Trust</h3>'),
    ('VIJETA ENTERPRISES • थेट संपर्क आणि जलद प्रतिसाद', 'VIJETA ENTERPRISES • Direct Communication & Rapid Response'),
    ('VIJETA ENTERPRISES सोबत भागीदारी करा • स्वच्छता आणि आरोग्याची नवी भरारी', 'Partner with Vijeta Enterprises • Elevating Hygiene & Commercial Trust'),
    ('<span style="font-size: var(--text-xs); color: var(--color-primary-magenta); font-weight: 600;">स्वच्छता आणि आरोग्य</span>', '<span style="font-size: var(--text-xs); color: var(--color-primary-magenta); font-weight: 600;">Cleanliness & Health</span>'),
    ('विजेता कार वॉश • वाहनांची स्वच्छता आणि चमक', 'Vijeta Car Wash • Vehicle Cleansing & Streak-Free Shine'),
    ('विजेता डिशवॉश लिक्विड • तेल आणि चिकटपणा मुक्त', 'Vijeta Dishwash Liquid • Grease-Cutting & Lemon Fresh Action'),
    ('विजेता फ्लोअर क्लीनर • स्वच्छता आणि चकाकी', 'Vijeta Floor Cleaner • Surface Hygiene & Lasting Sheen'),
    ('विजेता हँडवॉश (५ लिटर) • Cleanliness • Health • Trust', 'Vijeta Handwash (5 Litres) • Cleanliness • Health • Trust'),
    ('विजेता रूम फ्रेशनर • प्रसन्न आणि सुगंधी वातावरण', 'Vijeta Room Freshener • Ambient Fragrance & Odour Neutralization')
]

html_files = []
for root, dirs, files in os.walk('.'):
    if '.git' in root or '.playwright' in root or 'scratch' in root:
        continue
    for f in files:
        if f.endswith('.html') or f.endswith('.js'):
            html_files.append(os.path.join(root, f))

for file_path in html_files:
    with open(file_path, 'r', encoding='utf-8') as f:
        c = f.read()
    orig = c
    for m, e in exact_replacements:
        c = c.replace(m, e)
    if c != orig:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(c)
        print("Updated:", file_path)

