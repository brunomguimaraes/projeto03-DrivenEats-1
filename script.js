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
        let appearback = document.querySelector(".transparent-background");
        appearback.classList.add("appearback");
        let appearbox = document.querySelector(".confirmation-box");
        appearbox.classList.add("appearbox");
    }
}

function canceling() {
    let disappearback = document.querySelector(".transparent-background");
    disappearback.classList.remove("appearback");
    let disappearbox = document.querySelector(".confirmation-box");
    disappearbox.classList.remove("appearbox");
}


                



