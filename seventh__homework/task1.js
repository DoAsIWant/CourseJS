
function decorator(fn){
    let counter = 0;
    return function(){
      fn();
      counter++;
      console.log(counter);
    }
    
}

function log(){
    console.log("Something");
}

let callFunct = decorator(log);
callFunct();
callFunct();

