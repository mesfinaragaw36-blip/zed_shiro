import { t } from "../../translations";
import "./catagorynav.css";

function CategoryNav({
  language,
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="category-wrapper">
      <div className="container">
        <div className="category-scroll">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {t(language, `categories.${category}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryNav;