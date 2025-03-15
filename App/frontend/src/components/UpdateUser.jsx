import { useState } from "react";
import axios from "axios";

export default function UpdateUser({ onUserUpdated, buttonClass = "btn btn-warning btn-sm" }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, {
        name,
        email,
        phone,
      });
      setMessage("User updated successfully: " + response.data.id);
      setId("");
      setName("");
      setEmail("");
      setPhone("");
      if (onUserUpdated) onUserUpdated(); // Update parent state
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Update User</h2>
      {message && <p className="text-success">{message}</p>}
      <form
        onSubmit={handleUpdate}
        className="d-flex align-items-center gap-2 p-2 border rounded bg-light"
      >
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control"
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          required
        />
        <input
          type="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          required
        />
        <button 
            type="submit" 
            className={`${buttonClass}`}>
          Update
        </button>
      </form>
    </div>
  );
}

