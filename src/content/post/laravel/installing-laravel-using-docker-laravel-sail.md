---
title: 'Installing Laravel using Docker and Laravel Sail'
category: 'Laravel'
description: 'Simple guide to install Laravel using Docker and Laravel Sail. Laravel Sail is a lightweight command-line interface (CLI) for managing Laravel applications using Docker.'
pubDate: 'Aug 05 2023'
updatedDate: 'Aug 05 2023'
heroImage: '/images/laravel/installing-laravel-using-docker-laravel-sail.png'
tags:
  - laravel
  - php
---

## **What is Laravel Sail?**

Laravel Sail is a lightweight command-line interface (CLI) for managing Laravel applications using Docker. It provides a pre-configured Docker setup specifically designed for Laravel projects, allowing developers to get up and running quickly.

## **Installing Docker**

Before we can start using Laravel Sail, we need to install Docker on our machine. Docker provides installation packages for various operating systems, including Windows, macOS, and Linux. Visit the official Docker website (**https://www.docker.com/**) and download the appropriate version for your system. Follow the installation instructions provided by Docker to complete the installation process.

## **Setting Up a New Laravel Project**

Once Docker is installed, we can proceed with setting up a new Laravel project using Laravel Sail.

Note: This process doesn’t required installing php on your local system.

1. Make sure docker is running.
2. Now open a terminal or command prompt and navigate to the directory where you want to create your Laravel project.
3. Run the following command to create a new Laravel project:

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php82-composer:latest \
    composer create-project laravel/laravel my-laravel-app --ignore-platform-reqs
```

This command creates a new Laravel project using the latest version of Laravel and the Laravel Sail Docker image.

> Note: To ensure compatibility between the `laravelsail/phpXX-composer` image and your application, it is recommended to use the corresponding PHP version (74, 80, 81, or 82) that aligns with your application's requirements.
>
1. After the project is created, navigate into the project directory using the **`cd`** command:

    ```bash
    cd my-laravel-app
    ```

2. Run the following command to start Laravel Sail:

    ```bash
    ./vendor/bin/sail up
    ```

   This command initializes the Docker containers defined in the Laravel Sail configuration and starts the development server.

3. Once Sail is up and running, open your web browser and visit **`http://localhost`** to see the Laravel welcome page.

## Configuring a Shell Alias for Laravel Sail

Creating a shell alias for Laravel Sail can greatly simplify the process of running common Sail commands in your terminal.

1. Open your terminal and navigate to home directory `cd ~/`
2. Look for file named `.bashrc` if you’re using bash or `.zshrc` if you’re zsh terminal
3. Open the `.bashrc` / `.zshrc` file in text editor.
4. Add the following line to define the alias:

```bash
alias sail='[ -f sail ] && sh sail || sh vendor/bin/sail'
```

This command creates an alias named **`sail`** that points to the **`vendor/bin/sail`** script provided by Laravel Sail.

1. Save the file and restart the terminal

Now you can now use the **`sail`** alias followed by the Sail command you want to run. For example:

```bash
sail up
sail down
sail php -v
sail node -v
```

## Few `sail` Commands

| Sail Command | Description |
| --- | --- |
| sail up | Starts the Docker containers defined in the docker-compose.yml file, bringing the environment up. |
| sail up -d | Starts the Docker containers in detached mode, running them in the background. |
| sail down | Stops and removes the running Docker containers for the Laravel application. |
| sail artisan | Executes Laravel's Artisan command-line interface inside the Sail container. |
| sail composer | Runs Composer commands inside the Sail container for managing PHP dependencies. |
| sail npm | Executes npm commands inside the Sail container for managing JavaScript dependencies. |
| sail artisan migrate | Runs database migrations using Laravel's Artisan command-line interface. |
| sail artisan tinker | Launches an interactive shell for interacting with the Laravel application. |
| sail test | Runs tests for the Laravel application using PHPUnit. |
| sail db:seed | Seeds the database with data using Laravel's database seeder. |
| sail route:list | Displays a list of registered routes in the Laravel application. |
| sail cache:clear | Clears the application cache. |
| sail queue:work | Starts a worker to process queued jobs using Laravel's queue system. |
| sail horizon | Runs the Laravel Horizon supervisor for managing the application's queue workers. |
| sail horizon:terminate | Gracefully terminates the Laravel Horizon supervisor. |
| sail schedule:run | Executes the scheduled tasks defined in the Laravel application. |
| sail optimize | Optimizes the application for better performance. |
| sail migrate:fresh | Drops all tables from the database and re-runs all migrations. |
| sail migrate:rollback | Rolls back the last batch of database migrations. |
| sail queue:retry | Retries a failed job in the Laravel queue. |
| sail queue:failed | Lists and manages the failed jobs in the Laravel queue. |
| sail storage:link | Creates the symbolic link from the public storage directory to the storage/app/public directory. |
| sail passport:install | Installs the Laravel Passport package for API authentication. |

These are just a few examples of common Sail commands in Laravel. You can explore more commands and their usage in the Laravel documentation (https://laravel.com/docs) or by running `sail help` to see a list of available commands inside your Laravel Sail environment.

## **Customizing Laravel Sail**

Laravel Sail comes with a default configuration that works well for most projects. However, you may need to customize the configuration to suit your specific requirements. The configuration file for Laravel Sail is located at the root of your project directory and is named **`docker-compose.yml`**. This file defines the Docker services and settings used by Laravel Sail.

## **Conclusion**

Using Docker and Laravel Sail provides a convenient way to set up and manage Laravel projects. It allows developers to work in a consistent development environment and simplifies the deployment process. With Docker's containerization capabilities, Laravel applications can be easily deployed to various hosting platforms without worrying about compatibility issues. Give Docker and Laravel Sail a try, and experience the benefits of containerization in your Laravel development workflow. Happy Coding!
