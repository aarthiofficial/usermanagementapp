# React User Management CRUD (JSONPlaceholder)


A responsive CRUD app built with **React + TypeScript + React Router** that manages users via the public **JSONPlaceholder** API. It demonstrates fetching, creating, updating, and deleting users (simulated by the API), with loading states, error handling, optimistic UI for deletes, and toast notifications.


## Features
- Fetch & list users in a responsive table (name, email, phone)
- Create user (POST)
- Update user (PUT)
- Delete user (DELETE) with optimistic UI
- Detail/Edit route per user
- React Router v6 for navigation
- Functional components + Hooks (useState, useEffect, useMemo)
- Loading spinner and clear error messages
- Accessible UI, keyboard-friendly, responsive layout
- Zero external UI libs – lightweight CSS only


## Tech Stack
- React 18, TypeScript, Vite
- React Router 6


## Getting Started
```bash
# 1) Create project folder and copy files


# 2) Install dependencies
npm install


# 3) Run dev server
npm run dev


# 4) Build for production
npm run build && npm run preview
```


## Project Structure
```
src/
api/ # API layer for JSONPlaceholder
components/ # Reusable UI components (Spinner, Toast, UserForm, UserRow)
routes/ # Router views (Home, CreateUser, UserDetail)
types.ts # Shared TypeScript types
App.tsx # App shell + routes
main.tsx # Entry point
styles.css # App styles, responsive layout
```


## Notes on JSONPlaceholder
- The API **simulates** writes. POST/PUT/DELETE return a response but do not persist data. See https://jsonplaceholder.typicode.com/


## Deploying
### Deploy to Vercel
1. Create a repository on GitHub and push this code.
2. In Vercel, **New Project** → import your repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy.


### Deploy to Netlify
1. New site → Import from Git.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Add redirect for SPA routing: create `public/_redirects` with:
```
/* /index.html 200
```


## Environment
No environment variables are required. All requests hit `https://jsonplaceholder.typicode.com`.


## Accessibility
- Semantic HTML, focusable buttons/links
- `aria-busy` on spinner, `aria-live` on toasts


## License
MIT
