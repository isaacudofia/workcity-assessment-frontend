import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddClient() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    // Simple client-side validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!/^\d{7,15}$/.test(form.phone)) {
      setError("Please enter a valid phone number (7-15 digits).");
      return;
    }
    setLoading(true);
    try {
      await API.post("/clients", form);
      navigate("/clients");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add client");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-4">Add Client</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit} aria-label="Add client form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            name="phone"
            type="tel"
            pattern="\d{7,15}"
            className="form-control"
            value={form.phone}
            onChange={handleChange}
            required
            aria-describedby="phoneHelp"
          />
          <div id="phoneHelp" className="form-text">
            Enter 7-15 digits, numbers only.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            name="address"
            className="form-control"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Client"}
        </button>
      </form>
    </div>
  );
}
