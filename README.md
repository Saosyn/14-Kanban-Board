# 14-Kanban-Board

A secure and interactive Kanban board designed for agile teams to manage work tasks. This project features a secure login page and robust authentication using JSON Web Tokens (JWT), ensuring that only authorized users can access and manipulate their tasks.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Overview

14-Kanban-Board is built with the needs of agile teams in mind. It provides a simple yet powerful interface for managing tasks using the Kanban methodology, coupled with secure authentication to protect your data. The project is structured into a client and a server side, ensuring a clean separation of concerns and efficient handling of both the user interface and backend operations.

## Features

- **Secure Login:**
  - Users authenticate via a login page with username and password.
  - Utilizes JSON Web Tokens (JWT) for secure session management.
- **Kanban Board:**
  - Organize tasks into columns.
  - Create, update, and delete tasks.
  - Drag and drop functionality for intuitive task management.
- **Session Management:**
  - JWT stored securely in local storage for authenticated requests.
  - Automatic redirection to login page if the JWT is invalid or expired.
  - Inactivity session timeout that invalidates the JWT and logs the user out.
- **Error Handling:**
  - Displays error messages for invalid credentials.
  - Redirects unauthenticated users to the login page when accessing restricted routes.

## Technologies Used

- **Frontend:** JavaScript framework/library of your choice (React, Angular, or Vue) for a dynamic and responsive UI.
- **Backend:** Node.js with Express for API routing and handling authentication.
- **Authentication:** JSON Web Tokens (JWT) for managing user sessions.
- **Password Hashing:** bcrypt (or bcryptjs) for secure password storage.
- **Database:** Your preferred database solution (e.g., MongoDB, PostgreSQL) for storing user data and task details.
- **Deployment:** Render (or your preferred cloud platform) for hosting the application.

## Installation & Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/14-Kanban-Board.git
   cd 14-Kanban-Board
   ```

## Usage

- **Accessing the App:**
  - Open your browser and navigate to http://localhost:3000 (or the port specified by your client configuration).
- **Authentication:**
  - Use the login page to enter your credentials.
  - Upon successful authentication, you will be redirected to the Kanban board.
- **Task Management:**
  - Create, update, delete, and drag tasks across columns to manage your workflow.
- **Session Management:**

  - Your session is managed through JWT stored in local storage. Logging out or inactivity will end your session.

  ## Troubleshooting

- If you encounter this error on Render
- Error: /opt/render/project/src/server/node_modules/bcrypt/lib/binding/napi-v3/bcrypt_lib.node: invalid ELF header
- This may indicate that native binaries (such as those for bcrypt) were built on a different operating system than your deployment environment.

- ## **Solution**

  - Ensure that the server's node_modules are not tracked by git by updating your .gitignore to ignore server-side dependencies. Then, rebuild your modules on the target deployment environment:

  ## License

  - ## **This project is licensed under the MIT License.**
