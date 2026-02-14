import React from 'react';
import type { Skill } from './types';

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  const getColor = (level: Skill['level']) => {
    switch (level) {
      case 'Beginner':
        return 'gray';
      case 'Intermediate':
        return 'orange';
      case 'Expert':
        return 'green';
      default:
        return 'black';
    }
  };

  return (
    <ul>
      {skills.map((skill) => (
        <li
          key={skill.id}
          style={{ color: getColor(skill.level) }}
        >
          {skill.name} — {skill.level}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;

