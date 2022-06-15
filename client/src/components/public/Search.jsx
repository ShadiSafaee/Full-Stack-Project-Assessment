import React, { useContext } from "react";
import { MyContext } from "../../context/Context";

const Search = () => {
  const { searchHandler, searchString, setSearchString } =
    useContext(MyContext);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search.."
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <button
        className="btn_search"
        type="submit"
        onClick={() => {
          searchHandler(searchString);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
