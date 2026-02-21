interface Course {
  id: number;
  title: string;
}

const initialCourses: Course[] = [
  { id: 1, title: "Web Development 101" },
  { id: 2, title: "React for Beginners" },
  { id: 3, title: "TypeScript Essentials" },
];

export default function Courses() {
  return (
    <div>
      <h1>Our Courses</h1>
      <ul>
        {initialCourses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}
