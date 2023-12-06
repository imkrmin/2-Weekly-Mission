import "../style/SearchBar.css";

function SearchBar() {
  return (
    <div className="searchbar-section">
      <input
        className="searchbar-input"
        type="search"
        placeholder="링크를 검색해 보세요."
      ></input>
    </div>
  );
}

export default SearchBar;
