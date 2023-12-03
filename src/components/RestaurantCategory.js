import { useState } from "react";
import Itemlist from "./AccordianBody";

const RestaurantCategory = ({ data,show,setShowIndex }) => {

    //all the categories will be having a separate state or mainataining a separate state showItems true or false
    //this makes the all categories expand on the click but we want to add feature where only one expands at a time.
    //howevewer in here the control is with each of the child Restaurantcategory rather than that the parent RestautrantMenu should have control and should give it to the child category
 //earlier this line for state of each : const [showItems, setShowItems] = useState(false);

  const handleToggle = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg">
      <div className="flex justify-between cursor-pointer" onClick={handleToggle}>
        <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
        <span>{show ? "▲":"▼"}</span>
      </div>
      {show && <Itemlist items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
