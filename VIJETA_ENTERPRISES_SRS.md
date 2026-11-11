# VIJETA ENTERPRISES --- Website Software Requirements Specification (SRS)

**Project:** Corporate Website, Product Catalogue & Business Enquiry
Platform\
**Business:** VIJETA ENTERPRISES\
**Location:** Kurduwadi, District Solapur, Maharashtra, India\
**GSTIN:** 27AKUPP1588Q1ZV\
**Preferred domain:** `www.vijetaenterprises.com`\
**Document version:** 1.0\
**Document type:** Software Requirements Specification (SRS)\
**Prepared from:** Client-provided business details and website brief

------------------------------------------------------------------------

## 1. Project Overview

VIJETA ENTERPRISES requires a professional, responsive website to
present its cleaning and hygiene product range, build business
credibility, and receive enquiries from retail buyers, wholesalers, bulk
purchasers, distributors, and potential international business partners.

The website will initially operate as a **business website and product
catalogue**, not as an online shopping cart. Visitors will be able to
explore products, request quotations, and contact the business through
enquiry forms and WhatsApp.

The system must be manageable through a secure custom admin panel. New
products, product categories, images, content, and business contact
details should be manageable without editing source code.

## 2. Business Information

  -----------------------------------------------------------------------
  Field                               Details
  ----------------------------------- -----------------------------------
  Business name                       VIJETA ENTERPRISES

  Location                            Kurduwadi, District Solapur,
                                      Maharashtra, India

  GSTIN                               27AKUPP1588Q1ZV

  Preferred domain                    www.vijetaenterprises.com

  Contact number                      9423066050 (provided in the
                                      supporting brief; verify before
                                      publishing)
  -----------------------------------------------------------------------

**Details to confirm before launch:** official WhatsApp Business number,
email address, complete postal address, logo, business hours, social
media links, product photographs, product descriptions, pack sizes,
variants, and any applicable certifications.

The GSTIN and all business details must be verified by the business
owner before publication. Do not invent company history, certifications,
export credentials, manufacturing claims, or quality accreditations.

## 3. Business Goals

1.  Establish a credible online identity for VIJETA ENTERPRISES.
2.  Present all current products in a clear and attractive catalogue.
3.  Generate genuine product, wholesale, bulk-order, and distributor
    enquiries.
4.  Make it easy for customers to contact the business through WhatsApp.
5.  Capture and manage all website enquiries in a database.
6.  Allow the business owner to update products and website content
    independently.
7.  Keep the architecture extensible for additional products and future
    e-commerce or trade features.

## 4. Initial Product Catalogue

The initial catalogue must include these seven products:

    No. Product name      Suggested URL slug
  ----- ----------------- --------------------
      1 Floor Cleaner     `floor-cleaner`
      2 Handwash          `handwash`
      3 Dishwash Liquid   `dishwash-liquid`
      4 Room Freshener    `room-freshener`
      5 Car Wash          `car-wash`
      6 Car Shampoo       `car-shampoo`
      7 Liquid Soap       `liquid-soap`

Each product must support: - Product name and URL slug. - Main image and
optional gallery images. - Short and full descriptions. - Product
features and benefits. - Available pack sizes and variants. - Usage
instructions and packaging information. - Related products. -
Active/inactive status. - SEO title, meta description, and image ALT
text. - Product-specific WhatsApp enquiry and Request a Quote actions.

Product specifications, fragrances, pack sizes, pricing, claims, and
usage instructions must come from the business owner. Do not create
unsupported product claims or show invented prices.

## 5. Target Users

-   **Retail/customer visitor:** explores products and contacts the
    business.
-   **Wholesale/bulk buyer:** submits a bulk requirement and requests a
    quotation.
-   **Distributor applicant:** submits business and territory details.
-   **International buyer:** submits import/export or overseas
    partnership enquiries.
-   **Administrator:** manages products, categories, content, settings,
    and enquiries.

## 6. Scope

### 6.1 Included in the initial release

-   Public corporate website.
-   Responsive product catalogue and product detail pages.
-   About, wholesale/bulk order, import/export, distributor, and contact
    pages.
-   Product-wise and page-wise WhatsApp links.
-   Enquiry forms saved in MySQL.
-   Email notifications to a verified business email.
-   Secure custom admin panel.
-   Product and category management.
-   Enquiry and distributor application management.
-   Website content and contact settings.
-   Basic technical and on-page SEO.
-   Privacy Policy, Terms & Conditions, Disclaimer, and applicable
    shipping/return policy pages.

### 6.2 Excluded unless separately approved

-   Shopping cart and checkout.
-   Online payment gateway.
-   Customer accounts and login.
-   Advanced inventory or warehouse management.
-   Automated shipping and order tracking.
-   ERP/CRM integration.
-   Full multilingual content management.
-   Advanced distributor portal.
-   Paid advertising and guaranteed SEO ranking.

## 7. Website Information Architecture

### Public website pages

1.  Home
2.  About Us
3.  Products
4.  Individual Product Details
5.  Wholesale & Bulk Orders
6.  Import & Export
7.  Become a Distributor
8.  Contact Us
9.  Privacy Policy
10. Terms & Conditions
11. Disclaimer
12. Shipping Policy / Return & Refund Policy, if applicable

### Main navigation

-   Home
-   About Us
-   Products
-   Wholesale
-   Import & Export
-   Become a Distributor
-   Contact

The header must include a clear enquiry/contact action. A floating
WhatsApp action must be available across public pages.

## 8. Functional Requirements

### 8.1 Home page

The home page should contain: 1. Header and navigation. 2. Hero section
with a clear business message and product-focused visual. 3. Short
introduction to VIJETA ENTERPRISES. 4. Featured products. 5. Product
category/product range section. 6. Why Choose Us section using only
approved facts. 7. Wholesale and bulk supply call-to-action. 8.
Distributor enquiry call-to-action. 9. Import/export enquiry section,
subject to business confirmation. 10. Contact and WhatsApp
call-to-action. 11. Footer with verified business details and legal
links.

Suggested headline: **"Quality Products. Trusted Partnerships."**

Suggested supporting copy: "Explore the cleaning and hygiene product
range from VIJETA ENTERPRISES. Contact us for product information, bulk
requirements, and business enquiries."

This copy is a proposal and must be approved before publication. Do not
imply existing international operations unless confirmed.

### 8.2 About Us

Provide editable sections for: - Business introduction. - Background
(only owner-approved facts). - Vision and mission. - Business
objectives. - Customer service approach. - Product and supply focus. -
Domestic and future international business vision.

Do not invent establishment dates, experience, customer counts,
achievements, or certifications.

### 8.3 Products listing

The page must: - Display all active products. - Support category
filtering if categories are configured. - Show product image, name,
short description, and View Details action. - Provide WhatsApp Enquiry
and Request a Quote actions. - Adapt cleanly to mobile, tablet, and
desktop. - Avoid displaying unavailable or unverified product
specifications.

### 8.4 Product detail

Each product detail page must show the available product information,
images, variants, pack sizes, features, usage instructions, packaging
information, related products, and enquiry actions. All content must be
editable in the admin panel.

### 8.5 Wholesale & Bulk Orders

Provide an enquiry form with: - Full name (required). - Business name. -
Mobile number (required). - Email address. - City. - State. - Country. -
Product(s) of interest. - Required quantity. - Message.

On valid submission: 1. Validate and sanitize input. 2. Save the enquiry
to MySQL. 3. Generate a unique enquiry reference. 4. Send an email
notification if SMTP is configured. 5. Show a clear success/error
message. 6. Offer a WhatsApp continuation action.

### 8.6 Import & Export Enquiry

Provide this page only as an enquiry channel. Do not claim IEC
registration, export history, overseas offices, certifications, or
current export capability unless verified.

Fields: - Full name. - Company name. - Country. - Email. - Contact
number with country code. - Business type: Importer, Exporter,
Wholesaler, Distributor, Retailer, Other. - Requirement type: Import /
Export / Partnership / Other. - Product(s) of interest. - Required
quantity. - Message.

Save valid submissions in MySQL and make them available in the admin
enquiry area.

### 8.7 Become a Distributor

Fields: - Full name. - Business name. - Mobile number. - Email. -
City. - State. - Country. - Interested distribution area. - Existing
business details. - Message.

Save applications in MySQL. Admin users must be able to review them,
change status, and add internal notes.

### 8.8 Contact Us

Display verified business details: - VIJETA ENTERPRISES. - Kurduwadi,
District Solapur, Maharashtra, India (show a more precise address only
after verification). - Verified phone number. - Verified WhatsApp
number. - Official email. - Business hours. - Google Maps location after
the exact location is confirmed. - Contact form.

### 8.9 WhatsApp integration

WhatsApp is a key contact channel and must be available throughout the
public website.

Requirements: - Floating WhatsApp button on every public page. -
Product-specific enquiry message containing the product name. - Bulk
enquiry message containing customer name, business name, product,
quantity, and location where available. - Import/export enquiry
message. - Distributor enquiry message. - Contact page WhatsApp
action. - WhatsApp number editable from admin settings. - Use the
official Click-to-Chat URL format:
`https://wa.me/COUNTRYCODENUMBER?text=ENCODED_MESSAGE`. - Use country
code `91` for an Indian number, without `+` or a leading zero. -
URL-encode all pre-filled message content.

The supplied contact number must not automatically be assumed to be a
WhatsApp Business number. Verify it with the owner. WhatsApp must
supplement---not replace---saving form submissions in MySQL.

### 8.10 Admin panel

Provide a secure, separate admin area.

**Dashboard** - Total active products. - Total categories. - Total
enquiries. - New enquiries. - Bulk-order enquiries. - Import/export
enquiries. - Distributor applications.

**Product management** - Add, edit, view, activate/deactivate, and
delete products. - Upload and manage product images. - Edit
descriptions, variants, pack sizes, and related products. - Manage
product SEO fields.

**Category management** - Add, edit, activate/deactivate, and delete
categories. - Manage category images and descriptions.

**Enquiry management** - View and search enquiries. - Filter by enquiry
type, status, and date. - View enquiry details. - Update status: New,
Contacted, Converted, Closed. - Add internal notes. - Export permitted
enquiry data to CSV.

**Distributor management** - View/search applications. - Update
application status. - Add internal notes.

**Website content management** - Edit homepage banner and text. - Edit
About Us content. - Edit footer and contact information. - Manage
business hours and social links. - Manage website images.

**General and SEO settings** - Website name, logo, favicon. - Business
email, phone, WhatsApp number, address. - Social media links. - Page
titles, meta descriptions, canonical URLs, URL slugs, Open Graph data,
and image ALT text.

## 9. Design and User Experience Requirements

### 9.1 Design direction

The website should feel like a real, established Indian
cleaning-products business with a polished corporate presentation---not
a generic AI-generated landing page or an off-the-shelf template.

Design principles: - Clean, premium, product-first layout. - Strong
product photography and realistic packaging visuals. - Clear hierarchy
and readable paragraphs. - Restrained use of gradients, shadows, glass
effects, and animation. - Consistent spacing, buttons, cards, and
navigation. - Fast, accessible interactions. - Mobile-first responsive
design.

### 9.2 Suggested visual identity

The supporting brief proposes: - Primary: Pink. - Secondary: White. -
Accent: Dark Blue. - Neutral: Light Grey. - Text: Dark Charcoal.

Treat this as a starting palette only. Confirm it against the actual
logo and product packaging before finalizing. Avoid using strong pink on
every section; use it as a brand accent where appropriate.

### 9.3 Typography

Use a professional, highly readable sans-serif typeface. Keep heading
and body styles consistent. Use comfortable line-height and avoid overly
small text.

### 9.4 Product imagery

Use genuine product photographs supplied or approved by the business. Do
not fabricate labels, brand marks, certifications, or packaging text.
Optimize images for the web and provide descriptive ALT text.

### 9.5 Responsive behaviour

The site must work on: - Android phones. - iPhones. - Tablets. -
Laptops. - Desktop monitors.

Navigation, forms, cards, galleries, and buttons must remain usable
without horizontal overflow.

## 10. Technology Requirements

The supplied project brief specifies a custom PHP and MySQL
implementation.

**Frontend** - HTML5 - CSS3 - Bootstrap 5 - JavaScript / Vanilla
JavaScript - Font Awesome

**Backend** - PHP 8.x (supported stable version) - MySQL or MariaDB -
PDO prepared statements - Modular PHP architecture and reusable
components

**Hosting** - Apache or Nginx. - Linux hosting preferred. - HTTPS with a
valid SSL certificate.

WordPress must not be used. A framework such as Laravel requires
separate approval before adoption.

## 11. Suggested Database Design

The following is a logical starting point; final columns and
relationships should be confirmed during implementation.

  -----------------------------------------------------------------------
  Table                               Purpose
  ----------------------------------- -----------------------------------
  `admins`                            Admin accounts and authentication
                                      metadata

  `product_categories`                Product categories

  `products`                          Product names, descriptions, slugs,
                                      status, SEO

  `product_images`                    Product image gallery

  `product_variants`                  Pack sizes and product variants

  `general_settings`                  Contact, WhatsApp, branding, and
                                      site settings

  `page_contents`                     Editable page and section content

  `enquiries`                         Common enquiry reference and status
                                      tracking, if using a unified model

  `bulk_order_enquiries`              Bulk-order-specific submitted
                                      details

  `import_export_enquiries`           International trade enquiry details

  `distributor_applications`          Distributor application details

  `seo_metadata`                      Page-level SEO metadata, if not
                                      stored with page/product records

  `admin_activity_logs`               Administrative activity history
  -----------------------------------------------------------------------

Use primary keys, appropriate foreign keys, indexes, timestamps, and
validation. Avoid unnecessary duplicate storage. A unified enquiry table
with type-specific detail tables is acceptable if relationships remain
clear.

## 12. Security Requirements

-   Secure admin authentication and authorization.
-   Passwords stored using PHP password hashing APIs; never store
    plaintext passwords.
-   Secure session configuration and session regeneration after login.
-   CSRF protection for state-changing forms.
-   Output escaping and input validation to reduce XSS risk.
-   PDO prepared statements to prevent SQL injection.
-   Upload validation for MIME type, extension, size, and safe storage.
-   Randomized file names; prevent script execution in upload
    directories.
-   Rate limiting and spam protection on public forms and admin login.
-   Do not expose database credentials or private enquiry information.
-   Restrict admin routes and actions to authorized users.
-   Maintain regular database and uploaded-file backups.

## 13. Email and Enquiry Processing

Every public enquiry form must: 1. Validate required fields on the
server. 2. Reject invalid or oversized input. 3. Save the enquiry in
MySQL. 4. Generate a unique enquiry ID/reference. 5. Send an email
notification to the verified business email when SMTP is configured. 6.
Return a clear confirmation to the visitor. 7. Provide a WhatsApp
contact option where relevant.

Email failure must not silently discard an enquiry already saved
successfully. Record delivery status or errors for admin
troubleshooting. Do not expose SMTP credentials in frontend code.

## 14. SEO and Analytics

Implement: - Unique page titles and meta descriptions. - Search-friendly
URLs. - Correct heading hierarchy. - Image ALT text. - XML sitemap and
robots.txt. - Canonical URLs. - Open Graph metadata. -
Organization/LocalBusiness structured data using verified details. -
Product structured data only when accurate and eligible. - Google Search
Console and GA4 integration after account/property access is supplied. -
Internal links and optimized images. - Mobile performance and page-speed
improvements.

Suggested keyword themes: - Cleaning Products Supplier India. -
Wholesale Cleaning Products. - Handwash Supplier. - Floor Cleaner
Supplier. - Dishwash Liquid Supplier. - Car Shampoo Supplier. - Cleaning
Products Distributor. - Bulk Cleaning Products Supplier.

SEO work does not guarantee a particular search position or traffic
volume.

## 15. International Readiness

The initial website language is English. Forms should support country
selection and international phone country codes. The structure should
allow future multilingual and multi-currency support, but those systems
are not part of the initial release unless approved.

Do not publish unsupported export claims or imply that export
documentation/certifications are available without verification.

## 16. Legal and Privacy

Create draft pages for: - Privacy Policy. - Terms & Conditions. -
Disclaimer. - Shipping Policy, if applicable. - Return / Refund Policy,
if applicable.

The business owner must review and approve legal wording before launch.
Forms should explain why contact details are collected and how enquiries
will be used. Collect only information required to respond to the
enquiry.

## 17. Non-Functional Requirements

-   Fast initial page load and optimized assets.
-   Responsive layouts across supported screen sizes.
-   Accessible contrast, labels, keyboard navigation, and meaningful
    focus states.
-   Maintainable, modular code.
-   Secure server-side validation.
-   Reliable database writes and backups.
-   Graceful handling of email or WhatsApp handoff failures.
-   No dummy products, fabricated testimonials, fake counters, or
    hardcoded enquiry data.
-   Product and contact information must be editable from the admin
    panel.

## 18. Acceptance Criteria

The project can be considered ready for launch when:

1.  All agreed public pages render correctly on mobile and desktop.
2.  All seven initial products can be listed and opened individually.
3.  Admin can add/edit/disable products, categories, images, and product
    details.
4.  All public forms validate and save records in MySQL.
5.  Enquiries receive unique references and appear in admin.
6.  Admin can search, filter, update status, add notes, and export
    enquiries.
7.  WhatsApp actions use the verified configured number and correct
    pre-filled messages.
8.  SMTP notifications work with approved credentials, without losing
    saved enquiries when email fails.
9.  Admin authentication, permissions, CSRF protection, validation, and
    upload restrictions are implemented.
10. SEO metadata, sitemap, robots.txt, and canonical URLs are
    configured.
11. Legal pages and all factual business claims are approved.
12. SSL is active and production contact/location details are verified.
13. Backup and handover documentation are delivered.

## 19. Delivery Items

-   Responsive public website.
-   Custom PHP source code.
-   MySQL schema/export.
-   Secure admin panel.
-   Product and category management.
-   Enquiry and distributor management.
-   WhatsApp integration.
-   SMTP email notification integration.
-   SEO configuration.
-   Deployment and backup instructions.
-   Admin credentials delivered securely.
-   Basic admin usage handover.

## 20. Implementation Phases

1.  **Discovery:** verify business information, brand assets, product
    data, contact details, and hosting.
2.  **UI/UX:** prepare homepage and inner-page layouts for approval.
3.  **Database and backend:** implement schema, authentication, product
    management, forms, and enquiry workflows.
4.  **Frontend:** build responsive public pages and product detail
    templates.
5.  **Integrations:** WhatsApp, SMTP, Maps, analytics, and SEO.
6.  **Quality assurance:** functional, responsive, security, and
    performance checks.
7.  **Launch:** configure domain, hosting, SSL, database, and production
    settings.
8.  **Handover:** source code, database export, backup, credentials, and
    usage documentation.

## 21. Open Items Requiring Client Confirmation

-   Is `vijetaenterprises.com` registered and available for this
    project?
-   Approved logo and final brand colours.
-   Whether the business manufactures, markets, distributes, or trades
    each listed product.
-   Product descriptions, pack sizes, variants, usage instructions, and
    approved claims.
-   Product photographs and packaging images.
-   Whether the supplied phone number is also the official WhatsApp
    Business number.
-   Official business email and SMTP provider/credentials.
-   Full postal address and exact Google Maps location.
-   Business hours and social media links.
-   Whether wholesale pricing or minimum order quantities may be
    published.
-   Whether import/export services are currently active or should be
    presented only as future enquiry opportunities.
-   Applicable shipping, return, and refund terms.
-   Final legal content approval.

------------------------------------------------------------------------

**Prepared for:** VIJETA ENTERPRISES, Kurduwadi, District Solapur,
Maharashtra\
**Development direction:** Custom PHP + MySQL; no WordPress\
**Important:** This SRS is a requirements baseline. Final business
claims, contact information, product specifications, legal content, and
brand styling require client verification and approval before
publication.
