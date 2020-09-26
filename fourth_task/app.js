function days(firstDate, secondDate){
    let counter = 0;
    let workingDays = 0;
    let time = Date.parse(firstDate) - Date.parse(secondDate),
        days = Math.floor((time/(1000 * 60*60 * 24)));
    
        for(let i = 0 ; i<days;i++){
        if(i%7 === 0 && i>0){
            counter--;
          continue;
          
        }
        else{
            counter++
        }
    }    
 
    return counter;
}

let quantity = days("2020-09-30","2020-09-16");
console.log(quantity);