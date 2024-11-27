---
title: 'GitHub CLI (gh): Essential Commands for Developers'
category: 'Git'
description: 'Learn the essential commands for GitHub CLI (gh) to streamline your GitHub workflows and boost productivity.'
publishedDate: 'Nov 27 2024'
updatedDate: 'Nov 27 2024'
heroImage: '/images/git/github-cli-gh-essential-commands.png'
tags:
  - tools
  - github
  - github cli
  - gh
  - gh commands
  - github cli tutorial
image:
  icon: 'devicon:github'
  title: 'GitHub CLI (gh)'
  subtitle: 'Essential Commands for Developers'
---

## Introduction

GitHub CLI (gh) is a powerful command-line tool that brings the full power of GitHub to your terminal. Whether you're managing repositories, creating pull requests, or tracking issues, GitHub CLI streamlines workflows, making it an indispensable tool for developers. In this guide, we will cover the most commonly used `gh` commands, focusing on `auth`, `repo`, `pr`, `issue`, `release`, `browse`, `gist`, and `copilot`. We'll also touch on a few additional frequently used commands to help you maximize your productivity.

---

## Why Use GitHub CLI?

GitHub CLI simplifies development workflows by allowing you to interact with GitHub directly from your terminal. This eliminates the need to switch between your terminal and browser, saving time and improving efficiency. With GitHub CLI, you can:

- Authenticate and manage GitHub accounts.
- Create and manage repositories.
- Open and review pull requests.
- Track and resolve issues.
- Publish releases.
- Share code snippets through gists.
- Leverage AI-powered coding assistance with GitHub Copilot.

---

## Getting Started with GitHub CLI

Before diving into the essential commands, you need to install GitHub CLI on your system. You can download the latest version of GitHub CLI from the [official website](https://cli.github.com/). Once installed, you can start using the `gh` command to interact with GitHub from your terminal.

---

## 1. **Authentication with `gh auth`**

The `gh auth` command is your starting point with GitHub CLI. It allows you to log in, log out, and manage authentication tokens.

### Common `gh auth` Commands:

- **Login to GitHub:**

  ```bash
  gh auth login
  ```

  Follow the prompts to authenticate with your GitHub account. You can choose between HTTPS or SSH for authentication.

- **Check Authentication Status:**

  ```bash
  gh auth status
  ```

  Verify if you're logged in and see details about your authentication method.

- **Logout:**
  ```bash
  gh auth logout
  ```
  Logs you out of your GitHub account.

---

## 2. **Repository Management with `gh repo`**

The `gh repo` command allows you to create, clone, fork, and manage repositories directly from your terminal.

### Common `gh repo` Commands:

- **Clone a Repository:**

  ```bash
  gh repo clone owner/repo-name
  ```

  Clones a repository to your local machine.

- **Create a New Repository:**

  ```bash
  gh repo create
  ```

  Follow the prompts to create a new repository on GitHub.

- **View Repository Details:**

  ```bash
  gh repo view
  ```

  Displays information about the current repository.

- **Fork a Repository:**
  ```bash
  gh repo fork owner/repo-name
  ```
  Creates a fork of the specified repository.

---

## 3. **Pull Requests with `gh pr`**

Pull requests are at the heart of collaboration on GitHub. The `gh pr` command lets you create, view, and manage pull requests with ease.

### Common `gh pr` Commands:

- **Create a New Pull Request:**

  ```bash
  gh pr create
  ```

  Opens an interactive prompt to create a pull request for your current branch.

- **View Pull Requests:**

  ```bash
  gh pr list
  ```

  Lists all open pull requests in the repository.

- **Checkout a Pull Request:**

  ```bash
  gh pr checkout pr-number
  ```

  Checks out the branch associated with the specified pull request.

- **Merge a Pull Request:**
  ```bash
  gh pr merge pr-number
  ```
  Merges the specified pull request.

---

## 4. **Issue Tracking with `gh issue`**

The `gh issue` command helps you manage issues, a core part of project tracking and collaboration on GitHub.

### Common `gh issue` Commands:

- **Create a New Issue:**

  ```bash
  gh issue create
  ```

  Opens an interactive prompt to create a new issue.

- **List Issues:**

  ```bash
  gh issue list
  ```

  Lists all open issues in the repository.

- **View Issue Details:**

  ```bash
  gh issue view issue-number
  ```

  Displays detailed information about a specific issue.

- **Close an Issue:**
  ```bash
  gh issue close issue-number
  ```
  Closes the specified issue.

---

## 5. **Releases with `gh release`**

The `gh release` command allows you to manage releases, which are used to package and distribute project versions.

### Common `gh release` Commands:

- **Create a New Release:**

  ```bash
  gh release create tag-name
  ```

  Creates a new release with the specified tag name.

- **List Releases:**

  ```bash
  gh release list
  ```

  Lists all releases in the repository.

- **View Release Details:**

  ```bash
  gh release view tag-name
  ```

  Displays details about the specified release.

- **Delete a Release:**
  ```bash
  gh release delete tag-name
  ```
  Deletes the specified release.

---

## 6. **Browsing with `gh browse`**

The `gh browse` command is a quick way to open the current repository, issues, or pull requests in your default web browser.

### Common `gh browse` Commands:

- **Open the Current Repository in Browser:**

  ```bash
  gh browse
  ```

  Opens the repository page in your default web browser.

- **Open a Specific Issue or Pull Request:**
  ```bash
  gh browse issue-number
  ```
  Opens the specified issue or pull request in your browser.

---

## 7. **Sharing Code with `gh gist`**

The `gh gist` command is used to create and manage gists, which are simple ways to share code snippets.

### Common `gh gist` Commands:

- **Create a New Gist:**

  ```bash
  gh gist create file-name
  ```

  Creates a new gist from the specified file.

- **List Your Gists:**

  ```bash
  gh gist list
  ```

  Lists all your gists.

- **View Gist Details:**

  ```bash
  gh gist view gist-id
  ```

  Displays details about a specific gist.

- **Delete a Gist:**
  ```bash
  gh gist delete gist-id
  ```
  Deletes the specified gist.

---

## 8. **AI-Powered Assistance with `gh copilot`**

GitHub Copilot is an AI-powered coding assistant that helps you write code faster and more efficiently. The `gh copilot` command manages Copilot settings and access.

### Common `gh copilot` Commands:

- **Enable Copilot:**

  ```bash
  gh copilot enable
  ```

  Enables GitHub Copilot for your account.

- **Disable Copilot:**

  ```bash
  gh copilot disable
  ```

  Disables GitHub Copilot.

- **Check Copilot Status:**
  ```bash
  gh copilot status
  ```
  Displays the current status of GitHub Copilot.

---

## Frequently Used Additional Commands

Here are a few more `gh` commands that developers often use:

- **View Notifications:**

  ```bash
  gh notification list
  ```

  Lists your GitHub notifications.

- **Check GitHub CLI Version:**

  ```bash
  gh --version
  ```

  Displays the installed version of GitHub CLI.

- **Run Workflows:**

  ```bash
  gh workflow run workflow-name
  ```

  Triggers a GitHub Actions workflow.

- **List Workflow Runs:**
  ```bash
  gh run list
  ```
  Lists recent workflow runs in the repository.

---

## Final Thoughts

GitHub CLI (gh) is a game-changer for developers who want to optimize their workflows. By mastering these essential commands—`auth`, `repo`, `pr`, `issue`, `release`, `browse`, `gist`, and `copilot`—you can manage your GitHub projects more efficiently and focus on what really matters: writing great code.
