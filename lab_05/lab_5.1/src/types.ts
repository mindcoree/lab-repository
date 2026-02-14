// Interface for user data
export interface User {
  name: string;
  email: string;
  age: number;
}

// Union type alias for skill level
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Interface for skill data
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}

