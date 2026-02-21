import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <nav style={{ 
        display: 'flex', 
        gap: '20px', 
        padding: '1rem', 
        background: '#2c3e50', 
        color: 'white' 
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        <Link to="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
      </nav>

      <main style={{ padding: '20px', minHeight: '80vh' }}>
        <Outlet /> {/* Здесь отрендерится текущая страница */}
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '1rem', 
        borderTop: '1px solid #eee' 
      }}>
        <p>Student Portal 2026</p>
      </footer>
    </div>
  );
}
