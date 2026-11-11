import glob, os, re

files = glob.glob('c:/Users/bluec/Desktop/Vijata_Normal_website/**/*.html', recursive=True)
for f in sorted(files):
    name = os.path.relpath(f, 'c:/Users/bluec/Desktop/Vijata_Normal_website')
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    m = re.search(r'<nav class="nav-desktop"[^>]*>(.*?)</nav>', c, re.DOTALL)
    if m:
        # find top-level links (not inside dropdown)
        nav_html = m.group(1)
        # extract top level links
        top_links = re.findall(r'<a\s+href="([^"]+)"\s+class="nav-link[^"]*">\s*([^<]+)', nav_html)
        print(f"{name:30} -> {[(href, text.strip()) for href, text in top_links]}")

