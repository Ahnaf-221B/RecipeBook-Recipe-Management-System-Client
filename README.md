## Project Name

 Recipe Book

 ## Project Description

A modern and user-friendly Recipe Book web application where food enthusiasts can explore, manage, and share their favorite recipes. Users can add new recipes, update or delete their own recipes, like or dislike others’ recipes, and maintain a wishlist of recipes they love. The app dynamically highlights the top recipes based on user likes, making discovery simple and engaging.

---

## Features

- **User Authentication**: Sign up and sign in to personalize your experience.
- **Manage Recipes**: Add, update, or delete your own recipes with rich details like ingredients, instructions, cuisine type, preparation time, and categories.
- **Browse Recipes**: Discover recipes from other users across multiple cuisines and categories.
- **Wishlist**: Save your favorite recipes to your personal wishlist for quick access.
- **Likes & Dislikes**: Express your preferences by liking or disliking recipes.
- **Top Recipes Section**: Dynamically displays the most liked recipes to highlight popular choices.
- **Responsive Design**: Mobile-friendly UI built with TailwindCSS.
- **Dark/Light Theme Toggle**: Switch between dark and light modes for comfortable viewing.
- **Interactive UI Components**: Modals, tooltips, and toast notifications enhance user experience.
- **Real-time Updates**: Recipe lists update instantly after modifications.
- **Secure Backend**: Firebase Authentication & Node.js backend with MongoDB for recipe data.

---

## Technologies Used

- **Frontend:**
  - React 19
  - React Router DOM
  - Tailwind CSS (with vite plugin)
  - React Icons
  - React Tooltip
  - SweetAlert2 for alerts and confirmations
  - React Toastify for notifications
  - React Simple Typewriter for animated text
  - Swiper for sliders and carousels

- **Backend:**
  - Node.js with Express (MongoDB connection)
  - Firebase Authentication

- **Database:**
  - MongoDB Atlas (NoSQL database for recipes storage)

---

## 🛠 Setup Instructions & Installation

1. Clone the repository:
   ```bash
   git clone 


2. Install dependencies::
    ```bash
    npm install

    ⚠️ Make sure to initialize Tailwind CSS and configure Vite if you haven’t already. For example, after installing, run:
    ```bash
    npx tailwindcss init -p

3. Configure Firebase:
    Create a .env.local file and add your Firebase config:
    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_auth_domain
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_storage_bucket
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id

4. Run locally:
    ```bash
    npm run dev

---

## Fix Client-Side Routing (React Router)
    If using React Router, add a _redirects file in your public/ folder:
    ```bash
    /*    /index.html   200

---

## 🚀 Deployment Steps to Firebase

1. Login to Firebase CLI (if not already):
    ```bash
    npm install -g firebase-tools
    firebase login

2. Initialize Firebase in your project:
    ```bash
    firebase init

    Choose Hosting.
    Select your Firebase project.
    Set dist as the public directory.
    Choose Yes for single-page app rewrite (index.html).
    Choose No for GitHub deploys (unless needed).

3. Build your React app:
    ```bash
    npm run build

4. Deploy to Firebase:
    ```bash
    firebase deploy

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
