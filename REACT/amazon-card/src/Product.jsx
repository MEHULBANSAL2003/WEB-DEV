import "./Product.css";
import Price from "./Price";
import PropTypes from "prop-types";

export default function Product({title,idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,899","9,199","899","278"];
    let description=["8,000 DPI","intuitive surface","designed for iPad","wireless"];
    return(
      <div className="Product">
        <h3>{title}</h3>
        <p>{description[idx]}</p>
        <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
       </div>
    );
}


Product.propTypes = {
    title: PropTypes.string.isRequired, // Require 'title' prop as a string
    idx: PropTypes.number.isRequired
    
 
  };