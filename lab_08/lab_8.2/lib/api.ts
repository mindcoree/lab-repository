import { Post, Author } from '@/types';

const authors: Author[] = [
  { id: "1", name: "John Doe", bio: "Tech writer", avatar: "/avatars/john.jpg" },
  { id: "2", name: "Jane Smith", bio: "React expert", avatar: "/avatars/jane.jpg" },
];


const posts: Post[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    content: "Next.js is a React framework that enables server-side rendering...",
    author: "1",
    date: "2026-03-01",
    tags: ["nextjs", "react"],
    readTime: 5,
  },
  {
    id: "2",
    title: "Understanding Static Generation",
    content: "Static Site Generation improves performance dramatically...",
    author: "2",
    date: "2026-03-05",
    tags: ["ssg", "performance"],
    readTime: 4,
  },
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return posts.find(p => p.id === id);
}

export async function getAuthorById(id: string): Promise<Author | undefined> {
  return authors.find(a => a.id === id);
}


export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: "admin" | "user";
}

export interface Notification {
  id: string;
  type: "info" | "warning" | "success";
  message: string;
  read: boolean;
  createdAt: string;
}


export function getCurrentUser(): User {
  return {
    id: "user-123",
    name: "Demo User",
    email: "demo@example.com",
    avatar: "/avatars/demo.jpg",
    role: "user",
  };
}




export async function getUserNotifications(userId: string): Promise<Notification[]> {
  await new Promise(resolve => setTimeout(resolve, 100)); // имитация API delay
  const shortUserId = userId.slice(0, 8);
  return [
    { id: "1", type: "info", message: `Welcome to the dashboard, ${shortUserId}!`, read: false, createdAt: "2026-03-01" },
    { id: "2", type: "success", message: "Your profile was updated", read: true, createdAt: "2026-02-28" },
  ];
}


export async function getUserAnalytics(userId: string) {
  await new Promise(resolve => setTimeout(resolve, 100));
  const userSeed = userId.length;
  return {
    pageViews: 5000 + userSeed * 37,
    sessions: 450 + userSeed * 7,
    bounceRate: 35 + (userSeed % 20),
  };
}

