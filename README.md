# Help Center API Project

This project consists of a React frontend and a Node.js backend and Monogodb Database for managing Help Center cards.

## Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB URI:
   ```
   MONGO_URI=your_mongodb_uri_here
   PORT=5000
   ```

4. Start the backend server:
   ```
   npm run dev
   ```

The backend server will start running on `http://localhost:5000`.

## Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend development server:
   ```
   npm start
   ```

The frontend application will start running on `http://localhost:3000`.

## Usage

- The backend API endpoints are available at `http://localhost:5000/api/cards`
- The frontend application can be accessed in your web browser at `http://localhost:3000`

## Project Structure

### Backend

-Main server file: 

backend/server.js

-Database configuration:

backend/config/db.js

- Card routes:

backend/routes/cardRoutes.js
