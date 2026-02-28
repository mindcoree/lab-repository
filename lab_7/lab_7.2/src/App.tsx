import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Импорты компонентов
import Home from "./pages/Home";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorBoundary from "./components/ErrorBoundary";
import ErrorFallback from "./components/ErrorFallBack";

// Task 7.1: Динамические импорты (Lazy Loading)
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const BuggyPage = lazy(() => import("./pages/BuggyPage")); // Добавь этот импорт!

function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link style={{ marginRight: "10px" }} to="/">Home</Link>
        <Link style={{ marginRight: "10px" }} to="/dashboard">Dashboard</Link>
        <Link style={{ marginRight: "10px" }} to="/settings">Settings</Link>
        <Link style={{ marginRight: "10px" }} to="/profile">Profile</Link>
        <Link style={{ color: "red" }} to="/buggy">Buggy Page</Link>
      </nav>

      <main style={{ padding: "2rem" }}>
        {/* Task 7.2: ErrorBoundary должен быть СНАРУЖИ Suspense.
          Это защищает ВЕСЬ процесс загрузки ленивых компонентов.
        */}
        <ErrorBoundary fallback={<ErrorFallback />}>
          {/* Task 7.1: Suspense показывает спиннер, пока грузятся файлы чанков */}
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              {/* Тестовая страница, которая выкидывает ошибку */}
              <Route path="/buggy" element={<BuggyPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
    </Router>
  );
}

export default App;
