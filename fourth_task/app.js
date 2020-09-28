function days(firstDate, secondDate){
    let counter = 0;
        while(firstDate.getTime()<secondDate.getTime()){
            if(firstDate.getDay() !== 0 && firstDate.getDay()!== 6 ){
                counter++;
            }

            firstDate.setDate(firstDate.getDate() + 1);
        }
       
 
    return counter;
}

let firstDate = new Date("2020-09-16");
let secondDate = new Date("2020-09-30")
let quantity = days(firstDate,secondDate);
console.log(quantity);