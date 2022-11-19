import { Link } from "react-router-dom";
import { useState } from "react";
import "./CategoryCard.css";

const CategoryCard = ({ categoryName, srcImg }) => {
const [categorySelected, setCategorySelected] = useState("categoryName");

return (
<div className="container-category-card">
  <div className="category-image">
    <img src={srcImg} alt="thumbnail" className="video-thumbnail img-responsive" />
  </div>
  <Link to="/videolist">
  <div className="video-heading" onClick={()=> setCategorySelected(categoryName)}>
    {categoryName}
  </div>
  </Link>
</div>
);
};

export { CategoryCard };