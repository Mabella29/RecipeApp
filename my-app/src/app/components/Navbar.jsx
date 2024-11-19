'use client'
import { useState } from "react";
import Link from "next/link";


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
 

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      alert("Please enter a search term.");
      return;
    }
  };

  return (
    <div className="py-2">
      <nav className="flex flex-wrap justify-between items-center py-2 bg-gray-50">
       
        <div className="flex items-center space-x-8">
          <img src="/Images/Cookpal 1.svg" alt="Cookpal Logo" />
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search"
              className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
              aria-label="Submit search"
            >
              Search
            </button>
          </form>
        </div>

       
        <div className="flex items-center space-x-12">
          <Link href="/" className= "text-green-500 font-bold">
            Home
          </Link>
          <Link href="/explore" className="hover:text-green-500 hover:text-bold">
            Explore
          </Link>
          <Link href="/explore/help" className= "hover:text-green-500 hover:text-bold">
            Help
          </Link>

          <img src="/Profile.svg" className="h-8 w-8 rounded-md hover:text-bold"/>
        </div>
      </nav>
    </div>
  );
}
