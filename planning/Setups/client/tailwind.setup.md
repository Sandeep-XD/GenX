# installing tailwind 4.0.0
```
    npm install tailwindcss @tailwindcss/vite
```
# vite.config.js file configuration
```
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'
    // https://vite.dev/config/
    export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    })

```

# import tailwind in index.css
```
    @import "tailwindcss";
```