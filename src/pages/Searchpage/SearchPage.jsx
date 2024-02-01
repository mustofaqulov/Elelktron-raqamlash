import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import "./searchPage.scss";
import { SearchInput } from "../../components/Inputs/Search/SearchInputs";
import SearchResultsList from "./SearchResultsList";

export function SearchPage() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        <div className="search-promo">
          <h1>Information id search</h1>
          <div className="content-search">
            <SearchInput setResults={setResults} />
            <Button title={"Search"} />
          </div>
          <div className="search-result">
            <SearchResultsList results={results} />
          </div>
        </div>
      </div>
    </>
  );
}
