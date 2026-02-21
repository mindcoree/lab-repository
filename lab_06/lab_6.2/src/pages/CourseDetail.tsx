import { useParams, useLoaderData, Link } from "react-router-dom";
import type { Course } from "../data";

export default function CourseDetail() {
  const { id } = useParams<{ id: string }>();
  // Используем данные, загруженные через loader
  const { course } = useLoaderData() as { course: Course };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>{course.title}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p>{course.description}</p>
      <p><small style={{ color: '#666' }}>Route ID parameter: {id}</small></p>
      <hr />
      <Link to="/courses">← Back to Courses</Link>
    </div>
  );

}