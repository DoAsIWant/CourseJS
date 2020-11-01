let startGame = document.querySelector("#start");
let score = document.querySelector(".score_digit");
let time = document.querySelector(".time_digit")
let clickCount = 0;
let timer = 5000;
let isTimer = false;


startGame.addEventListener("click",()=>{
    
    if(isTimer === false){
      setTimeout(log,timer);
      setInterval(timeIsUp, 1000);
      isTimer = true;
    }
    else{
        countMyclick();
        
    }
});


function countMyclick(){
    clickCount++;
    score.innerText = clickCount;

}

function log() {
    alert(clickCount);
    clickCount = 0;
    isTimer = false; 
}

function timeIsUp(){
     timer-=1000;
     time.innerText = timer/1000;
}