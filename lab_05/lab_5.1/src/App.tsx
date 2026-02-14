import React from 'react';
import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

const user: User = {
  name: 'Alice Johnson',
  email: 'alice@mail.com',
  age: 25,
};

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' },
  { id: 3, name: 'React', level: 'Intermediate' },
  { id: 4, name: 'CSS', level: 'Beginner' },
];

const App = () => {
  return (
    <div style={{ padding: '24px' }}>
      <UserCard user={user} isActive>
        <p>
          <strong>Status:</strong> Actively learning TypeScript 🚀
        </p>

        <h3>Skills</h3>
        <SkillList skills={skills} />
      </UserCard>
    </div>
  );
};

export default App;