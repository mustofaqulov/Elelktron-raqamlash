import "./searchResult.scss";
import NumberLogo from "../../assets/icons/logo.svg?react";
export function SearchResultsList({ results }) {
  return (
    <>
      <div className="result-list">
        {results.map((result, id) => {
          return (
            <div key={id}>
              {result.name} {<NumberLogo />}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default SearchResultsList;
