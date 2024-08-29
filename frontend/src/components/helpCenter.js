import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "../hooks/fetchDataHook";
import ErrorPage from "./errorPage";

function HelpCenter() {
  const { data, loading, error } = useFetchData("http://localhost:5000/api/cards");
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredData(data);
    } else {
      const lowercasedQuery = searchQuery.toLowerCase();
      const filtered = data.filter(card =>
        card.title.toLowerCase().includes(lowercasedQuery) ||
        card.description.toLowerCase().includes(lowercasedQuery)
      );
      setFilteredData(filtered);
    }
  };

  const handleSearchQueryChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredData(data);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <ErrorPage error={error} />


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="bg-[#E6E6FA] py-16 text-center">
          <h1 className="text-4xl font-bold mb-8">How can we help?</h1>
          <div className="relative max-w-md mx-auto">
            <input
              type="search"
              placeholder="Search"
              className="pl-4 pr-12 py-2 w-full border rounded"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <button
              className="absolute right-2 top-2 bottom-2 px-3"
              onClick={handleSearch}
            >
              <FaArrowRight />
            </button>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
              {filteredData.map((card, index) => (
                <div key={index} className="bg-gray-100 border-2 rounded-lg p-4 max-w-md mx-auto w-full">
                  <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                  <hr className="border-t border-gray-300 -mx-4 mb-4" />
                  <p className="text-gray-700">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}

export default HelpCenter;
