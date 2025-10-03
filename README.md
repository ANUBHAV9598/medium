## Medium Clone – Frontend

Modern React frontend for a Medium-like blogging app. It supports authentication, protected routes, creating and reading blog posts, and a polished UI.

### Highlights
- **Authentication**: Signin/Signup with JWT; token stored in `localStorage`.
- **Protected routes**: Unauthenticated users are redirected to `/signin`.
- **Blog features**: View all blogs, read a single blog, and publish new posts.
- **Modern UI**: Framer Motion animations, responsive layout, and clean design.
- **Shared types**: Uses a common package for Zod schemas and types.

### Tech Stack
- React + TypeScript
- React Router v6
- Axios
- Tailwind CSS
- Framer Motion

### Project Structure
```txt
src/
  App.tsx                 # Routes and protection
  main.tsx                # App bootstrapping with BrowserRouter
  axios/axios.ts          # Axios instance + auth header interceptor
  components/
    Blogs.tsx             # List of blogs (protected)
    Blog.tsx              # Blog detail (protected)
    Signin.tsx            # Signin page (public)
    Signup.tsx            # Signup page (public)
    ProtectedRoute.tsx    # Guard for protected routes
    ui/
      AuthForm.tsx        # Shared auth form
      Publish.tsx         # Publish blog (protected)
      Error.tsx           # Fallback route
```

### Environment & Configuration
- API Base URL is configured in `src/axios/axios.ts`.
  - Example (Cloudflare Workers backend):
    ```ts
    baseURL: "https://backend.anubhavpandya99.workers.dev/api/v1"
    ```
  - For local development, you can switch to:
    ```ts
    baseURL: "http://127.0.0.1:8787/api/v1"
    ```
  - The Axios instance automatically attaches `Authorization: Bearer <token>` if found in `localStorage` as `token`.

### Authentication & Route Protection
- On successful signin/signup, the JWT is saved to `localStorage` as `token`.
- `ProtectedRoute` checks for a token and redirects to `/signin` if absent.
- Protected pages:
  - `/blogs`
  - `/blog/:id`
  - `/publish`
- Public pages:
  - `/signin`
  - `/signup`
- Root `/` redirects to `/signin`.

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the app at the URL shown in your terminal (typically `http://localhost:5173`).

### Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview production build locally

### Publishing Flow (User)
1. Sign up or sign in.
2. Navigate to `/publish` to create a new blog post.
3. After publishing, view posts at `/blogs` and open details at `/blog/:id`.

### Notes
- Ensure your backend CORS allows the frontend origin.
- For Cloudflare Workers backend, verify the deployed URL matches `baseURL` in Axios.

### Contributing
1. Create a feature branch.
2. Make changes with clear, readable code and meaningful names.
3. Open a PR describing your change and testing steps.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
