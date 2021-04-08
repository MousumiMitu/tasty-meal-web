import React, { useEffect, useState } from "react";
import "./Breakfast.css";

const Breakfast = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(9);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast")
      .then((res) => res.json())
      .then((data) => setItems(data.meals));
  }, []);
  return (
    <div>
      <div className="row meal-container ">
        {items.slice(0, limit ? limit : items.length).map((item) => (
          <div className="col-md-4 card-box text-center">
            <div className="img-box">
              <img src={item.strMealThumb} alt="" />
            </div>
            <h6 style={{ color: "#660000" }}>{item.strMeal}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breakfast;
