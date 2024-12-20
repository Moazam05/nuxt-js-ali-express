# Nuxt App

Nuxt App is a modern web application built with **Nuxt.js 3** and the **Composition API**, featuring a robust stack of tools for building scalable and efficient web applications. This project includes authentication, state management, database integration, and more.

## Features

### 1. **Nuxt 3 with Composition API**
- Utilizes the power of the Composition API for better code organization and reusability.

### 2. **State Management with Pinia**
- State is managed with Pinia, along with support for persisted states.

### 3. **Database Integration**
- Prisma is used as an ORM for seamless database interactions.

### 4. **Authentication**
- Authentication is handled using the **@nuxtjs/supabase** module.

### 5. **Payment Integration**
- Stripe is integrated for managing payments.

### 6. **Responsive UI**
- Tailwind CSS is used for building a responsive and modern user interface.

### 7. **Icon Support**
- Includes Nuxt Icon for streamlined icon management.

### 8. **Utility Functions**
- Lodash is included for enhanced utility support.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nuxt-app.git
   cd nuxt-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g. STRIPE_PK_KEY, STRIPE_PK_KEY, SUPABASE_URL, SUPABASE_KEY, DATABASE_URL).

4. Start the development server:
   ```bash
   npm run dev
   ```

## Scripts

- `dev`: Start the development server.
- `build`: Build the application for production.
- `generate`: Generate a static version of the app.
- `preview`: Preview the production build.
- `postinstall`: Prepare the Nuxt project after dependencies are installed.
- `seed`: Seed the database using Prisma.

## Tech Stack

- **Nuxt.js 3**: The core framework
- **Composition API**: For scalable and maintainable code
- **Pinia**: State management library
- **Prisma**: ORM for database operations
- **Supabase**: Backend-as-a-Service for authentication and database
- **Stripe**: Payment processing
- **Tailwind CSS**: For styling
- **Lodash**: Utility functions
