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

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/recipe-book.git
   cd recipe-book

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
