import React, { useState,useEffect} from "react";
import RestaurantCard from "./Restuarant";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useGetRestaurants from "../../utils/useGetRestaurants";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredListOfRes, setFilteredListOfRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const resData = useGetRestaurants();
  

  useEffect(() => {
    if (resData) {
      setFilteredListOfRes(resData);
      setListOfRes(resData);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [resData]);
  

  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
   return(


   <h1>
      Looks like you're offline.
    </h1>

   )
  }

  return loading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRes = listOfRes.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredListOfRes(filteredRes);
          }}
        >
          Search
        </button>
      </div>

      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredListOfRes(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredListOfRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
