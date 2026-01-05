# Personal Portfolio Website Plan

## 1. Overview
This document is a design and development guide for building a portfolio website for an individual who **"operates a Bakery, raises Cats, and runs a Cat Blog"**. It integrates resources and code from the previously studied `layout`, `DOM_interaction`, and `SPA` folders to construct a single complete website.

## 2. Site Structure

The site can be configured as a **Single Page** or **Multi Page** structure where users can navigate to each section via a top fixed Navigation Bar. However, considering user experience, we propose a configuration that mixes the **Single Page Scroll** method with **individual project detail pages**.

### Navigation Menu
*   **Home**: Self-introduction and Portfolio Main (Landing Page)
*   **MyCats**: Introduction to pet cats at home (Utilizing DOM Interaction)
*   **CatBlog**: Currently operating Cat Blog (Utilizing SPA)
*   **Bakery**: Currently operating Bakery introduction (Utilizing Layout)
*   **About**: Personal introduction and contact information

---

## 3. Detailed Content & Integration Plan by Section

### 3.1 Common Layout (Layout Template)
*   **Navigation Bar**: Fixed at the top of the page (`position: sticky` or `fixed`).
    *   Menu Items: `Home`, `MyCats`, `CatBlog`, `Bakery`, `About`
    *   Style: Unify the overall theme based on the style from `layout/css/style.css`.
*   **Footer**: Copyright information and SNS links (Reference footer from `layout/index.html`).

### 3.2 Home (Main Section)
*   **Composition**: Impressive hero image and a simple welcome message.
*   **Resources**: Utilize images from `layout/images` or a personal profile image.
*   **Features**: Provide summary buttons to navigate to each section.

### 3.3 MyCats (Cat Gallery - DOM Interaction)
*   **Features**: A gallery where cat photos change dynamically when a button is clicked.
*   **Integration Method**: Import and implement the script logic from `@DOM_interaction/index.html`.
    *   **HTML**: Place the image display area and the "Show Next Cat" button.
    *   **JS**: Dynamically control images and description text using `document.createElement`, `appendChild`, `textContent`, etc.
*   **Resources**: Use `cat7.png`, `cat8.png`, `cat9.png` from the `@DOM_interaction/images/` folder.

### 3.4 CatBlog (Cat Blog - SPA)
*   **Features**: Displays a list of blog posts and an accordion UI where content expands when the title is clicked.
*   **Integration Method**: Port the structure and functions from `@SPA/index.html` to the section.
    *   **HTML**: Use the `<article class="post-home">` structure as is.
    *   **CSS**: Apply `.post-content { display: none; }` and `.active` class styles.
    *   **JS**: Implement the `.active` class toggle function via `title.addEventListener('click')`.
*   **Resources**: Utilize cat images from the `@SPA/images/` folder.

### 3.5 Bakery (Bakery Introduction - Layout)
*   **Features**: Introduction to the bakery menu and store information.
*   **Integration Method**: Utilize the design of the `menu-section` and `contact` sections from `@layout/index.html`.
    *   **HTML**: Implement a clean menu list using `<table>`.
    *   **CSS**: Apply table styles and fonts (`Dancing Script`) from `css/style.css`.
*   **Resources**: Utilize bread images (`bread1.jpg`, etc.) and favicon from `@layout/images/`.

### 3.6 About (Contact & Introduction)
*   **Composition**: Brief resume, tech stack, contact form.
*   **Integration Method**: Expand the Footer area from `@layout/index.html` to configure a detailed contact section.

---

## 4. Tech Stack & File Structure

### 4.1 Tech Stack
*   **HTML5**: Utilization of semantic tags (`<nav>`, `<section>`, `<article>`).
*   **CSS3**: Flexbox/Grid layout, Responsive design (`@media`), CSS Animation.
*   **JavaScript (ES6+)**: DOM manipulation, Event handling.

### 4.2 Proposed Directory Structure
```
Portfolio/
├── index.html          # Integrated main page
├── css/
│   └── style.css       # Integrated stylesheet
├── js/
│   └── script.js       # Integrated script for navigation, gallery, accordion
└── images/             # Consolidated image folder from each project
    ├── mycats/         # Images from DOM_interaction
    ├── blog/           # Images from SPA
    └── bakery/         # Images from Layout
```

## 5. Development Steps

1.  **Folder & File Creation**: Create the basic structure within the `Portfolio` folder.
2.  **Resource Integration**: Copy and organize images from each folder to `Portfolio/images`.
3.  **HTML Skeleton**: Write `index.html` including `nav` and each `section`.
4.  **Style Integration**: Analyze CSS from each project to adjust class names (to avoid conflicts, use namespaces, etc.) and merge into `style.css`.
5.  **Script Implementation**:
    *   Port the image slider function for the MyCats section.
    *   Port the accordion function for the CatBlog section.
    *   Implement navigation scroll functionality.
6.  **Testing & Debugging**: Verify overall page behavior and fix styles.
