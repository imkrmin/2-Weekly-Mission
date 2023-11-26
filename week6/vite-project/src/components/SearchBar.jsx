import "../style/SearchBar.css";
import searchIcon from "../assets/search.svg";

function SearchBar() {
  return (
    <div className="searchbar-section">
      <div className="searchbar">
        <div className="searchbar-container">
          <img src={searchIcon} alt="검색 아이콘" className="search-icon"></img>
          <p className="search-text">링크를 검색해 보세요.</p>
        </div>
        <input className="searchbar-input"></input>
      </div>
    </div>
  );
}

export default SearchBar;
