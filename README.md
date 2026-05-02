# Team Task Manager 

A simple front-end **Team Task Manager** built with HTML, CSS, and JavaScript. It lets users sign up, log in, and view a basic dashboard showing total projects and tasks.

## Features

- User **Sign Up** with name, email, password, and role (Admin/Member)
- User **Login** using email and password
- Shows login status in the header (`Not logged in` / `Logged in as Name (Role)`)
- Displays a **Dashboard** section after successful login
- Responsive UI with a soft pastel (pink + yellow) theme

## Tech Stack

- **HTML** – Page structure (header, login form, signup form, dashboard, footer)
- **CSS** – Layout and styling with card design and gradient background
- **JavaScript (Vanilla JS)** – Handles:
  - Storing users in an in-memory array
  - Signup validation (empty fields, duplicate email check)
  - Login verification (email + password match)
  - Showing/hiding sections based on login state
  - Updating status text and dashboard values

## How It Works

1. User signs up with their details.
2. The app stores the user in a `users` array in JavaScript.
3. User logs in with the same email and password.
4. On successful login:
   - Header shows the current user’s name and role.
   - Login and signup forms are hidden.
   - Dashboard becomes visible and shows sample project/task counts.

## How to Run

1. Clone the repository or download the files.
2. Make sure these files are in the same folder:
   - `index.html`
   - `style.css`
   - `app.js`
3. Open `index.html` in any web browser.

## Future Improvements

- Store users in `localStorage` so data stays after refresh
- Add real project and task management (create, update, delete)
- Add logout button and role-based permissions
