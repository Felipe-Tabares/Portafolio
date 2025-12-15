# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional portfolio and resume website for Felipe Tabares (Software Engineer / DevOps Engineer). Static HTML/CSS/JavaScript site - no build process required.

**Domain**: https://cv-felipetabares.xyz/
**Language**: Spanish (primary)

## Development

This is a zero-build static site. Edit files directly and test in browser.

```bash
# No build commands - open index.html in browser for testing
# Git for version control
git status
git add .
git commit -m "message"
```

## Architecture

### Tech Stack
- HTML5 with Schema.org structured data (JSON-LD)
- CSS3 with Bootstrap 5.3.2 (via CDN)
- Vanilla JavaScript
- Font Awesome 6.4.0 (via CDN)
- Apache web server (.htaccess for redirects, caching, compression)

### File Structure
- `index.html` - Main resume/CV page with profile, experience, skills, projects
- `Redes.html` - Social media links page
- `404.html` - Custom error page
- `styles.css` - Custom styles (Bootstrap base)
- `script.js` - Animations, lazy loading, smooth scrolling
- `img/` - Images, PDFs, videos

### Page Layout (index.html)
- Bootstrap grid: 4-column left sidebar + 8-column main content
- Left sidebar: personal info, company, skills (progress bars), languages, interests
- Right column: work experience, education, projects

### Key JavaScript Features
- Fade-in card animations on load
- IntersectionObserver for lazy loading images
- Smooth scrolling with reduced-motion awareness
- Service Worker registration (`/sw.js` - not yet implemented)

## SEO Configuration
- Meta tags: OG, Twitter Cards
- Multiple JSON-LD schemas: Person, WebSite, BreadcrumbList, ProfilePage
- `sitemap.xml` and `robots.txt` configured
- Canonical URLs set

## Server Configuration (.htaccess)
- www to non-www redirect (301)
- HTTP to HTTPS redirect
- Browser caching: images 1 year, CSS/JS 1 month
- Gzip compression enabled

## Color Scheme
- Primary: #2d7788 (teal)
- Header/Footer gradient: #1a2634 to #24788f
- Background: #f5f5f5, #f8f9fa

## Planned Pages (in sitemap.xml, not yet created)
- `blog.html` - Blog section
- `catalogo.html` - Projects catalog
