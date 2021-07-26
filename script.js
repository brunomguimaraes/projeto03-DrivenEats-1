function mainCourse(element) {

    let choice = document.querySelector(".main-course.green-border");
    let checking = document.querySelector(".main-course .check.green-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("green-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".main-course.green-border .check");
    checkIcon.classList.toggle("green-icon");

    let first = document.querySelector(".main-course.green-border");
    let second = document.querySelector(".drinks.green-border");
    let third = document.querySelector(".deserts.green-border");

    if (first !== null){
        if(second !== null){
            if(third !== null){
                let close = document.querySelector(".bottom-bar-button");
                close.innerHTML = "Fechar pedido";
                close.classList.add("green-button");
            }
        }
    }

}

function drink(element) {

    let choice = document.querySelector(".drinks.green-border");
    let checking = document.querySelector(".drinks .check.green-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("green-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".drinks.green-border .check");
    checkIcon.classList.toggle("green-icon");

    let first = document.querySelector(".main-course.green-border");
    let second = document.querySelector(".drinks.green-border");
    let third = document.querySelector(".deserts.green-border");

    if (first !== null){
        if(second !== null){
            if(third !== null){
                let close = document.querySelector(".bottom-bar-button");
                close.innerHTML = "Fechar pedido";
                close.classList.add("green-button");
            }
        }
    }

}

function desert(element) {

    let choice = document.querySelector(".deserts.green-border");
    let checking = document.querySelector(".deserts .check.green-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("green-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".deserts.green-border .check");
    checkIcon.classList.toggle("green-icon");

    let first = document.querySelector(".main-course.green-border");
    let second = document.querySelector(".drinks.green-border");
    let third = document.querySelector(".deserts.green-border");

    if (first !== null){
        if(second !== null){
            if(third !== null){
                let close = document.querySelector(".bottom-bar-button");
                close.innerHTML = "Fechar pedido";
                close.classList.add("green-button");
            }
        }
    }

}

function confirm() {
    let element = document.querySelector(".bottom-bar-button");
    let released = element.innerHTML;
    if (released === "Fechar pedido") {
        let appearBack = document.querySelector(".transparent-background");
        appearBack.classList.add("appearback");
        let appearBox = document.querySelector(".confirmation-box");
        appearBox.classList.add("appearbox");

        let mainDishName = (document.querySelector(".main-course.green-border .menu .name")).innerHTML;
        let mainDishConfirm = document.querySelector(".confirmation-box .choices .food");
        mainDishConfirm.innerHTML = mainDishName;
        let mainDishPrice = (document.querySelector(".main-course.green-border .menu .price")).innerText;
        let mainDishPriceConfirm = document.querySelector(".confirmation-box .choices .foodPrice");
        mainDishPriceConfirm.innerHTML = mainDishPrice;

        let drinkName = (document.querySelector(".drinks.green-border .menu .name")).innerHTML;
        let drinkConfirm = document.querySelector(".confirmation-box .choices .soda");
        drinkConfirm.innerHTML = drinkName;
        let drinkPrice = (document.querySelector(".drinks.green-border .menu .price")).innerText;
        let drinkPriceConfirm = document.querySelector(".confirmation-box .choices .sodaPrice");
        drinkPriceConfirm.innerHTML = drinkPrice;

        let desertName = (document.querySelector(".deserts.green-border .menu .name")).innerHTML;
        let desertConfirm = document.querySelector(".confirmation-box .choices .candy");
        desertConfirm.innerHTML = desertName;
        let desertPrice = (document.querySelector(".deserts.green-border .menu .price")).innerText;
        let desertPriceConfirm = document.querySelector(".confirmation-box .choices .candyPrice");
        desertPriceConfirm.innerHTML = desertPrice;

        let total = (Number(mainDishPrice.replace(',','.').replace('R$ ','')) + Number(drinkPrice.replace(',','.').replace('R$ ','')) + Number(desertPrice.replace(',','.').replace('R$ ','')));
        let totalPriceConfirm = document.querySelector(".confirmation-box .choices .totalPrice");
        totalPriceConfirm.innerHTML = total.toFixed(2).replace('.',',');
        

    }
}

function canceling() {
    let disappearBack = document.querySelector(".transparent-background");
    disappearBack.classList.remove("appearback");
    let disappearBox = document.querySelector(".confirmation-box");
    disappearBox.classList.remove("appearbox");
}


                



