import { useState, useEffect } from "react";
import axios from "axios";

export default function ReadDeleteUsers({ refresh, buttonClass = "btn btn-danger" }) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            setUsers(response.data);
        } catch (err) {
            setError("Error fetching users: " + (err.response?.data?.error || err.message));
        }
    };

    useEffect(() => {
        fetchUsers();
    }, [refresh]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
            fetchUsers();
            setMessage(`User with ID ${id} deleted successfully.`);
        } catch (error) {
            setMessage("Error: " + (error.response?.data?.error || error.message));
        }
    };
    return (
        <div>
            <h2 className="mb-4">Users List</h2>
            {error && <p className="text-danger">{error}</p>}
            {message && <p className="text-success">{message}</p>}
            <div>
                {users.map((user) => (
                    <div
                        key={user.id}
                        className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded bg-light user-item"
                    >
                        <div>
                            <strong>{user.name}</strong> - {user.email} - {user.phone}
                        </div>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className={buttonClass}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}