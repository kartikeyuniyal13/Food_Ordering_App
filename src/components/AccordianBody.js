import { CDN_URL } from "../utils/constants";
const Itemlist = ({ items }) => {
    return (
        <div>
            {
                items && items.map((item) => (
                    <div className="p-2 m-2 text-left border-gray-200 border-b-2 flex justify-between" key={item.card.info.id}>
                        <div className="w-9/12">
                            <div className="py-2 ml-4 pl-4">
                                <span className="">{item?.card?.info?.name}</span>
                                <span> - ₹{item?.card?.info?.price ? Math.ceil(item?.card?.info?.price / 100) : (item?.card?.info?.defaultPrice / 100)}<br /></span>

                            </div>

                            <p className="text-xs">{item?.card?.info?.description}</p>
                        </div>
                        <div className="relative w-3/12">
    <img src={CDN_URL + item.card.info.imageId} className="w-full rounded-sm" />
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
    <button className="pr-1 pl-1 pt-0 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl whitespace-nowrap overflow-hidden bg-white text-green-500 rounded-md border-2 border-green-500 border-solid">
    Add+
</button>

    </div>
</div>





                    </div>
                ))
            }


        </div>
    )
}
export default Itemlist;