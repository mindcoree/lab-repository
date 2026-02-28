// src/App.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"; // Обычный импорт для Home
import LoadingSpinner from "./components/LoadingSpinner";

// Task 2: Динамические импорты
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link style={{ marginRight: "10px" }} to="/">Home</Link>
        <Link style={{ marginRight: "10px" }} to="/dashboard">Dashboard</Link>
        <Link style={{ marginRight: "10px" }} to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        {/* Task 2 & 3: Обертка Suspense с fallback */}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
