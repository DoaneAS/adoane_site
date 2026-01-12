# Ashley S. Doane, PhD - Professional Website

Personal website for Ashley S. Doane, PhD, Chief Computational Biologist specializing in cancer genomics, immuno-oncology, and single-cell multi-omic analysis.

**Live Site:** [https://adoane.nyc](https://adoane.nyc)

## Overview

This is a modern, minimal single-page website showcasing professional experience, research contributions, publications, and contact information. Built with vanilla HTML, CSS, and JavaScript for optimal performance and easy maintenance.

## Features

- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Smooth Scrolling Navigation**: Seamless navigation between sections
- **Interactive Elements**: Mobile menu, back-to-top button, scroll animations
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation support
- **Performance Optimized**: Lightweight with no framework dependencies
- **SEO Friendly**: Semantic HTML with proper meta tags

## Sections

1. **Hero** - Introduction with professional photo and call-to-action buttons
2. **About** - Professional summary, education, and key statistics
3. **Research & Experience** - Timeline of positions and expertise showcase
4. **Publications** - Featured high-impact publications with journal badges
5. **Contact** - Contact information and professional profile links

## Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern features including Grid, Flexbox, CSS Custom Properties
- **Vanilla JavaScript** - No frameworks or dependencies
- **GitHub Pages** - Static site hosting
- **Custom Domain** - adoane.nyc

## Project Structure

```
adoane_site/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Core styles and design system
│   └── responsive.css     # Media queries for responsive design
├── js/
│   └── main.js            # Interactive functionality
├── assets/
│   ├── images/
│   │   └── headshot.jpg   # Professional photo
│   └── downloads/
│       └── Doane_CV.pdf   # Downloadable CV
├── CNAME                   # Custom domain configuration
└── README.md              # This file
```

## Local Development

To view the website locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/DoaneAS/adoane_site.git
   cd adoane_site
   ```

2. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```

Alternatively, use a local web server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

### GitHub Pages Setup

1. **Create Repository**:
   - Repository name: `DoaneAS.github.io` (for user site)
   - Or: `adoane_site` (for project site)
   - Set to Public

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from main branch
   - Root directory: / (root)
   - Save

3. **Custom Domain Configuration**:
   - The `CNAME` file is already configured with `adoane.nyc`
   - Configure DNS at your domain registrar:

   **A Records** (point to GitHub Pages):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

   **CNAME Record**:
   ```
   www → DoaneAS.github.io
   ```

4. **Verify Deployment**:
   - Wait for DNS propagation (up to 24 hours)
   - Visit https://adoane.nyc
   - Ensure HTTPS is enabled

## Updating Content

### Updating Text Content

Edit `index.html` and locate the section you want to modify. All content is clearly marked with HTML comments.

### Adding New Publications

In the Publications section of `index.html`, copy an existing publication card and update:

```html
<div class="publication-card">
    <div class="publication-journal [nature|science|cell-reports]">Journal Name</div>
    <div class="publication-year">2026</div>
    <h3 class="publication-title">Your Publication Title</h3>
    <p class="publication-authors">Authors with <strong>Doane, A.S.</strong> highlighted</p>
    <a href="https://doi.org/..." class="publication-link" target="_blank" rel="noopener">
        View Publication →
    </a>
</div>
```

### Updating CV

Replace the PDF file at `assets/downloads/Doane_CV.pdf` with your latest CV.

### Updating Professional Photo

Replace `assets/images/headshot.jpg` with your new photo. Recommended specifications:
- Format: JPG or PNG
- Size: 400x400px to 800x800px (square aspect ratio)
- File size: < 200KB for optimal loading

### Modifying Styles

- Edit `css/styles.css` for colors, fonts, and component styles
- Edit `css/responsive.css` for mobile/tablet layouts
- CSS variables are defined at the top of `styles.css` for easy theme customization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance

- Lighthouse Score: 90+ across all categories
- No external dependencies (except Google Fonts)
- Optimized images
- Minimal JavaScript
- Fast load times

## Accessibility

- WCAG 2.1 AA compliant
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Color contrast ratios meet standards

## Future Enhancements

Potential features to add:

- [ ] Blog section for research insights
- [ ] Interactive data visualizations
- [ ] Dark mode toggle
- [ ] Google Scholar integration
- [ ] Publication metrics display
- [ ] Project portfolio with GitHub integration
- [ ] Contact form with backend
- [ ] Newsletter subscription
- [ ] PWA (Progressive Web App) features

## Maintenance

### Regular Updates

- Update CV PDF quarterly
- Add new publications as they're published
- Update current position and experience
- Refresh professional photo annually
- Review and update contact information

### Security

- Keep repository public for GitHub Pages
- Don't commit sensitive information
- All external links use `rel="noopener noreferrer"`
- HTTPS enabled by default on GitHub Pages

## License

© 2026 Ashley S. Doane, PhD. All rights reserved.

## Contact

- **Email**: ashley.doane@gmail.com
- **LinkedIn**: [ashley-stephen-doane-77860a50](https://linkedin.com/in/ashley-stephen-doane-77860a50)
- **GitHub**: [DoaneAS](https://github.com/DoaneAS)
- **ORCID**: [0000-0002-1489-1786](https://orcid.org/0000-0002-1489-1786)

## Acknowledgments

Website design and development completed January 2026.

---

**Built with** ❤️ **using vanilla HTML, CSS, and JavaScript**
