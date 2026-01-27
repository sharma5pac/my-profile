# Portfolio Template '25

A premium, cinematic dark mode portfolio template inspired by award-winning designs.

## How to Customize

### 1. Personal Information
Open `index.html` and replace:
- `YOUR NAME` → Your actual name
- `your.email@example.com` → Your email
- `+1 (234) 567-890` → Your phone
- Social media links with your profiles

### 2. Hero Section
```html
<!-- Update these lines in the hero section -->
<span class="title-line">CREATIVE</span>
<span class="title-line accent">DESIGNER</span>
<span class="title-line">AND DEVELOPER.</span>
```

### 3. About Section
- Update the bio text
- Change stats numbers (Years, Projects, Clients)
- Add your tech stack tags

### 4. Projects
For each project card, update:
- Project title
- Description
- Tags (technologies used)
- Replace `image-placeholder` with actual images:
```html
<div class="project-image">
    <img src="your-image.jpg" alt="Project Name">
</div>
```

### 5. Recognition
Add your achievements, certifications, or awards.

### 6. Adding Your Photo
Replace the `.hero-silhouette` div with:
```html
<img src="your-photo.jpg" alt="Your Name" class="hero-photo">
```
Add this CSS:
```css
.hero-photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%) contrast(1.2);
}
```

### 7. Colors (Optional)
Edit `:root` in `styles.css`:
```css
--accent-cyan: #00d4ff;    /* Main accent color */
--accent-blue: #0066ff;    /* Secondary accent */
```

## Files
- `index.html` - Main HTML structure
- `styles.css` - All styling
- `script.js` - Animations & interactions

## Run Locally
Just open `index.html` in your browser!

## Deploy
Upload all files to:
- GitHub Pages
- Vercel
- Netlify
- Any web hosting
