
// import { CDN_URL } from "../utils/constants";

// const RestaurantCard = (props) => {
//     // const datarestaurant=props;
//     // console.log(datarestaurant);
//     const { resData } = props;
//     const { name, image, cuisines,cloudinaryImageId,avgRating } = resData?.info
//     return (


//         <div className="m-4 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 border border-solid border-black bg-gray-100">
//             <img className="res-img"   src={CDN_URL + cloudinaryImageId} />
//             <h3>{name}</h3>
//             {Array.isArray(cuisines) && <h4>{cuisines.join(", ")}</h4>}
           
//             <p>{avgRating}</p>

//         </div>
//     )
// }
// export default RestaurantCard;

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, image, cuisines, cloudinaryImageId, avgRating } = resData?.info;

  return (
    <div className="m-4 p-4 w-[300px] h-[400px] hover:bg-gradient-to-b from-gray-300 to-gray-600 hover:text-pink-200 rounded border border-solid border-black">
      <img className="rounded " src={CDN_URL + cloudinaryImageId} alt={name} />
      <h3 className=" font-bold text-2xl py-2 ">{name}</h3>
      {Array.isArray(cuisines) && <h4>{cuisines.join(", ")}</h4>}
      <p>{avgRating}</p>
    </div>
  );
};

export default RestaurantCard;
