
function decorator(fn){
    let counter = 0;
    fn();
    return function(){
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

