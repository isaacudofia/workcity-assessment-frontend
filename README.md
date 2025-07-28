## How to Test Backend & Frontend Integration

Use the following steps and URLs to verify that your backend and frontend are working together:

### 1. Signup (POST /api/auth/signup)

- **Backend:**
  - Endpoint: `POST http://localhost:5000/api/auth/signup`
  - Test in test.rest with sample body.
- **Frontend:**
  - Go to: [http://localhost:5173/signup](http://localhost:5173/signup)
  - Fill the form and submit.

### 2. Login (POST /api/auth/login)

- **Backend:**
  - Endpoint: `POST http://localhost:5000/api/auth/login`
  - Test in test.rest with sample body.
- **Frontend:**
  - Go to: [http://localhost:5173/login](http://localhost:5173/login)
  - Fill the form and submit.

### 3. List Clients (GET /api/clients)

- **Backend:**
  - Endpoint: `GET http://localhost:5000/api/clients` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/clients](http://localhost:5173/clients)

### 4. Add Client (POST /api/clients)

- **Backend:**
  - Endpoint: `POST http://localhost:5000/api/clients` (with Bearer token)
  - Test in test.rest with sample body.
- **Frontend:**
  - Go to: [http://localhost:5173/clients/add](http://localhost:5173/clients/add)
  - Fill the form and submit.

### 5. Edit Client (PUT /api/clients/{clientId})

- **Backend:**
  - Endpoint: `PUT http://localhost:5000/api/clients/{clientId}` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/clients/{clientId}/edit](http://localhost:5173/clients/{clientId}/edit)

### 6. View Client Profile (GET /api/clients/{clientId})

- **Backend:**
  - Endpoint: `GET http://localhost:5000/api/clients/{clientId}` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/clients/{clientId}](http://localhost:5173/clients/{clientId})

### 7. List Projects (GET /api/projects)

- **Backend:**
  - Endpoint: `GET http://localhost:5000/api/projects` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/projects](http://localhost:5173/projects)

### 8. Add Project (POST /api/projects)

- **Backend:**
  - Endpoint: `POST http://localhost:5000/api/projects` (with Bearer token)
  - Test in test.rest with sample body.
- **Frontend:**
  - Go to: [http://localhost:5173/projects/add](http://localhost:5173/projects/add)
  - Fill the form and submit.

### 9. Edit Project (PUT /api/projects/{projectId})

- **Backend:**
  - Endpoint: `PUT http://localhost:5000/api/projects/{projectId}` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/projects/{projectId}/edit](http://localhost:5173/projects/{projectId}/edit)

### 10. View Project Profile (GET /api/projects/{projectId})

- **Backend:**
  - Endpoint: `GET http://localhost:5000/api/projects/{projectId}` (with Bearer token)
  - Test in test.rest.
- **Frontend:**
  - Go to: [http://localhost:5173/projects/{projectId}](http://localhost:5173/projects/{projectId})

---

If you get errors in the frontend, check your backend server logs and test the endpoint in test.rest to confirm the backend is working. If the backend works but the frontend does not, check your browser console for errors and ensure the frontend is using the correct API base URL.

# Workcity Assessment Frontend

This is the React + Vite + Bootstrap frontend for the Workcity Full-Stack & WordPress Developer Assessment.

## Setup Instructions

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. The app will be available at [http://localhost:5173](http://localhost:5173)

## Test URLs for All Pages

> **Note:** You must be logged in to access dashboard and management pages.

- Home: [http://localhost:5173/](http://localhost:5173/)
- Login: [http://localhost:5173/login](http://localhost:5173/login)
- Signup: [http://localhost:5173/signup](http://localhost:5173/signup)
- Client Dashboard: [http://localhost:5173/clients](http://localhost:5173/clients)
- Add Client: [http://localhost:5173/clients/add](http://localhost:5173/clients/add)
- Edit Client: [http://localhost:5173/clients/{clientId}/edit](http://localhost:5173/clients/{clientId}/edit)
- Client Profile: [http://localhost:5173/clients/{clientId}](http://localhost:5173/clients/{clientId})
- Project Dashboard: [http://localhost:5173/projects](http://localhost:5173/projects)
- Add Project: [http://localhost:5173/projects/add](http://localhost:5173/projects/add)
- Edit Project: [http://localhost:5173/projects/{projectId}/edit](http://localhost:5173/projects/{projectId}/edit)
- Project Profile: [http://localhost:5173/projects/{projectId}](http://localhost:5173/projects/{projectId})

Replace `{clientId}` and `{projectId}` with actual IDs from your database.

## Features

- Authentication (Login/Signup)
- Client and Project Dashboards
- Add/Edit/View/Delete for Clients and Projects
- Responsive and accessible UI with Bootstrap

## Assumptions

- The backend API is running at `http://localhost:5000`
- JWT tokens are used for authentication

## Folder Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Page components for routing
- `src/services/` - API service logic
- `src/utils/` - Utility functions

---

For more details, see the assessment PDF.
