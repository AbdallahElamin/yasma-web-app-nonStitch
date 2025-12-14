# YASMA Web App - Setup Guide

This guide will walk you through setting up and running the YASMA For Contracting Co. web application on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (version 16 or higher recommended)
- **npm** (comes with Node.js)

To check if you have Node.js and npm installed, run:
```bash
node --version
npm --version
```

## Project Structure

This project consists of two main parts:
- **Frontend**: React application built with Vite
- **Backend**: Express server for handling contact form submissions

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd yasma-web-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

   This will install all required dependencies listed in `package.json`, including:
   - React and React Router for the frontend
   - Vite as the build tool and dev server
   - Express for the backend API
   - Other utilities like CORS, body-parser, and lucide-react for icons

## Running the Application

You'll need to run **two separate processes** - one for the frontend and one for the backend server.

### Option 1: Run Both Servers Manually (Recommended)

**Terminal 1 - Frontend Development Server:**
```bash
npm run dev
```

This will start the Vite development server, typically at `http://localhost:5173`

**Terminal 2 - Backend API Server:**
```bash
node server/server.js
```

Or with auto-reload using nodemon:
```bash
npx nodemon server/server.js
```

This will start the Express backend server at `http://localhost:3300`

### Option 2: Quick Start Script

You can also run both servers simultaneously in the background (if using a Unix-like terminal or WSL):
```bash
node server/server.js & npm run dev
```

> **Note**: On Windows PowerShell, you'll need to use separate terminal windows for each command.

## Accessing the Application

Once both servers are running:

1. Open your browser and navigate to **`http://localhost:5173`** (or the URL shown in the Vite terminal output)
2. The frontend will communicate with the backend API at `http://localhost:3300` for contact form submissions

## Available Scripts

In the project directory, you can run:

- **`npm run dev`** - Starts the Vite development server with hot module replacement
- **`npm run build`** - Builds the production-ready application to the `dist` folder
- **`npm run preview`** - Previews the production build locally
- **`npm run lint`** - Runs ESLint to check for code quality issues

## Troubleshooting

### Port Already in Use

If you see an error that port 5173 or 3300 is already in use:

- **For frontend (port 5173)**: Vite will automatically try the next available port
- **For backend (port 3300)**: Edit `server/server.js` and change the `PORT` constant to another port number

### Dependencies Installation Issues

If `npm install` fails:
1. Delete the `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. If issues persist, try `npm cache clean --force` then `npm install`

### Contact Form Not Working

Make sure the backend server is running on port 3300. Check the browser console and backend terminal for any error messages.

## Development

- Frontend code is located in the `src` directory
- Main app component: `src/App.jsx`
- Entry point: `src/main.jsx`
- Styling: `src/index.css`
- Backend API: `server/server.js`

## Building for Production

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory. You can preview the production build locally with:

```bash
npm run preview
```

---

**Questions or Issues?**  
Check the console output for detailed error messages, and ensure both the frontend and backend servers are running properly.
