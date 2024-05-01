import { useState } from "react";
export default function LudoBoard(){
        
    let [blueMove,setblueMove]=useState(0);
    let [yelloMove,setyellowMove]=useState(0);
    let [greenMove,setgreenMove]=useState(0);
    let [redMove,setredMove]=useState(0);
    
    return (
       <div>
       <p>Game begins</p>

       <div className="board">
       
        <p>Blue moves = {blueMove}</p>
        <button>+1</button>

        <p>Yellow moves = </p>
        <button>+1</button>

        <p>Green moves = </p>
        <button>+1</button>

        <p>Red moves = </p>
        <button>+1</button>

       </div>

       </div>
    );
}