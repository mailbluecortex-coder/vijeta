import glob, os, re

files = glob.glob('c:/Users/bluec/Desktop/Vijata_Normal_website/**/*.html', recursive=True)

for f in sorted(files):
    rel = os.path.relpath(f, 'c:/Users/bluec/Desktop/Vijata_Normal_website')
    is_sub = 'products\\' in rel or 'products/' in rel
    prefix = '../' if is_sub else ''
    
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    # Standard desktop nav links to replace
    # We want: Home | About | Products (dropdown) | Wholesale | Distribution | Contact
    # Let's inspect the exact desktop nav
    
    def repl_desktop_nav(match):
        active_home = ' active' if rel == 'index.html' else ''
        active_about = ' active' if rel == 'about.html' else ''
        active_prod = ' active' if ('products' in rel) else ''
        active_wholesale = ' active' if rel == 'wholesale.html' else ''
        active_dist = ' active' if rel == 'distributor.html' else ''
        active_contact = ' active' if rel == 'contact.html' else ''

        prod_prefix = '' if is_sub else 'products/'
        
        # Check active for specific dropdown item
        def is_act(p_slug):
            return ' active' if rel.replace('\\', '/') == f'products/{p_slug}.html' else ''

        return f'''<nav class="nav-desktop" aria-label="Primary Navigation">
        <a href="{prefix}index.html" class="nav-link{active_home}">Home</a>
        <a href="{prefix}about.html" class="nav-link{active_about}">About</a>
        <div class="nav-dropdown-wrapper">
          <a href="{prefix}products.html" class="nav-link{active_prod} nav-dropdown-trigger">
            Products
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </a>
          <div class="nav-dropdown-menu">
            <a href="{prod_prefix}handwash.html" class="dropdown-item{is_act('handwash')}">Handwash (5 L Pink)</a>
            <a href="{prod_prefix}floor-cleaner.html" class="dropdown-item{is_act('floor-cleaner')}">Floor Cleaner</a>
            <a href="{prod_prefix}dishwash-liquid.html" class="dropdown-item{is_act('dishwash-liquid')}">Dishwash Liquid</a>
            <a href="{prod_prefix}room-freshener.html" class="dropdown-item{is_act('room-freshener')}">Room Freshener</a>
            <a href="{prod_prefix}car-wash.html" class="dropdown-item{is_act('car-wash')}">Car Wash</a>
            <a href="{prod_prefix}car-shampoo.html" class="dropdown-item{is_act('car-shampoo')}">Car Shampoo</a>
            <a href="{prod_prefix}liquid-soap.html" class="dropdown-item{is_act('liquid-soap')}">Liquid Soap</a>
          </div>
        </div>
        <a href="{prefix}wholesale.html" class="nav-link{active_wholesale}">Wholesale</a>
        <a href="{prefix}distributor.html" class="nav-link{active_dist}">Distribution</a>
        <a href="{prefix}contact.html" class="nav-link{active_contact}">Contact</a>
      </nav>'''

    # Mobile nav replacement
    def repl_mobile_nav(match):
        active_home = ' active' if rel == 'index.html' else ''
        active_about = ' active' if rel == 'about.html' else ''
        active_prod = ' active' if ('products' in rel) else ''
        active_wholesale = ' active' if rel == 'wholesale.html' else ''
        active_dist = ' active' if rel == 'distributor.html' else ''
        active_contact = ' active' if rel == 'contact.html' else ''
        
        prod_prefix = '' if is_sub else 'products/'
        
        return f'''<ul class="drawer-nav-list">
        <li><a href="{prefix}index.html" class="drawer-link{active_home}">Home</a></li>
        <li><a href="{prefix}about.html" class="drawer-link{active_about}">About</a></li>
        <li>
          <a href="{prefix}products.html" class="drawer-link{active_prod}">Products</a>
          <ul class="drawer-subnav">
            <li><a href="{prod_prefix}handwash.html" class="drawer-sublink">Handwash (5 L Pink)</a></li>
            <li><a href="{prod_prefix}floor-cleaner.html" class="drawer-sublink">Floor Cleaner</a></li>
            <li><a href="{prod_prefix}dishwash-liquid.html" class="drawer-sublink">Dishwash Liquid</a></li>
            <li><a href="{prod_prefix}room-freshener.html" class="drawer-sublink">Room Freshener</a></li>
            <li><a href="{prod_prefix}car-wash.html" class="drawer-sublink">Car Wash</a></li>
            <li><a href="{prod_prefix}car-shampoo.html" class="drawer-sublink">Car Shampoo</a></li>
            <li><a href="{prod_prefix}liquid-soap.html" class="drawer-sublink">Liquid Soap</a></li>
          </ul>
        </li>
        <li><a href="{prefix}wholesale.html" class="drawer-link{active_wholesale}">Wholesale</a></li>
        <li><a href="{prefix}distributor.html" class="drawer-link{active_dist}">Distribution</a></li>
        <li><a href="{prefix}contact.html" class="drawer-link{active_contact}">Contact</a></li>
      </ul>'''

    # Ensure Enquire Now button in header has uniform label
    # In header-actions: <button type="button" class="btn ...">Enquire Now</button>
    c_new = re.sub(r'<nav class="nav-desktop"[^>]*>.*?</nav>', repl_desktop_nav, c, flags=re.DOTALL)
    c_new = re.sub(r'<ul class="drawer-nav-list"[^>]*>.*?</ul>', repl_mobile_nav, c_new, flags=re.DOTALL)
    
    # Also standardize Enquire Now CTA text in header actions
    c_new = re.sub(r'(<div class="header-actions">\s*<button type="button" [^>]*>)[^<]*(</button>)', r'\1Enquire Now\2', c_new)
    
    if c_new != c:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(c_new)
        print(f"Updated header in: {rel}")
    else:
        print(f"No changes needed: {rel}")

