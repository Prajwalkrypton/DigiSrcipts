import React, { useState } from "react";
import axios from "axios";

const WikipediaSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm) return;

    setLoading(true);
    try {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          srsearch: searchTerm,
          format: "json",
        },
      });

      setResult(response.data.query.search);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Wikipedia Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Wikipedia"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {result && (
        <ul>
          {result.map((item) => (
            <li key={item.pageid}>
              <a
                href={`https://en.wikipedia.org/?curid=${item.pageid}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
              <p>{item.snippet}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WikipediaSearch;
