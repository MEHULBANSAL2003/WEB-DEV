const printHello=()=>{
    console.log("Hello");
}

function printBye(){
    console.log("Bye");
}

function handledbl(){
    console.log("dbl clicked");
}

export default function Button(){

return (
    <>
    <button onClick={printHello}>Click me</button>

  {/* <p onClick={printBye}>this is parah for event demo</p> */}

    <p onMouseOver={printBye}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora placeat ad natus, nobis quos delectus obcaecati sapiente, mollitia error tenetur repellendus ipsum adipisci a aliquam. Totam eveniet minima voluptatum fuga. </p>
    {/* onmouseover event is used to trigger on just hovering */}
    
    <button onDoubleClick={handledbl}>Click me</button>
     
    </>
)

}