import { useState } from "react";
import "./searchInput.scss";

export function SearchInput({setResults}) {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Id search"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}
