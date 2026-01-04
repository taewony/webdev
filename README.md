# **Web Development Cheat Sheet 🚀**

A comprehensive guide to HTML5, CSS, and JavaScript based on the "First Encounter with Web Development" curriculum. This cheat sheet covers everything from how the web works to building and deploying a dynamic website.

## **📖 Table of Contents**

* [Ch 01: The Web & How it Works](https://www.google.com/search?q=%23ch-01-the-web--how-it-works)  
* [Ch 02: Development Tools](https://www.google.com/search?q=%23ch-02-development-tools)  
* [Ch 03: HTML Basics](https://www.google.com/search?q=%23ch-03-html-basics)  
* [Ch 04: Essential HTML Tags](https://www.google.com/search?q=%23ch-04-essential-html-tags)  
* [Ch 05: CSS Basics](https://www.google.com/search?q=%23ch-05-css-basics)  
* [Ch 06: Essential CSS Properties](https://www.google.com/search?q=%23ch-06-essential-css-properties)  
* [Ch 07: Advanced CSS (Flexbox & Grid)](https://www.google.com/search?q=%23ch-07-advanced-css-flexbox--grid)  
* [Ch 08: JavaScript Introduction](https://www.google.com/search?q=%23ch-08-javascript-introduction)  
* [Ch 09: JavaScript Syntax](https://www.google.com/search?q=%23ch-09-javascript-syntax)  
* [Ch 10: DOM Manipulation & Events](https://www.google.com/search?q=%23ch-10-dom-manipulation--events)  
* [Ch 11: Project & Deployment](https://www.google.com/search?q=%23ch-11-project--deployment)  
* [Ch 12: Advanced Topics (A11y & APIs)](https://www.google.com/search?q=%23ch-12-advanced-topics-a11y--apis)

## **Ch 01: The Web & How it Works**

### **1.1 How the Web Works**

* **The Web (World Wide Web):** A global information space where documents and other web resources are identified by URLs.  
* **Client vs. Server:**  
  * **Client (Frontend):** The user's browser (Chrome, Safari). It sends **requests** and displays the result.  
  * **Server (Backend):** A remote computer that processes the request and sends back a **response** (HTML, CSS, JS, Data).  
* **Frontend:** Responsible for what users see and interact with (UI/UX).  
* **Backend & DB:** Handles business logic, server-side operations, and data storage (Database).

## **Ch 02: Development Tools**

### **2.1 Code Editors**

* **VS Code (Visual Studio Code):** The most popular code editor. Features include syntax highlighting, IntelliSense, and a vast ecosystem of extensions (e.g., Live Server, Prettier).

### **2.2 Chrome Developer Tools**

Access by pressing F12 or Ctrl+Shift+I (Cmd+Option+I on Mac).

* **Elements Tab:** Inspect and modify HTML structure and CSS styles in real-time.  
* **Console Tab:** View errors/warnings and run JavaScript code interactively.  
* **Sources Tab:** View project files and debug JavaScript (breakpoints).

## **Ch 03: HTML Basics**

### **3.1 What is HTML?**

**HTML (HyperText Markup Language)** is the standard markup language for creating web pages.

* **HTML5:** The latest version, introducing semantic tags and multimedia support without plugins.

### **3.2 HTML Structure**

A standard HTML5 boilerplate:

\<\!DOCTYPE html\> \<\!-- Defines the document type \--\>  
\<html lang="en"\> \<\!-- Root element \--\>  
\<head\>  
    \<meta charset="UTF-8"\> \<\!-- Character encoding \--\>  
    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\> \<\!-- Responsive viewport \--\>  
    \<title\>Page Title\</title\>  
\</head\>  
\<body\>  
    \<\!-- Content visible to the user goes here \--\>  
\</body\>  
\</html\>

## **Ch 04: Essential HTML Tags**

### **4.1 Text & Structure**

* **Headings:** \<h1\> (Main title) to \<h6\> (Lowest subtitle).  
* **Paragraph:** \<p\>This is a text block.\</p\>  
* **Line Break:** \<br\> (Self-closing).  
* **Thematic Break:** \<hr\> (Horizontal line).  
* **Emphasis:** \<strong\> (Bold, important), \<em\> (Italic, emphasis).

### **4.2 Links & Media**

* **Anchor (Link):** \<a href="https://google.com" target="\_blank"\>Go to Google\</a\>  
* **Image:** \<img src="image.jpg" alt="Description of image"\>

### **4.3 Lists**

* **Unordered List:** \<ul\> with \<li\> (Bullet points).  
* **Ordered List:** \<ol\> with \<li\> (Numbers).  
* **Definition List:** \<dl\> (List), \<dt\> (Term), \<dd\> (Description).

### **4.4 Tables**

\<table\>  
    \<caption\>Table Title\</caption\>  
    \<thead\>  
        \<tr\> \<\!-- Table Row \--\>  
            \<th\>Header 1\</th\> \<\!-- Table Header \--\>  
            \<th\>Header 2\</th\>  
        \</tr\>  
    \</thead\>  
    \<tbody\>  
        \<tr\>  
            \<td colspan="2"\>Data Cell spanning 2 columns\</td\>  
        \</tr\>  
    \</tbody\>  
\</table\>

### **4.5 Layout & Semantic Tags**

* **Non-semantic containers:** \<div\> (Block), \<span\> (Inline).  
* **Semantic Tags (HTML5):**  
  * \<header\>: Intro content or nav links.  
  * \<nav\>: Navigation menu.  
  * \<main\>: Dominant content of the body.  
  * \<section\>: Thematic grouping of content.  
  * \<article\>: Independent, self-contained content.  
  * \<footer\>: Footer for a section or page.

### **4.6 Forms**

\<form action="/submit" method="POST"\>  
    \<\!-- Labels improve accessibility and usability \--\>  
    \<label for="username"\>Name:\</label\>  
    \<input type="text" id="username" placeholder="Enter name"\>

    \<label\>\<input type="radio" name="gender" value="m"\> Male\</label\>  
    \<label\>\<input type="radio" name="gender" value="f"\> Female\</label\>

    \<select name="country"\>  
        \<option value="kr"\>Korea\</option\>  
        \<option value="us"\>USA\</option\>  
    \</select\>  
      
    \<textarea rows="4"\>Multi-line text...\</textarea\>  
      
    \<button type="submit"\>Register\</button\>  
\</form\>

## **Ch 05: CSS Basics**

### **5.1 Syntax**

**CSS (Cascading Style Sheets)** describes how HTML elements are displayed.

selector {  
    property: value;  
}  
/\* Example \*/  
h1 {  
    color: blue;  
    font-size: 24px;  
}

### **5.2 Inclusion Methods**

1. **Inline:** \<h1 style="color: red;"\> (Not recommended).  
2. **Internal:** \<style\> ... \</style\> in \<head\>.  
3. **External:** \<link rel="stylesheet" href="style.css"\> (Best practice).

### **5.3 Selectors**

* **Universal:** \* { margin: 0; } (Selects everything).  
* **Type:** p { ... } (Selects all \<p\>).  
* **Class:** .classname { ... } (Selects elements with class="classname").  
* **ID:** \#idname { ... } (Selects element with id="idname").  
* **Group:** h1, h2 { ... }.  
* **Descendant:** div p { ... } (All \<p\> inside \<div\>).  
* **Direct Child:** div \> p { ... } (Only direct children).  
* **Pseudo-class:** a:hover { ... } (When mouse is over).

## **Ch 06: Essential CSS Properties**

### **6.1 Typography**

* font-family: "Arial", sans-serif;  
* font-size: 16px, 1.5rem;  
* font-weight: normal, bold, 700;  
* color: hex (\#000), rgb, rgba;  
* text-align: left, center, right;  
* text-decoration: none (removes underlines), underline;

### **6.2 The Box Model 📦**

Every element is a rectangular box.

1. **Content:** The actual image or text.  
2. **Padding:** Space *inside* the border.  
3. **Border:** A border around the padding.  
4. **Margin:** Space *outside* the border.  
* box-sizing: border-box;: Includes padding and border in the element's total width/height.

### **6.3 Layout Basics**

* **display:**  
  * block: Takes full width (e.g., div, p).  
  * inline: Takes only necessary width (e.g., span, a).  
  * inline-block: Inline flow but allows setting width/height.  
  * none: Hides element completely.  
* **position:**  
  * static: Default.  
  * relative: Relative to its normal position.  
  * absolute: Relative to the nearest positioned ancestor.  
  * fixed: Fixed to the viewport (always visible).  
* **float:** left, right (Old layout method, often requires clear-fix).

## **Ch 07: Advanced CSS (Flexbox & Grid)**

### **7.1 Flexbox (1-Dimensional)**

Great for aligning items in a row or column.

.container {  
    display: flex;  
    justify-content: center; /\* Main axis alignment (horizontal usually) \*/  
    align-items: center;     /\* Cross axis alignment (vertical usually) \*/  
    flex-direction: row;     /\* or column \*/  
}

### **7.2 Grid (2-Dimensional)**

Great for overall page layout.

.container {  
    display: grid;  
    grid-template-columns: 1fr 1fr 1fr; /\* 3 equal columns \*/  
    gap: 10px;  
}

### **7.3 Responsive Design**

Using **Media Queries** to adapt to screen sizes.

@media (max-width: 768px) {  
    .container {  
        flex-direction: column;  
    }  
}

### **7.4 Transitions & Animations**

* transition: all 0.3s ease; (Smooth change).  
* transform: rotate(45deg) scale(1.1); (Move/Rotate/Scale).

## **Ch 08: JavaScript Introduction**

### **8.1 Adding JS**

**JavaScript** enables dynamic interaction.

* **Internal:** \<script\> ... \</script\>  
* **External:** \<script src="script.js" defer\>\</script\>  
  * *Note:* Use defer to execute script after HTML parses.

## **Ch 09: JavaScript Syntax**

### **9.1 Variables**

* let: Reassignable variables. Block-scoped.  
* const: Constant variables (cannot reassign). Block-scoped.  
* var: Old function-scoped variable (Avoid usage).

### **9.2 Data Types**

* **Primitives:** String, Number, Boolean (true/false), undefined, null.  
* **Reference:** Array \[1, 2, 3\], Object { key: "value" }.

### **9.3 Control Flow**

// Conditional  
if (age \> 18\) {  
    console.log("Adult");  
} else {  
    console.log("Minor");  
}

// Loop (For)  
for (let i \= 0; i \< 5; i++) {  
    console.log(i);  
}

// Loop (For...of)  
const fruits \= \["Apple", "Banana"\];  
for (const fruit of fruits) {  
    console.log(fruit);  
}

### **9.4 Functions**

// Function Declaration  
function add(a, b) {  
    return a \+ b;  
}

// Arrow Function (ES6)  
const add \= (a, b) \=\> a \+ b;

## **Ch 10: DOM Manipulation & Events**

### **10.1 DOM (Document Object Model)**

The tree structure of HTML elements.

### **10.2 Selecting Elements**

const title \= document.getElementById("main-title");  
const btn \= document.querySelector(".btn-submit"); // Selects first match  
const items \= document.querySelectorAll(".item"); // Selects all

### **10.3 Manipulation**

title.textContent \= "New Title"; // Change text  
title.style.color \= "red";       // Change CSS  
title.classList.add("active");   // Add class

### **10.4 Events**

const button \= document.querySelector("button");

button.addEventListener("click", (event) \=\> {  
    alert("Button Clicked\!");  
    console.log(event.target);  
});

## **Ch 11: Project & Deployment**

### **11.1 Standard Project Structure**

/my-project  
  ├── index.html  
  ├── /css  
  │    └── style.css  
  ├── /js  
  │    └── script.js  
  └── /images  
       └── logo.png

### **11.2 Deployment (GitHub Pages)**

1. Push your code to a GitHub repository.  
2. Go to **Settings** \> **Pages**.  
3. Select the **main** branch as the source.  
4. Your site is live at https://username.github.io/repo-name.

## **Ch 12: Advanced Topics (A11y & APIs)**

### **12.1 Web Accessibility (A11y)**

Making the web usable for everyone, including people with disabilities.

* Use semantic HTML (\<button\> vs \<div\>).  
* Always provide alt text for images.  
* Ensure sufficient color contrast.

### **12.2 APIs & Fetch**

Communicating with servers to get data (e.g., JSON).

fetch('\[https://api.example.com/data\](https://api.example.com/data)')  
    .then(response \=\> response.json())  
    .then(data \=\> console.log(data))  
    .catch(error \=\> console.error('Error:', error));

### **12.3 Frontend Libraries**

Frameworks that make building complex UIs easier.

* **React, Vue, Angular:** Component-based architecture.

This cheat sheet is based on the book structure "First Encounter with Web Development". Happy Coding\! 💻

## GitHub 계정 생성 및 새 저장소(Repository) 만들기

### 1. 현재 폴더를 Git 저장소로 초기화
git init

### 2. 현재 폴더의 모든 파일을 추적 대상으로 추가 (준비 영역에 올림)
git add .

### 3. 변경 사항을 로컬에 기록 (커밋)
git commit -m "프로젝트 첫 커밋"

### 4. GitHub 원격 저장소 주소를 'origin'이라는 이름으로 연결 
### 아래 URL은 본인의 저장소 주소로 변경 필수!
git remote add origin https://github.com/your_ID/repo_name.git

### 5. 로컬 커밋을 GitHub(origin)의 'main' 브랜치로 업로드 (푸시)
git branch -M main        # 브랜치 이름을 master에서 main으로 변경
git push -u origin main