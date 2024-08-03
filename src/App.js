
import React from "react";
import ReactDOM from "react-dom/client";
//import { jsx } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";


{/* //Body component */}
//resData.info.name  cuisines  avgRating

// const resObj ={"info": {
//                       "id": "195429",
//                       "name": "Sanju Ka Dhaba",
//                       "cloudinaryImageId": "hjao7sorzggaeqito6au",
//                       "locality": "Vishnu Nagar",
//                       "areaName": "Prasia Road",
//                       "costForTwo": "₹250 for two",
//                       "cuisines": [
//                         "North Indian",
//                         "South Indian",
//                         "Chinese"
//                       ],
//                       "avgRating": 4.3,
//                       "veg": true,
//                       "parentId": "177443",
//                       "avgRatingString": "4.3",
//                       "totalRatingsString": "500+",
//                       "sla": {
//                         "deliveryTime": 57,
//                         "lastMileTravel": 14,
//                         "serviceability": "SERVICEABLE",
//                         "slaString": "55-60 mins",
//                         "lastMileTravelString": "14.0 km",
//                         "iconType": "ICON_TYPE_EMPTY"
//                       },
//                       "availability": {
//                         "nextCloseTime": "2024-07-22 22:30:00",
//                         "opened": true
//                       },
//                       "badges": {
                        
//                       },
//                       "isOpen": true,
//                       "type": "F",
//                       "badgesV2": {
//                         "entityBadges": {
//                           "imageBased": {
                            
//                           },
//                           "textBased": {
                            
//                           },
//                           "textExtendedBadges": {
                            
//                           }
//                         }
//                       },
//                       "aggregatedDiscountInfoV3": {
//                         "header": "50% OFF",
//                         "subHeader": "UPTO ₹100"
//                       },
//                       "orderabilityCommunication": {
//                         "title": {
                          
//                         },
//                         "subTitle": {
                          
//                         },
//                         "message": {
                          
//                         },
//                         "customIcon": {
                          
//                         }
//                       },
//                       "differentiatedUi": {
//                         "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                         "differentiatedUiMediaDetails": {
//                           "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                           "lottie": {
                            
//                           },
//                           "video": {
                            
//                           }
//                         }
//                       },
//                       "reviewsSummary": {
                        
//                       },
//                       "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//                       "restaurantOfferPresentationInfo": {
                        
//                       },
//                       "externalRatings": {
//                         "aggregatedRating": {
//                           "rating": "--"
//                         }
//                       }}};   
                                           
// ROOT co ponent  tghis should be rendered      
                                                  
const AppLayout = () => {
  return(
    <div className="app">
      {/* //header
      //body 
      //footer */}
      <Header></Header>
      <Body></Body>
      
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<AppLayout/>);