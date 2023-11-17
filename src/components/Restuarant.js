
import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {

    const { resData } = props;
    const { name, image, cuisines,cloudinaryImageId,avgRating } = resData?.info
    return (


        <div className="res-card">
            <img className="res-img"   src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            {Array.isArray(cuisines) && <h4>{cuisines.join(", ")}</h4>}
           
            <p>{avgRating}</p>

        </div>
    )
}
export default RestaurantCard;