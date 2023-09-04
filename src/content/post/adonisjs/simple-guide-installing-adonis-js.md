---
title: 'A Simple Guide to Installing Adonis JS 5'
category: 'AdonisJS'
description: 'Adonis JS 5 is a powerful JavaScript framework that allows developers to build robust and scalable web applications. This article will provide you with an easy-to-follow guide on installing Adonis JS 5.'
publishedDate: 'Jul 11 2023'
updatedDate: 'Jul 11 2023'
heroImage: '/images/adonisjs/simple-guide-installing-adonis-js.png'
tags:
  - adonisjs
  - tutorial
image:
  icon: 'logos:adonisjs-icon'
  title: 'Installing Adonis JS 5'
  subtitle: 'Simple Guide'
---

## Introduction

Adonis JS 5 is a powerful JavaScript framework that allows developers to build robust and scalable web applications. This article will provide you with an easy-to-follow guide on installing Adonis JS 5. Let's dive in!

## Step 1: Install Node.js and NPM

Before we begin, make sure you have Node.js and NPM (Node Package Manager) installed on your machine. You can download the latest version of Node.js from the official website (<strong><a href="https://nodejs.org/" target="_blank">nodejs.org</a></strong>). Once the installation is complete, open your command prompt or terminal and verify the installation by typing the following commands:

```bash
node -v
npm -v
```

If you see the version numbers displayed, it means Node.js and NPM are installed correctly. Now, let's start installing Adonis JS 5 by creating a new project.

## Step 2: Create a New Project

Now, let's create a new directory for your Adonis JS project. Open your command prompt or terminal and navigate to the location where you want to create the project folder. Once you're there, run the following command and press `y` to proceed next step.

```bash
npm init adonis-ts-app@latest my-adonis-app
```

## Step 3: Choose project structure

Now, you need to choose the project structure based on your application requirements. Adonis JS offers three options: API, Web, and Slim. The API structure is suitable for building APIs, the Web structure is ideal for full-stack web applications, and the Slim structure provides a minimal setup for smaller projects. Choose the structure that best fits your needs.

![Project Structure](/images/adonisjs/simple-guide-installing-adonis-js/project-structure.png)

In my case I have chosen api as my project structure.

## Step 4: More project customization

After selecting the desired structure, you will be prompted to enter a project name. Provide a name for your project, just press Enter to choose default name i.e "my-adonis-app.”

![Customization](/images/adonisjs/simple-guide-installing-adonis-js/customization.png)

Next, you need to set up ESLint and Prettier for code linting and formatting. Just press (y/n) based on your needs. In my case I have selected `y` for both eslint and prettier.

## Step 5: Start development server

Now that everything is set up, you can start the Adonis JS development server. Change the directory to the project folder by running:

```bash
cd my-adonis-app
```

To start the project, run the following command in your project directory:

```bash
node ace serve --watch
```

Adonis JS will start the server and automatically restart whenever you make changes to your code. You should see a message indicating that the server is running on a specific port, such as **`localhost:3333`**.

Just open the [localhost:3333](http://localhost:3333) in your web browser to see adonis app is running. In my case since I have chosen api as project structure it renders `{ hello: world }` json string.

![Browser View](/images/adonisjs/simple-guide-installing-adonis-js/browser-view.png)

## Conclution

Congratulations! You have successfully installed Adonis JS 5. You can now begin building your web application using the powerful features provided by Adonis JS. Remember to consult the official Adonis JS documentation (**[https://docs.adonisjs.com](https://docs.adonisjs.com/)**) for further guidance and explore the vast possibilities this framework offers. Happy coding!
