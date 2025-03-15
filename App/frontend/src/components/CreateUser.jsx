import { useState } from "react";
import axios from "axios";

export default function CreateUser({ onUserAdded, buttonClass = "btn btn-primary btn-sm" }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        phone,
      });
      setMessage("User created successfully: " + response.data.name);
      setName("");
      setEmail("");
      setPhone("");
      if (onUserAdded) onUserAdded(); // Update parent state
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div>
      <h2 className="mb-4">Create User</h2>
      {message && <p className="text-success">{message}</p>}
      <form
        onSubmit={handleSubmit}
        className="d-flex align-items-center gap-2 p-2 border rounded bg-light"
      >
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
          Create
        </button>
      </form>
    </div>
  );
}

