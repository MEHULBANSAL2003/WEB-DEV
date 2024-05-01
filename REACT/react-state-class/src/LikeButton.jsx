import { useState } from "react";

export default function LikeButton(){
 
    let [isLiked,setIsLiked]=useState(false);  

    let toggleLike=()=>{
      
        setIsLiked((isLiked)=>{   // passing in form of callbacks..!!
              return !isLiked;
        });
        
    }
    let likeStyle={color:"red"};
    return (
     <>
        <p onClick={toggleLike}>
           {  (!isLiked)?<i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart" style={likeStyle}></i>} {/* link to cdn is added in index.html */}
         
        </p> 
     </>

    );

}