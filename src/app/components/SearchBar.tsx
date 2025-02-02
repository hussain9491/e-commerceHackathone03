// SearchBar.tsx
import React, { useState } from 'react';
const SearchBar = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search products..."
        className="flex-grow p-2 border rounded-lg"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;