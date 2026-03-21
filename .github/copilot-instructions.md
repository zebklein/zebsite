# Zebsite Copilot Instructions

## Project Overview
Zebsite is a personal portfolio website built with vanilla HTML, CSS, and JavaScript, hosted on GitHub Pages. It showcases photography, code projects, philosophy essays, and architecture content.

## Architecture & File Organization

### Core Structure
- **Pages**: Each page (index.html, gallery.html, code.html, etc.) is a standalone HTML file with a consistent navigation bar structure
- **Styling**: Single unified stylesheet (`style.css`) - all pages inherit common nav, layout, and component styles
- **Scripting**: Minimal JavaScript; only `code-script.js` implements dynamic behavior for the Code page
- **Assets**: Static media in `media/` subdirectories (pictures, videos, essays)

### Key Files & Responsibilities
- [index.html](index.html) - Landing page with hero background video
- [style.css](style.css) - 608-line unified stylesheet with mobile-first responsive design
- [code-script.js](code-script.js) - 347-line script using `DOMWriter` function to simulate typing code into DOM elements
- [code.html](code.html), [gallery.html](gallery.html), [philosophy.html](philosophy.html), [architecture.html](architecture.html), [triage.html](triage.html) - Content pages with shared nav

## Design Patterns & Conventions

### Navigation Pattern
All pages follow the same nav structure:
- Responsive hamburger menu (mobile) with checkbox toggle pattern
- Nested dropdown (PHILOSOPHY submenu with THEORY and A.I. IN TRIAGE links)
- Consistent logo and menu styling using CSS transitions
- Applied as a copy-paste template across all HTML files

### Responsive Design Breakpoints
- **Mobile**: `max-width: 820px` - hamburger menu, stacked layout, backdrop blur effects
- **Desktop**: `min-width: 821px` - traditional horizontal menu, hover dropdowns
- See [style.css](style.css#L107) for breakpoint separation

### Dynamic Content (Code Page)
- [code-script.js](code-script.js) uses a custom `DOMWriter` function to append text character-by-character to DOM elements
- Three main content blocks with varying text: anagrams (C++), password generator (C++), and intro text
- Typing speed adapts as text progresses (`delay` variable)
- HTML entities used for formatting: `<br>` for line breaks, tags embedded as text strings

### Styling Approach
- Poppins font family as primary fallback
- Glassmorphism effects on mobile nav (backdrop-filter blur)
- Color scheme: light text on dark backgrounds (hero section), dark text on light backgrounds (dropdowns)
- CSS regions marked with `#region` comments (e.g., `/* #region nav bar */`)

## Developer Workflows

### Local Testing
No build step required - open any HTML file directly in a browser or use a simple HTTP server:
```bash
# Using Python
python -m http.server 8000

# Then navigate to http://localhost:8000
```

### Deployment
- Repository configured for GitHub Pages (CNAME file indicates custom domain setup)
- All assets served as static files - no backend processing
- Push to main branch automatically deploys via GitHub Pages

### Adding New Pages
1. Create new `{name}.html` file
2. Copy nav structure from existing page and customize `<body class="...">`
3. Add styles to [style.css](style.css) with new class name (e.g., `.triage`, `.gallery`)
4. Update menu links in all HTML files to include new page
5. Page-specific scripts should follow the `{name}-script.js` naming convention

## Content-Specific Notes

### Code Page Display
- Anagrams generator and password generator implemented in C++
- Code strings stored as long concatenated strings with `<br>` tags embedded
- `DOMWriter` function target elements: `#code-intro`, `#code-column-left`, `#code-column-right`

### Media Organization
- `media/pictures/` - Photography gallery images
- `media/videos/` - MP4 videos (background video on hero, short films on gallery)
- `media/essays/` - PDF files (AI_in_Triage.pdf embedded in triage.html)
- `media/models/` - Unused or future content directory

### Philosophy Section
- Two-page structure: philosophy.html (THEORY) and triage.html (A.I. IN TRIAGE)
- triage.html demonstrates PDF embedding using `<embed>` tag with fallback link

## Common Modifications

### Update Navigation
Edit the `<ul class="menu">` block in all HTML files. Changes needed in every page to keep consistency.

### Modify Typing Animation
Edit [code-script.js](code-script.js) - adjust `delay` variable or modify the three content strings (anagrams, password, intro).

### Styling Page-Specific Elements
Add new CSS rules in [style.css](style.css) using page class selectors (e.g., `body.code { ... }`) to scope styles to specific pages.

### Add Media
Place assets in appropriate `media/` subdirectory and reference with relative paths (e.g., `media/pictures/image.jpg`).

## External Dependencies
- None - vanilla HTML, CSS, and JavaScript only
- GitHub Pages for hosting
- No build tools, frameworks, or npm packages required

## Performance Considerations
- Hero page includes a background video (world-browser-short.mp4) that auto-plays with muted attribute
- Images in gallery should be optimized (JPEG/JPG) before adding
- PDF embed on triage page may increase load time - consider lazy loading if performance becomes an issue
