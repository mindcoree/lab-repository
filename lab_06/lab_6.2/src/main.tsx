import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail'; 
import About from './pages/About';
import NotFound from './pages/NotFound';
import { getCourseById } from './data';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      { 
        path: "courses/:id", 
        element: <CourseDetail />,
        // errorElement по заданию для обработки невалидных ID
        errorElement: (
          <div style={{ padding: '20px', color: 'red' }}>
            <h3>Course not found!</h3>
            <Link to="/courses">Back to catalog</Link>
          </div>
        ),
        // Функция loader запускается ПЕРЕД рендером компонента
        loader: async ({ params }) => {
          const course = getCourseById(Number(params.id));
          if (!course) {
            throw new Error("Not Found"); // Провоцирует показ errorElement
          }
          return { course };
        }
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
