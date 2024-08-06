import {CDN_URL} from "../utils/constants"
const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla: { deliveryTime }
    } = resData?.info || {};
    return(
      // <div className="res-card">
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        {/* <img className="res-logo"
         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,//f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"/> */}
          {/* <img className="res-logo" */}
          <img 
        className="rounded-lg"
         src={CDN_URL + cloudinaryImageId}/>
  
        {/* <h3> {name} </h3> */}
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo} </h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    ) 
  };
  export default RestaurantCard;