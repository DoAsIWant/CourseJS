
let colors = ["black", "green","blue","yellow","pink","purple","orange","grey"];

function getColor(array){
    let random = Math.floor(Math.random()*10);
    if(random>array.length){
        random = 0;
    }

    return array[random];
    
}

function divStyle(el){
    el.style.backgroundColor = "red";
    el.style.width =  Math.floor(Math.random() * 100) + "px";
    el.style.height =  Math.floor(Math.random() * 100) + "px";
    el.style.position = "absolute";
    el.style.top = Math.random() * 2000 + "px";
    el.style.left = Math.random()* 2000 + "px";
}

for(let i = 0 ; i<999; i++){
   let div =  document.createElement("div");
   divStyle(div);
   document.body.appendChild(div);
}

document.body.addEventListener("click",(e)=>{
    if (e.target.tagName === "DIV"){
     e.target.style.backgroundColor = getColor(colors);
    }

    else{
        alert("It is not a div");
    }
});