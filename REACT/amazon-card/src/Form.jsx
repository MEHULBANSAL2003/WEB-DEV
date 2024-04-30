function handleSubmit(event){
    event.preventDefault();
    console.log("submitted");
}

export default function Form(){
    return (
     <>
     <form onSubmit={handleSubmit}> 
        <input type="text" />
        <button onClick={handleSubmit}>submit</button>
     </form>
     </>
    );
}