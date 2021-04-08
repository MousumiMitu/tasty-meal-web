import React, { useState } from "react";
import Background from "../Background/Background";
import "./ProductNav.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Breakfast from "../Breakfast/Breakfast";
import Pasta from "../Pasta/Pasta";
import Chicken from "../Chicken/Chicken";

const ProductNav = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <Background />
      <div className="meal-section">
        <Tabs value={selectedTab} onChange={handleChange} centered>
          <Tab label="Breakfast" />
          <Tab label="Pasta" />
          <Tab label="Chicken" />
        </Tabs>
        {selectedTab === 0 && <Breakfast />}
        {selectedTab === 1 && <Pasta />}
        {selectedTab === 2 && <Chicken />}
      </div>
    </div>
  );
};

export default ProductNav;
