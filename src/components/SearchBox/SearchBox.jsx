import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pages from '../../data/pagesContent.json';
import { CiSearch } from 'react-icons/ci';

function SearchBox({ type }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        const q = e.target.value.toLowerCase();
        setQuery(q);

        if (!q) {
            setResults([]);
            return;
        }

        const filtered = pages.filter(item =>
            item.title.toLowerCase().includes(q) ||
            (item.content && item.content.toLowerCase().includes(q))
        );
        setResults(filtered);
    };

    const handleResultClick = (path) => {
        navigate(path);
        setQuery('');
        setResults([]);
    };

    return (
        <div className="relative mr-2">
            {type !== "home" ? <input
                type="text"
                placeholder="Search here..."
                className="border border-[#010B1E] px-4 py-2 text-sm mr-4"
                value={query}
                onChange={handleSearch}
            />
                : <div className="relative hidden sm:block">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
                        <CiSearch />
                    </span>
                    <input
                        value={query}
                        onChange={handleSearch}
                        type="text"
                        placeholder="Search here..."
                        className="border pl-10 pr-4 py-2 placeholder-white text-white bg-transparent focus:outline-none text-xs"
                    />
                </div>}
            {results.length > 0 && (
                <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-200 shadow-md z-50 max-h-64 overflow-y-auto text-sm">
                    {results.map((item) => (
                        <li
                            key={item.id}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => handleResultClick(item.path)}
                        >
                            <strong className='text-black'>{item.title}</strong>
                            <p className="text-gray-500 text-xs">{item.content?.substring(0, 80)}...</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBox;