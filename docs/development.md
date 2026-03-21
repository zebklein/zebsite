# Development Guide

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)

## Setup

Install dependencies once after cloning:

```bash
npm install
```

## Running locally

```bash
npm start
```

Opens a local dev server at `http://localhost:8080` with live reload. Changes to templates, CSS, and JS are reflected automatically.

## Building for production

```bash
npm run build
```

Outputs the static site to `_site/`. This is what gets deployed to GitHub Pages.

## Project structure

```
src/
├── _includes/
│   ├── nav.njk              # shared navigation (edit once, applies everywhere)
│   └── layouts/
│       └── base.njk         # base HTML layout
├── css/
│   ├── base.css             # reset + nav styles (loaded on every page)
│   ├── hero.css
│   ├── gallery.css
│   ├── code.css
│   ├── philosophy.css
│   ├── pdf.css
│   └── architecture.css
├── js/
│   └── code-script.js       # typing animation for the Code page
├── index.njk
├── gallery.njk
├── code.njk
├── philosophy.njk
├── physis.njk
├── ethos.njk
├── garage.njk
├── minka.njk
└── preprints.njk
media/                       # images, videos, PDFs, logos (unchanged)
_site/                       # build output — do not edit directly
```

## Adding a new page

1. Create `src/yourpage.njk` with this front matter:

```yaml
---
layout: layouts/base.njk
title: "Page Title"
pageClass: "your-page-class"
extraCss: ["your-page"]
logoSrc: "media/logo-white.png"
permalink: "yourpage.html"
---
```

2. Add any page-specific styles to `src/css/your-page.css`.
3. Add the page link to `src/_includes/nav.njk`.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds the site and deploys it to GitHub Pages automatically.

> **First-time setup:** In the GitHub repo → Settings → Pages, set the Source to **GitHub Actions**.
