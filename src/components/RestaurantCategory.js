import { useState } from "react";
import Itemlist from "./AccordianBody";

const RestaurantCategory = ({ data }) => {

    //all the categories will be having a separate state or mainataining a separate state showItems true or false
  const [showItems, setShowItems] = useState(false);

  const handleToggle = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleToggle}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>{showItems ? "▲":"▼"}</span>
      </div>
      {showItems && <Itemlist items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
