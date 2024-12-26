

This project includes a dynamic one-page website using React for the frontend and a Node.js + Express backend with MySQL database integration.

## Project Structure

- `backend/` - Contains the backend code for the application.
- `my-react-website/` - Contains the React frontend code.

## Backend

The backend is built with Node.js, Express, and MySQL. It provides API endpoints for fetching and updating banner data.

### Getting Started

1. **Install dependencies**:

   ```bash
   cd backend
   npm install
   ```

2. **Set up your environment variables**:

   Create a `.env` file in the `backend` directory with the following content:

   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=react_website
   ```

3. **Start the server**:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000`.

### API Endpoints

- **GET /api/banner**: Fetches the banner data.
- **POST /api/banner**: Updates the banner data.

## Frontend

The frontend is built with React. It provides a user interface to display and control the banner.

### Getting Started

1. **Install dependencies**:

   ```bash
   cd my-react-website
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm start
   ```

   The React app will run on `http://localhost:3000`.

### Features

- **Banner Display**: Displays a banner with a countdown timer.
- **Dashboard**: Provides controls to update the banner's description, link, timer, and visibility.

## Folder Structure

- `backend/`
  - `node_modules/` - Node.js modules.
  - `src/` - Source code for the backend.
  - `.gitignore` - Git ignore rules for the backend.
  - `package.json` - Backend dependencies and scripts.
  - `README.md` - Backend documentation (this file).

- `my-react-website/`
  - `node_modules/` - Node.js modules.
  - `public/` - Publicly accessible files.
  - `src/` - Source code for React.
  - `.gitignore` - Git ignore rules for the frontend.
  - `package.json` - React dependencies and scripts.
  - `README.md` - Frontend documentation (this file).
  - `build/` - Build output from React.

## Contributing

Feel free to submit issues, pull requests, or suggestions to improve the project.


