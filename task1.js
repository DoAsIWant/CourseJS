let firstDigit = parseInt(prompt("Введите первое число"));
let secondDigit = parseInt(prompt("Введите второе число"));
let operation = prompt("Введите операцию");
let result = 0;

switch(operation){
    case "*" :
      result = firstDigit * secondDigit;
      break;
    case "/" :
       result = firstDigit / secondDigit;
        break;
    case "+" :
        result = firstDigit + secondDigit;
        break;
    case "+" :
        result = firstDigit + secondDigit;
        break;
    default:
        alert("Ошибка");                 
}

alert(result);