import { t } from "../../translations";
import "./search.css";

function Search({ language, searchTerm, onSearchChange }) {
  return (
    <div className="search-section">
      <div className="container">
        <div className="search-box">
          <span className="search-icon">🔍</span>

          <input
            type="search"
            className="form-control"
            placeholder={t(language, 'searchPlaceholder')}
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
          />

          {searchTerm && (
            <button
              type="button"
              className="search-clear"
              onClick={() => onSearchChange("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;