import CreateUser from "./components/CreateUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import ReadDeleteUsers from "./components/ReadDeleteUsers.jsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column align-items-center justify-content-center"
      style={{ backgroundColor: "#e9ecef", padding: "2rem" }}
    >
      <h1 className="text-center mb-5 text-dark fw-bold">User Management</h1>
      <div className="col-lg-6 col-md-8"> {/* Muutettu responsiiviseksi */}
        <div
          className="card p-4 shadow-sm mb-5 bg-white border-0 rounded-4"
          style={{ borderLeft: "4px solid #007bff" }}
        >
          <h3 className="text-center text-primary mb-3">Create User</h3>
          <CreateUser
            onUserAdded={() => setRefresh((prev) => prev + 1)}
            buttonClass="btn btn-primary btn-sm" // Poistettu epäselvät luokat
          />
        </div>
        <div
          className="card p-4 shadow-sm mb-5 bg-white border-0 rounded-4"
          style={{ borderLeft: "4px solid #dc3545" }}
        >
          <h3 className="text-center text-danger mb-3">Users List</h3>
          <ReadDeleteUsers
            refresh={refresh}
            buttonClass="btn btn-danger btn-sm" // Yksinkertainen ja selkeä luokka
          />
        </div>
        <div
          className="card p-4 shadow-sm bg-white border-0 rounded-4"
          style={{ borderLeft: "4px solid #ffc107" }}
        >
          <h3 className="text-center text-warning mb-3">Update User</h3>
          <UpdateUser
            onUserUpdated={() => setRefresh((prev) => prev + 1)}
            buttonClass="btn btn-warning btn-sm" // Poistettu epäselvyydet
          />
        </div>
      </div>
    </div>
  );
}

export default App;


