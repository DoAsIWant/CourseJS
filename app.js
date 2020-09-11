// 1

let arr = ["Тут","Могла","Быть","Ваша","Реклама"];
let colors = ["#131287","#86c5d1","#fff0f1","green","yellow"]
let p = document.querySelector("p");
let i = 0;

function doSomething(){
 if(i>=arr.length){
     i = 0;
    
 }
 p.innerText = arr[i];
 p.style.backgroundColor = colors[i];
 p.style.padding = "30px";
  i++;

}
setInterval(doSomething, 1000);



// 2 

const button = document.querySelector("button");
function pixel(){
    let pixels = Math.random()*400;
    return pixels;
}


button.addEventListener("mouseover",()=>{
    button.style.margin = pixel() + "px";
});


