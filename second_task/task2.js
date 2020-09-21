function checkUser(obj){
    if (obj.company === "our company" || obj.company === "partner\'s company" && obj.title === "Mr" ||
        obj.title ==="Mrs" )
    {

         return obj.name;
     }

    else{
        return "Это не наш пользователь"
    } 
}

const user = {
    company: "our company",
    title : "Mr",
    name: "Danil"
}

let name = checkUser(user);
console.log(name);