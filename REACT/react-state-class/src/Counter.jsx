import { useState } from "react";


export default function Counter(){
   let [count,setCount]=useState(0);     // (0) is intial stage.. setcount is resposible for re rendering the component..

   function incCount(){
    setCount(count+1); // we updated the count by passing inside setcount bcoz it will rerender the componnet
    console.log(count);
   }
    return(

        <div>
        <h3>Count={count}</h3>
        <button onClick={incCount}>increase the count</button>
        </div>


    );
}