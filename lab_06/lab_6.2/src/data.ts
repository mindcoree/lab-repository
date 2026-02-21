export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "React Basics", instructor: "Sakhniuk", description: "Learn hooks and components." },
  { id: 2, title: "Advanced TypeScript", instructor: "Boduch", description: "Deep dive into types." },
  { id: 3, title: "React Router Navigation", instructor: "Dr. Smith", description: "Mastering client-side routing." },
  { id: 4, title: "Web Design", instructor: "Jane Doe", description: "UI/UX principles for developers." },
];

export const getCourseById = (id: number): Course | undefined => 
  courses.find(c => c.id === id);

