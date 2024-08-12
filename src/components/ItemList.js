// const ItemList = ({ items }) => {

//     console.log(items);
//     console.log(items?.itemCards?.card?.info?.id);
//     return (
//     <div>
//         {items.map((item) =>(
            //  <div key={item.itemCards.card.id}>
            //     <div>
            //         <span>{item.itemCards.card.name}</span>
            //         <span>{item.itemCards.card.price}</span>

            //     </div>
            //     <p><span>{item.itemCards.card.description}</span></p>
            // </div>

//             <div key={item?.itemCards?.card?.info?.id}>
//                 <div>
//                     <span>{item?.itemCards?.card?.info?.name}</span>
//                     <span>{item?.itemCard?.card?.info?.price}</span>

//                 </div>
//                 <p><span>{item?.itemCards?.card?.info?.description}</span></p>
//             </div>

//         ))}
//     </div>
//     );
// };




// return (
//     <div>
//       {items.map((item, index) => (
//         item.itemCards.map((cardItem, idx) => (
//           <div key={cardItem.card.info.id || `${index}-${idx}`}>
//             <div>
//               <span>{cardItem.card.info.name}</span>
//               <span>{cardItem.card.info.defaultPrice}</span>
//             </div>
//             <p><span>{cardItem.card.info.description}</span></p>
//           </div>
//         ))
//       ))}
//     </div>
//   );
// };

// export default ItemList;


import { CDN_URL } from "../utils/constants";
const ItemList = ({ items,dummy }) => {
    console.log(items);
    console.log(dummy)
  
    return (
      <div>
        {items?.map((item, index) => (
          Array.isArray(item.itemCards) && item.itemCards.map((cardItem, idx) => (
            <div key={cardItem.card.info.id || `${index}-${idx}`}
             className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
             
              <div className="w-9/12">
              <div className="py-2">
                <span className="font-bold text-lg">{cardItem.card.info.name}</span>
                <span className="font-bold text-lg"> - Rs {cardItem.card.info.price ? cardItem.card.info.price/100 : cardItem.card.info.defaultPrice/100 }</span>
              </div>
              
              <p classsName="text-xs">{cardItem.card.info.description}</p>
            </div>
            <div className="w-4/12 p-4">
            <div className="absolute">
            <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
              </div>
              <img src={CDN_URL + cardItem.card.info.imageId } className="w-full" />
              
            </div> 
            </div>
          ))
      
        ))}
      </div>
      

    );
  };
  
  export default ItemList;
