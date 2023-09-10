---
title: 'Running Sass in a Vite project'
category: 'Sass'
description: 'Modern web development is all about speed and efficiency, and two tools that exemplify this philosophy are SASS and Vite. We will walk you through the steps to run SASS on Vite.'
publishedDate: 'Sep 05 2023'
updatedDate: 'Sep 05 2023'
heroImage: '/images/sass/running-sass-vite-project.png'
tags:
  - sass
  - vite
image:
  icon: 'logos:sass'
  title: 'Vite + Sass'
  subtitle: 'Compiling and running Sass in a Vite project'
---

## **Introduction**

Modern web development is all about speed and efficiency, and two tools that exemplify this philosophy are SASS and Vite. While SASS enables you to write DRY, modular CSS, Vite provides an extremely fast development environment with its optimized build tooling. Combining these two technologies can significantly boost your productivity. In this blog post, we will walk you through the steps to run SASS on Vite.

## **What is SASS?**

Syntactically Awesome Stylesheets (SASS) is a CSS preprocessor that lets you use variables, nested rules, mixins, and more, all with a fully CSS-compatible syntax. SASS helps keep large stylesheets well-organized and allows you to share design within and across projects.

## **What is Vite?**

Vite is a build tool and development server that aims to be faster and leaner than solutions like Webpack. It offers features like hot module replacement and optimizes your workflow for production with minimal configuration.

### Step 1: Setting Up a Vite Project

I’m going to create a new vite project using template vanilla typescript. If you prefer to use some other framework you can change the template parameter

```bash
# npm
npm create vite@latest vite-sass -- --template vanilla-ts

# yarn
yarn create vite vite-sass --template vanilla-ts

# pnpm
pnpm create vite vite-sass --template vanilla-ts
```

### Step 2: Install required dependencies sass and vite-plugin-sass

```bash
# npm
npm install -D sass vite-plugin-sass

# yarn
yarn add -D sass vite-plugin-sass

# pnpm
pnpm add -D sass vite-plugin-sass
```

### Step 3: Create a `vite.config.ts` file in the root of your project and add the following configuration:

```bash title="vite.config.ts"
import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [sass()],
});
```

This configuration sets up the `vite-plugin-sass` plugin to compile Sass files.

### Step 4: Setting up `style.scss`

- First delete the `style.css` file which is already present in your vite project.
- Create a file name `style.scss` in your project and add following scss code.

```scss title="style.scss"
$font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
$color-scheme: light dark;

:root {
  font-family: $font-family;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: $color-scheme;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
  &:hover {
    color: #535bf2;
  }
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  &.vanilla:hover {
    filter: drop-shadow(0 0 2em #3178c6aa);
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
```

### Step 5: Import the `style.scss`

Now import the style.scss in your root project file, in my case it is `main.ts`

```bash title="main.ts"
import './style.scss'
```

### Step 6: Start the development server

Start the vite development server by running following command

```bash
# npm
npm run dev

# yarn
yarn dev

#pnpm
pnpm dev
```

This will start the Vite development server and compile your Sass code. Vite's HMR ensures that any change you make to your **`.scss`** files will immediately be reflected in the browser, without a full page reload.

**Note:** If you are using a different file extension for your Sass files, you can configure the `vite-plugin-sass` plugin to use that extension by passing an options object to the plugin. For example, if you are using `.sass` files, you can configure the plugin like this:

```typescript title="vite.config.ts"
export default defineConfig({
  plugins: [sass({ sassOptions: { indentedSyntax: true } })]
})
```

This configuration sets the `indentedSyntax` option to `true`, which tells the plugin to use the `.sass` file extension instead of `.scss`.

## **Conclusion**

Running SASS on Vite streamlines your development process, combining the power and flexibility of SASS with the speed and efficiency of Vite. With minimal setup, you can enjoy a development environment that’s not only powerful but also incredibly fast.
