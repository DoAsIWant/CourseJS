

let div = document.querySelector("div");
div.addEventListener("mouseover",()=>{
  div.style.top = Math.floor(Math.random() * 200) + "px"
  div.style.left = Math.floor(Math.random() * 200) + "px";
})
