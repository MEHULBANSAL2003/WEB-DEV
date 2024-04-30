import PropTypes from "prop-types";

export default function Price({oldPrice,newPrice}){
let oldStyles={
  textDecorationLine:"line-through"
}
let newStyles={
    fontWeight: "bold",
}

let styles={
    backgroundColor:"#e0c367",
    height:"30px"
}
return (
 <div style={styles}>
  <span style={oldStyles}>{oldPrice}</span>
  &nbsp;&nbsp;&nbsp;
  <span style={newStyles}>{newPrice}</span>
 </div>
);

}



Price.propTypes = {
    oldPrice: PropTypes.number.isRequired, // Require 'title' prop as a string
   newPrice:PropTypes.number.isRequired
    
 
  };