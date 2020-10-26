/*

1. Еще одно задание, теперь уже на геттеры и сеттеры 
Создать объект с полями firstName и lastName. 
При помощи геттеров и сеттеров сделать так, чтобы в каждое из этих полей можно было бы записывать 
только строки без пробелов(Подсказка, понадобится сделать дополнительные скрытые поля).
Например, если в firstName пытаются записать строку “Александр Сергеевич”, то 
такое присвоение должно игнорироваться и значение не должно обновляться, а если просто “Александр”, 
то должно работать как обычное присвоение. Добавить еще один геттер fullName, который будет выводить 
полное имя пользователя.

*/

let personData = {
    firstName : "",
    lastName: "",


 }

Object.defineProperty(personData, "fullName",{
 set: function(value){
     if(value.includes(" ")){
         console.error("Ignored");
     }
     else{
     [this.firstName,this.lastName] = value.split("(?=[A-Z])");
     }
 },

 get: function(){
     return `${this.firstName} ${this.lastName}`
 }
});

personData.fullName = "vanDarkholme";
console.log(personData.fullName);