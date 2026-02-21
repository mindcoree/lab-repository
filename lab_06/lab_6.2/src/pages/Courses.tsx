import { Link, useSearchParams } from "react-router-dom";
import { courses } from "../data";

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Читаем параметр "sort" из URL, по умолчанию "asc"
  const sortOrder = searchParams.get("sort") || "asc";

  // Логика сортировки
  const sortedCourses = [...courses].sort((a, b) => {
    if (sortOrder === "desc") {
      return b.title.localeCompare(a.title);
    }
    return a.title.localeCompare(b.title);
  });

  const toggleSort = () => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div>
      <h1>Courses Catalog</h1>
      <button onClick={toggleSort} style={{ marginBottom: '15px', padding: '8px 12px' }}>
        Sort Order: {sortOrder.toUpperCase()}
      </button>

      <ul>
        {sortedCourses.map((course) => (
          <li key={course.id} style={{ marginBottom: '10px' }}>
            {/* Динамическая ссылка с использованием шаблонной строки */}
            <Link to={`/courses/${course.id}`}>
              {course.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}