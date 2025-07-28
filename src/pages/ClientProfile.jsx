import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ClientProfile() {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      API.get(`/clients/${clientId}`),
      API.get(`/clients/${clientId}/projects`),
    ])
      .then(([clientRes, projectsRes]) => {
        setClient(clientRes.data);
        setProjects(projectsRes.data);
      })
      .catch((err) => setError("Failed to load client or projects"))
      .finally(() => setLoading(false));
  }, [clientId]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this client?")) return;
    try {
      await API.delete(`/clients/${clientId}`);
      navigate("/clients");
    } catch (err) {
      setError("Failed to delete client");
    }
  };

  if (loading) return <div className="container py-5">Loading...</div>;
  if (error)
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  if (!client) return null;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{client.name}</h2>
        <div>
          <Link
            to={`/clients/${clientId}/edit`}
            className="btn btn-primary me-2"
          >
            Edit
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="mb-4">
        <p>
          <strong>Email:</strong> {client.email}
        </p>
        <p>
          <strong>Phone:</strong> {client.phone}
        </p>
        <p>
          <strong>Address:</strong> {client.address}
        </p>
      </div>
      <h4>Projects</h4>
      {projects.length === 0 ? (
        <p>No projects found for this client.</p>
      ) : (
        <ul className="list-group">
          {projects.map((project) => (
            <li
              key={project._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>{project.title}</span>
              <Link
                to={`/projects/${project._id}`}
                className="btn btn-sm btn-info"
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
