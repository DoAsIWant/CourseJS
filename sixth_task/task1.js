let text_block = document.querySelector(".fast__text");
let btn = text_block.querySelector(".start");
let text = text_block.querySelector("textarea");
let tableBlock = document.querySelector(".block");

btn.addEventListener("click", ()=>{
text.disabled = false;
setTimeout(countSpeed,60000);

});

function countSpeed(){
   let speed = `Ваша скорость равна ${Math.floor(text.textLength/60)} символов в секунду`
   text.disabled = true;
   text.value = "";
   drawTable(speed)
}

function drawTable(speed){
    tableBlock.innerText = speed;
}


