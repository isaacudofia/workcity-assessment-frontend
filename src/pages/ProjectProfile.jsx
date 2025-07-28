import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function ProjectProfile() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/projects/${projectId}`)
      .then((res) => setProject(res.data))
      .catch(() => setError("Failed to load project"))
      .finally(() => setLoading(false));
  }, [projectId]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this project?"))
      return;
    try {
      await API.delete(`/projects/${projectId}`);
      navigate("/projects");
    } catch (err) {
      setError("Failed to delete project");
    }
  };

  if (loading) return <div className="container py-5">Loading...</div>;
  if (error)
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  if (!project) return null;

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>{project.title}</h2>
        <div>
          <Link
            to={`/projects/${projectId}/edit`}
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
          <strong>Description:</strong> {project.description}
        </p>
        <p>
          <strong>Status:</strong> {project.status}
        </p>
        <p>
          <strong>Client:</strong> {project.client?.name || "-"}
        </p>
      </div>
    </div>
  );
}
