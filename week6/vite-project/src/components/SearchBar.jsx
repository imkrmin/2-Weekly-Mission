import "../style/SearchBar.css";
import searchIcon from "../assets/search.svg";

function SearchBar() {
  return (
    <div className="searchbar-section">
      <div className="searchbar">
        <input
          className="searchbar-input"
          type="search"
          placeholder="링크를 검색해 보세요."
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
