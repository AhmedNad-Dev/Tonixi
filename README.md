# Tonixi Website

A modern, professional website for Tonixi - a software consultancy specializing in CRM solutions and business automation.

## 🚀 Features

- **Fully Static**: Pure HTML, CSS, and vanilla JavaScript - no frameworks required
- **Mobile Responsive**: Optimized for all screen sizes
- **Modern Design**: Professional UI with distinctive aesthetics
- **SEO Optimized**: Proper meta tags, semantic HTML, and structured data
- **Contact Form**: EmailJS integration for client-side email sending
- **Fast Loading**: Minimal dependencies, optimized performance
- **Easy Customization**: Well-organized code with clear comments

## 📁 Project Structure

```
tonixi-website/
├── index.html          # Home page with hero section and CRM focus
├── services.html       # Detailed services page
├── about.html          # Company vision and approach
├── contact.html        # Contact form with EmailJS integration
├── css/
│   └── style.css       # Main stylesheet with design system
├── js/
│   ├── main.js         # Core JavaScript (mobile menu, animations)
│   └── contact.js      # Contact form handler with EmailJS
└── images/             # (Empty - ready for logo and assets)
```

## 🎨 Design System

### Colors
- **Primary**: Deep navy blue (#020617)
- **Accent**: Bright blue (#3b82f6) with gradient variations
- **Text**: White and slate tones for readability
- **Borders**: Subtle slate borders for card separation

### Typography
- **Sans-serif**: DM Sans (clean, professional)
- **Monospace**: JetBrains Mono (logo and technical elements)

### Components
- Modern card designs with hover effects
- Gradient buttons with shadow effects
- Animated hero section
- Smooth scroll animations
- Mobile-friendly navigation

## 🛠️ Setup Instructions

### 1. Basic Setup

1. **Download the files** to your local machine or web server
2. **Open index.html** in a web browser to view the site locally
3. **Test navigation** between all four pages

### 2. Logo Customization

The site currently uses a text-based logo. To add your company logo:

1. **Create/export your logo** as PNG or SVG
2. **Save it** to the `images/` folder as `logo.png`
3. **Replace the logo markup** in all HTML files:

Find this in each HTML file:
```html
<div class="logo-container">
    <span class="logo-text">Tonixi</span>
</div>
```

Replace with:
```html
<div class="logo-container">
    <img src="images/logo.png" alt="Tonixi" style="height: 40px;">
</div>
```

### 3. EmailJS Setup (Contact Form)

To enable the contact form, you need to set up EmailJS:

#### Step 1: Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)

#### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Note your Service ID**

#### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

**Template Name**: contact_form

**Subject**: New Contact from {{from_name}}

**Content**:
```
New message from Tonixi website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from Tonixi contact form
```

4. **Note your Template ID**

#### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Find your "Public Key"
3. **Copy this key**

#### Step 5: Configure the Website
1. Open `js/contact.js`
2. Find these lines at the top:
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

3. Replace with your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'user_PqR4sTuVwX';
```

4. **Save the file**
5. **Test the contact form** by submitting a message

### 4. Content Customization

#### Update Company Email
Find and replace `contact@tonixi.com` with your actual email address in:
- All HTML files (footer and contact page)
- EmailJS template

#### Update Company Information
Edit content directly in the HTML files:
- `index.html`: Hero headline, feature descriptions
- `services.html`: Service offerings and descriptions
- `about.html`: Company vision and approach
- `contact.html`: Contact information and instructions

#### Update Copyright Year
The footer shows "© 2026 Tonixi". Update this in all HTML files to the current year.

## 🌐 Deployment

### Option 1: Static Hosting (Recommended)

Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the project from Git
- **GitHub Pages**: Push to repository and enable Pages
- **CloudFlare Pages**: Connect Git repo and deploy

### Option 2: Traditional Web Hosting

1. **Upload all files** via FTP/SFTP to your web host
2. Ensure `index.html` is in the root directory
3. Set proper file permissions (644 for files, 755 for directories)
4. Test all pages are accessible

### Option 3: Test Locally

Simply open `index.html` in a modern web browser. All functionality works locally except:
- EmailJS requires an internet connection
- Some browsers may restrict local file access (use a local server like Python's `http.server`)

## 📱 Browser Support

- **Chrome**: ✅ Latest versions
- **Firefox**: ✅ Latest versions
- **Safari**: ✅ Latest versions
- **Edge**: ✅ Latest versions
- **Mobile browsers**: ✅ iOS Safari, Chrome Mobile

## ⚡ Performance

- **No build process required**: Pure HTML/CSS/JS
- **Minimal dependencies**: Only Tailwind CSS (CDN) and EmailJS
- **Fast load times**: Optimized assets and minimal JavaScript
- **Mobile-first**: Responsive design principles

## 🔧 Customization Tips

### Change Color Scheme
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #3b82f6;    /* Change primary color */
    --color-secondary: #0ea5e9;  /* Change secondary color */
    /* ... other colors */
}
```

### Add Additional Pages
1. Create a new HTML file (e.g., `pricing.html`)
2. Copy the structure from an existing page
3. Update the navigation in all HTML files to include the new page

### Modify Animations
Edit animation properties in `css/style.css` or disable by removing animation classes from HTML elements.

## 📞 Support & Contact

For questions about customizing this website, refer to:
- HTML comments in each file
- Detailed comments in CSS and JavaScript files
- EmailJS documentation: https://www.emailjs.com/docs/

## 📄 License

This website template is created for Tonixi. All rights reserved.

---

Built with care for CRM & Automation excellence. 🚀