// QuickLinks.js
import React, { useState } from "react";
import IconComponent from "./IconComponent/IconComponent";
import { categories } from "../data/data";
import "./QuickLinks.css"; // ✅ use external CSS instead of inline styles

const QuickLinks = ({ searchTerm = "" }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCategoryClick = (title) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const filteredCategories = searchTerm
    ? categories
        .map((cat) => ({
          ...cat,
          links: cat.links.filter((link) =>
            link.name.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((cat) => cat.links.length > 0)
    : categories;

  return (
    <div className="app-container">
      <div className="categories-grid">
        {filteredCategories.map((category) => {
          const isExpanded = expandedCategory === category.title;
          return (
            <div key={category.title} className="category-card">
              {/* Category Header */}
              <div
                className="category-header"
                onClick={() => handleCategoryClick(category.title)}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconComponent
                    iconName={category.icon}
                    size={22}
                    color="#3182ce"
                  />
                  <h2>{category.title}</h2>
                </div>
                <span className="link-count">{category.links.length}</span>
              </div>

              {/* Links */}
              <div
                className={`links-container ${isExpanded ? "expanded" : ""}`}
              >
                {category.links
                  .slice(0, isExpanded ? category.links.length : 8)
                  .map((link) => (
                    <button
                      key={link.name}
                      className="link-button"
                      onClick={() => handleClick(link.url)}
                    >
                      <IconComponent
                        iconName={link.icon}
                        size={16}
                        color="#667eea"
                      />
                      <span className="link-name">{link.name}</span>
                    </button>
                  ))}

                {!isExpanded && category.links.length > 8 && (
                  <div className="more-items">
                    +{category.links.length - 8} more items
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickLinks;
