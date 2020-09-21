function printSomething(msg){
    return function(secondMsg){
        return `${msg} ${secondMsg}`;
    }
}

let message = printSomething("Hello")("World");
console.log(message);