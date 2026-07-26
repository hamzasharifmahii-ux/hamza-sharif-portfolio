# Hamza Sharif Portfolio - Setup Instructions

## 📋 Quick Start Checklist

Follow these steps to set up and customize your portfolio website.

### Step 1: Extract Files
- [ ] Extract the ZIP file to your desired location
- [ ] Organize files as shown in the folder structure

### Step 2: Basic Customization

#### Update Personal Information
1. Open `index.html` in your text editor
2. Find and replace:
   - `Hamza Sharif` with your name
   - `hamzasharifmahii@gmail.com` with your email
   - `+92 342 0982708` with your phone
   - `Lahore, Pakistan` with your location

#### Update Social Links
Find the following sections and update URLs:
```html
<!-- Hero Section Social Links -->
<a href="https://github.com/hamzasharifmahii-ux">GitHub</a>
<a href="https://www.linkedin.com/in/hamza-sharif-44344a396/">LinkedIn</a>

<!-- Footer Social Links -->
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://www.linkedin.com/in/YOUR_PROFILE/">LinkedIn</a>
```

#### Update About Section
- Replace About Me text with your bio
- Update university name and dates
- Update CGPA or other academic info

### Step 3: Add Images

#### Profile Image
1. Create folder: `assets/images/`
2. Add your profile photo (300x300px minimum)
3. Replace placeholder:
```html
<img src="https://via.placeholder.com/400x400?text=Hamza+Sharif" 
     alt="Hamza Sharif">
```
With:
```html
<img src="assets/images/profile.jpg" alt="Your Name">
```

#### Project Images
1. Add project screenshots to `assets/images/`
2. Update project image URLs:
```html
<img src="https://via.placeholder.com/500x300?text=Project+Name" 
     alt="Project Name">
```
To:
```html
<img src="assets/images/project1.jpg" alt="Project Name">
```

#### About Section Image
- Add an about image to `assets/images/`
- Update the about section image

### Step 4: Customize Content

#### Projects Section
For each project, update:
- Project title
- Project description
- Technologies used (feature tags)
- Project highlights/features
- GitHub link
- Demo link (if available)

Example:
```html
<h3 class="project-title">Your Project Title</h3>
<p class="project-description">
    Your project description here...
</p>
<div class="project-features">
    <span class="feature-tag">Technology1</span>
    <span class="feature-tag">Technology2</span>
</div>
```

#### Skills Section
Update each skill category with your actual skills:
- Frontend: HTML5, CSS3, JavaScript, Bootstrap 5
- Backend: Python, Flask, Django, etc.
- Database: MySQL, MongoDB, PostgreSQL, etc.
- Tools: Git, VS Code, Figma, etc.

#### Certificates Section
Update certificates:
```html
<h4 class="certificate-title">Your Certificate Name</h4>
<p class="certificate-meta text-muted">Issued by: Organization Name</p>
<p class="certificate-description">
    Brief description of what you learned...
</p>
<a href="path/to/certificate.pdf" class="btn btn-sm btn-primary">View Certificate</a>
```

### Step 5: Add Your CV

1. Place your CV PDF at: `assets/cv.pdf`
2. The download button will automatically link to it

### Step 6: Customize Colors (Optional)

Edit `css/style.css` and update the color variables:

```css
:root {
    --bg-primary: #0F172A;      /* Main background */
    --bg-secondary: #1E293B;    /* Secondary background */
    --primary-color: #00BFFF;   /* Your accent color */
    --text-primary: #FFFFFF;    /* Main text color */
    --text-secondary: #CBD5E1;  /* Secondary text color */
}
```

### Step 7: Contact Form Setup

Option A: Using Formspree (Recommended)
1. Go to https://formspree.io/
2. Create account and form
3. Get your form ID
4. Update form action in HTML:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Option B: Using EmailJS
1. Create EmailJS account
2. Set up email service
3. Update js/script.js with your credentials

Option C: Backend API
- Create your own backend API
- Update form handler in js/script.js

### Step 8: Testing

Test on different devices:
- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile (320x568)

Test features:
- [ ] Navigation links work
- [ ] Smooth scrolling works
- [ ] Animations display correctly
- [ ] Images load properly
- [ ] Form submits correctly
- [ ] Social links open correctly
- [ ] Responsiveness is correct
- [ ] Performance is good

### Step 9: SEO Optimization

Update Meta Tags in `<head>`:
```html
<meta name="description" content="Your Professional Description">
<meta name="keywords" content="Your, Keywords, Here">
```

Add Open Graph Tags:
```html
<meta property="og:title" content="Your Name - Developer">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="URL_TO_IMAGE">
<meta property="og:url" content="YOUR_WEBSITE_URL">
```

### Step 10: Deployment

#### GitHub Pages (Free)
1. Create GitHub repository
2. Push all files
3. Go to Settings → Pages
4. Select main branch
5. Your site is live!

#### Netlify (Free)
1. Sign up at netlify.com
2. Connect GitHub repository
3. Deploy (automatic)
4. Add custom domain

#### Vercel (Free)
1. Sign up at vercel.com
2. Import project
3. Deploy
4. Add custom domain

#### Traditional Hosting
1. Connect via FTP/SFTP
2. Upload all files
3. Set appropriate permissions
4. Access via your domain

## 📂 Folder Structure

Create this structure:
```
Hamza_Portfolio/
├── index.html
├── README.md
├── SETUP.md
├── .gitignore
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── assets/
    ├── cv.pdf
    ├── favicon.ico
    └── images/
        ├── profile.jpg
        ├── about.jpg
        ├── project1.jpg
        ├── project2.jpg
        └── project3.jpg
```

## 🎨 Image Specifications

### Profile Image
- Size: 400x400px
- Format: JPG or PNG
- Quality: High quality
- Background: Preferably solid or professional

### Project Images
- Size: 500x300px (16:9 ratio)
- Format: JPG or PNG
- Quality: Screenshot or mockup
- Aspect Ratio: Consistent

### About Image
- Size: 400x300px
- Format: JPG or PNG
- Quality: Professional photo
- Style: Matches portfolio theme

## 🔧 Common Customizations

### Change Font
Update in CSS:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}

.section-title {
    font-family: 'Your Font Family', sans-serif;
}
```

### Add Google Fonts
Add to `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

### Change Animations Speed
Edit JavaScript animation durations (in ms):
```javascript
const typingSpeed = 50;      // Typing speed
const deletingSpeed = 30;    // Deleting speed
const scrollDelay = 300;     // Scroll animation delay
```

### Add More Sections
Follow the existing pattern:
1. Add section ID
2. Create HTML structure
3. Add corresponding CSS
4. Add navigation link
5. Update scroll event handler

## 🐛 Troubleshooting

### Images not showing?
- Check file paths are correct
- Ensure images exist in assets/images/
- Try clearing browser cache

### Styles not applying?
- Check CSS file is linked in HTML
- Clear browser cache (Ctrl+F5)
- Check for CSS syntax errors

### JavaScript not working?
- Check browser console for errors
- Ensure script.js is linked
- Check file paths in HTML

### Form not submitting?
- Check if using local file:// protocol
- Use local server (Python/Node)
- Verify Formspree setup

## 📞 Support Resources

- Bootstrap: https://getbootstrap.com/
- Font Awesome: https://fontawesome.com/
- CSS Tricks: https://css-tricks.com/
- MDN Docs: https://developer.mozilla.org/

## ✨ Next Steps After Setup

1. **Add Blog** - Share your knowledge
2. **Add Skills Showcase** - Display projects with code
3. **Add Testimonials** - Build credibility
4. **Add Newsletter** - Grow your audience
5. **Optimize Performance** - Improve speed
6. **Set Up Analytics** - Track visitors
7. **Add Chatbot** - Engage visitors

## 🎯 Portfolio Tips

- Keep it simple and professional
- Use consistent branding
- Update regularly
- Include a call-to-action
- Make it easy to contact you
- Showcase your best work
- Tell your story
- Be authentic

---

**Your portfolio is now ready to customize and deploy!**

For any issues or questions, refer to the README.md file or modify the HTML/CSS/JS as needed.

Good luck! 🚀
