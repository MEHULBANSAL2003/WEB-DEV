let todo=[];

let req=prompt("enter your request");  

while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    if(req=="list"){
        console.log("------------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------------");
    }
    else if(req=="add"){
        let task= prompt("enter the task you want to add");
        todo.push(task);
        console.log("TASK ADDED");
    }
    else if(req=="delete"){
        let idx=prompt("enter the index of task u want to delete");
        todo.splice(idx,1);   // it means got to index idx and delete 1 element from there... 1 element is element present at idx itself
    }
    else{
        console.log("wrong request");
    }

    req=prompt("enter your request");
    
}