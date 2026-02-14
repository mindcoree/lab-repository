import React, { useState } from 'react';
import type { User } from './types';

const INITIAL_DATA: User[] = [
  { name: 'Alice', email: 'alice@mail.com', age: 25 },
  { name: 'Bob', email: 'bob@mail.com', age: 30 },
  { name: 'Charlie', email: 'charlie@mail.com', age: 28 },
  { name: 'Diana', email: 'diana@mail.com', age: 35 },
  { name: 'Eve', email: 'eve@mail.com', age: 22 },
];

const SearchApp = () => {
  // Typed state (Ch. 6, p. 100)
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] =
    useState<User[]>(INITIAL_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  // Typed event handler (input)
  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);

    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(
          term.toLowerCase()
        )
      )
    );
  };

  // Typed event handler (button)
  const handleClear = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>User Search</h1>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search by name..."
      />

      <button onClick={handleClear} style={{ marginLeft: '8px' }}>
        Clear
      </button>

      <ul style={{ marginTop: '16px' }}>
        {filteredUsers.length === 0 ? (
          <p>No results found</p>
        ) : (
          filteredUsers.map((user) => (
            <li key={user.email}>
              {user.name} — {user.email} ({user.age})
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default SearchApp;