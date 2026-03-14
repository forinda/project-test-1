import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <nav style={{
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "white",
        display: "flex",
        gap: "2rem",
        alignItems: "center"
      }}>
        <h1 style={{ margin: 0, fontSize: "1.5rem" }}>My App</h1>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link 
            to="/" 
            style={{ 
              color: "white", 
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#555"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            style={{ 
              color: "white", 
              textDecoration: "none",
              padding: "0.5rem 1rem",
              borderRadius: "4px",
              transition: "background-color 0.2s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#555"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
          >
            About
          </Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
