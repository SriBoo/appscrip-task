# Appscrip Frontend Assignment – Product Listing Page (PLP)

This project is a fully functional Product Listing Page (PLP) built with Next.js 15, TypeScript, and Tailwind CSS as part of the Appscrip Frontend Developer Assignment.

It replicates an e-commerce interface featuring filters, search, cart management, and responsive design — closely matching the provided Figma design:
[https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1&mode=design](https://www.figma.com/file/N0Tv7yYLf3kfMLQjUncUlx/Design-Task---PLP?type=design&node-id=0-1&mode=design)

---

## Live Demo
[Live Deployment (Vercel)](https://appscrip-task-varun-kumar-nunna.vercel.app)  
(Replace this link after deployment)

---

## Features Implemented

- Product Listing Page – Displays items dynamically fetched from [Fake Store API](https://fakestoreapi.com/)
- Filters by Category & Price – Multi-select filtering and live updates
- Search Bar – Instant search by product title
- Responsive Layout – Works across mobile, tablet, and desktop
- Add to Cart / Remove / Quantity Control
- Persistent Cart – Items are saved in localStorage
- SEO Optimized – Semantic HTML, meta title & description, alt text on images
- Minimal DOM & Dependencies – Pure React + Tailwind CSS
- Hosted on Vercel – Server-side rendering (SSR) ready

---

## Folder Structure

```

Appscrip-task/
│
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navbar with search and cart toggle
│   │   ├── Filters.tsx         # Sidebar filters
│   │   ├── ProductGrid.tsx     # Displays products in responsive grid
│   │   ├── Footer.tsx          # Footer section
│   ├── globals.css             # Tailwind and global styles
│   ├── page.tsx                # Main page logic
│
├── public/                     # Static assets (if any)
├── .gitignore
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── README.md

````

---

## Tech Stack

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- API: Fake Store API
- Deployment: Vercel
- Data Persistence: localStorage

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Appscrip-task-Varun-Kumar-Nunna.git
cd Appscrip-task-Varun-Kumar-Nunna
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

---

## Functional Overview

| Feature           | Description                                      |
| ----------------- | ------------------------------------------------ |
| Search            | Filters product list by title (case-insensitive) |
| Filters           | Filter products by category and price            |
| Add to Cart       | Add or increase product quantity                 |
| Remove from Cart  | Remove individual product                        |
| Quantity Control  | Increment or decrement product count             |
| Persistent Cart   | Saves cart items using localStorage              |
| Responsive Design | Fully adaptable UI across devices                |

---

## SEO Implementation

* Title and meta description tags
* Proper h1 and h2 heading structure
* Alt text for all product images
* Schema.org-ready structure for future use

---

## Author

**Varun Kumar Nunna**
Data Engineer | Cloud & Frontend Developer
GitHub: [https://github.com/<your-username>](https://github.com/<your-username>)

---

## License

This project is open-sourced for evaluation under the MIT License.

---

> “We believe you have great potential. All the Best!!” — Appscrip Team

```

---

### Before you push:
1. Replace `<your-username>` with your real GitHub username.  
2. Replace the Vercel link once deployed.

---

Would you like me to now provide the **SEO `<head>` section code** (for `layout.tsx`) to fully meet the assignment’s “SEO settings” requirement (page title, description, schema, alt, etc.)?
```
