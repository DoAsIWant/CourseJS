function getOrder(){
    let form = prompt("Заказ сдесь или с собой");
    let order = prompt("Выберите заказ: кола, бургер, салат");
    let whatElse = confirm("Что нибудь ещё?");

    if(whatElse){
        let order2 = prompt("Выберите заказ: кола, бургер, салат");
        order += " " + order2;
    }
    else{
        let clap = confirm("Купите ладошку для помощи детям");
    }

    return {
        form:form,
        order:order,

    }
}

let obj = getOrder();
let cardForm = document.querySelector(".form");
let cardOrder = document.querySelector(".order");

cardForm.textContent = obj.form;
cardOrder.textContent = obj.order;