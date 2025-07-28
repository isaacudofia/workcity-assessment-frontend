import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ClientDashboard from "./pages/ClientDashboard";
import ProjectDashboard from "./pages/ProjectDashboard";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import AddClient from "./pages/AddClient";
import EditClient from "./pages/EditClient";
import ClientProfile from "./pages/ClientProfile";
import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import ProjectProfile from "./pages/ProjectProfile";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/clients" element={<ClientDashboard />} />
        <Route
          path="/clients/add"
          element={
            <PrivateRoute>
              <AddClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients/:clientId/edit"
          element={
            <PrivateRoute>
              <EditClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/clients/:clientId"
          element={
            <PrivateRoute>
              <ClientProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute>
              <ProjectDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/add"
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:projectId/edit"
          element={
            <PrivateRoute>
              <EditProject />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <PrivateRoute>
              <ProjectProfile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
