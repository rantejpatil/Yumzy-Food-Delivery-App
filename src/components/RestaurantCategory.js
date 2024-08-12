import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex, dummy})=> {
    console.log(data);
    const handleClick = () => {
      setShowIndex();
    };
    // const [showItems, setShowItems] = useState(false);

    // const handleClick = () => {
    //   setShowItems(!showItems);
    // };
    return (
    <div>
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer">

        <div className="flex justify-between"
        onClick={handleClick}>
          <span className="font-bold text-lg">
            {data.title}  ({data.categories.length})
          </span>
          <span>⬇️</span>
        </div>
          {showItems && < ItemList items={data.categories} dummy={dummy}/>}
    </div>  
    
    </div>
     

    )   
};


export default RestaurantCategory;

// import ItemList from "./ItemList";

// const RestaurantCategory = ({ data }) => {
//     console.log(data);

//     return (
//         <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
//             <div className="flex justify-between">
//                 <span className="font-bold text-lg">
//                     {data.title} ({data.categories.length})
//                 </span>
//                 <span>⬇️</span>
//             </div>
//             <div>
//                 {data.categories.map((category, index) => (
//                     <div key={index} className="my-4">
//                         <h3 className="font-semibold text-md">{category.title}</h3>
//                         <ItemList items={category.itemCards} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default RestaurantCategory;
