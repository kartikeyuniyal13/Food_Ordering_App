import Itemlist from "./AccordianBody";

const RestaurantCategory=({data})=>{
 return(<div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg ">
    <div className="flex justify-between cursor-pointer">

  <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
  <span>v</span>

    </div>
    <div>
        <Itemlist items={data.itemCards}/>
    </div>
 </div>)
}
export default RestaurantCategory;