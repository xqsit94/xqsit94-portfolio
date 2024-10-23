---
title: 'Deploy Astro.js Website to GitHub Pages using BUN and GitHub Actions'
category: 'AstroJS'
description: 'In this blog post, we will guide you through the process of deploying an Astro.js website to GitHub Pages using BUN as your package manager and GitHub Actions for automation.'
publishedDate: 'Sep 12 2023'
updatedDate: 'Sep 12 2023'
heroImage: '/images/astrojs/deploy-astrojs-website-github-pages-using-bun-github-actions.png'
tags:
  - BUN
  - GitHubActions
  - AstroJs
  - GitHubPages
image:
  icon: 'logos:astro-icon'
  title: 'AstroJS + BUN + GitHub Actions'
  subtitle: 'Deploy Astro.js Website to GitHub Pages using BUN and GitHub Actions'
---

## Introduction

Astro.js is making waves in the front-end world for its unparalleled speed and performance. But what's the point of creating an amazing website if you can't deploy it effortlessly? In this blog post, we'll guide you through the process of deploying an Astro.js website to GitHub Pages using BUN as your package manager and GitHub Actions for automation.

## Why Choose Astro.js?

Blazing Fast: Astro.js ensures fast load times with optimized performance.
Multi-Framework Support: Build with components from React, Vue, Svelte, or even vanilla JS.

## Why BUN?

Lightweight and Fast: BUN is emerging as a quick and reliable package manager.
Simplified Dependency Management: Offers a straightforward way to manage your project's dependencies.

## Why GitHub Pages?

Simplicity: It's free and only requires a simple git push to deploy your website.
Integration: Being a GitHub service, it integrates perfectly with GitHub Actions for CI/CD.

## Prerequisites

- An Astro.js project on your local machine
- GitHub account and a repository for your project
- BUN installed on your machine
- Familiarity with GitHub Actions

## Step-by-Step Guide for Deployment

### Step 1: Install BUN

If you haven't already, install BUN on your machine using the following command:
Supported Platforms: Linux, macOS, Windows(via WSL)

```bash
curl -fsSL https://bun.sh/install | bash
```

### Step 2: Setup Your Astro.js Project

If you already have an Astro.js project, remove the `node_modules` directory and the appropriate lock file (e.g., `package-lock.json` or `yarn.lock`). And initialize with BUN

For example, if you're using npm:

```bash
rm -rf node_modules package-lock.json

# install dependencies
bun install

# run dev server
bun run dev
```

If you don't have an Astro.js project, you can create one using the following command:

```bash
bun create astro@latest
```

and follow the prompts.
![Create Astro.js Project](/images/astrojs/deploy-astrojs-website-github-pages-using-bun-github-actions/installation.png)

### Step 3: Create a GitHub Repository

If you don't have a GitHub repository for your project, create one by following these steps (skip this step if you already have a repository):

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin
git push -u origin main
```

### Step 4: Create a GitHub Actions Workflow

Create a new file named `deploy.yml` in the `.github/workflows` directory of your project and paste the following code in it:

```yaml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [main]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:

# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Use Bun
        uses: oven-sh/setup-bun@v1
      - name: Install, build, and upload your site
        run: bun install && bun run build
      - name: Upload your site to GitHub Pages
        uses: actions/upload-pages-artifact@v2
        with:
          path: dist/

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

make sure to replace `main` with your branch name if you're using a different branch.

### Step 5: Commit and Activate GitHub Actions

Commit and push your changes to the `main` branch of your repository:

```bash
git add .
git commit -m "Add GitHub Actions workflow"
git push origin main
```

GitHub Actions will now automatically kick off the workflow to build and deploy your Astro.js project to GitHub Pages whenever you push to the main branch.

## Conclusion

Deploying your Astro.js website to GitHub Pages is a breeze with BUN and GitHub Actions. With minimal configuration, you get automated builds and deployments, leaving you more time to concentrate on building your fantastic website. Give it a try and experience the simplicity and power of this trio. Happy coding!
