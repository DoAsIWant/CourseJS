let element = document.querySelector("div");
let flag = false;

function move(e){
  element.style.left = e.pageX- element.offsetWidth/2 + 'px';
  element.style.top = e.pageY - element.offsetHeight/2 + "px";
}

element.addEventListener("mousedown",()=>{
 flag = true;
});

element.addEventListener("mouseup",()=>{
  flag = false;
});

element.addEventListener("mousemove",(e)=>{
  if(flag === true){
    move(e);
  }
  
})

