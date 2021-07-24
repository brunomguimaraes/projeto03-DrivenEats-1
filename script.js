function mainCourse(element) {

    let choice = document.querySelector(".main-course.green-border");
    let checking = document.querySelector(".main-course .check.checked-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("checked-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".main-course.green-border .check");
    checkIcon.classList.toggle("checked-icon");
}

function drink(element) {

    let choice = document.querySelector(".drinks.green-border");
    let checking = document.querySelector(".drinks .check.checked-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("checked-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".drinks.green-border .check");
    checkIcon.classList.toggle("checked-icon");
}

function desert(element) {

    let choice = document.querySelector(".deserts.green-border");
    let checking = document.querySelector(".deserts .check.checked-icon");
    if ((choice && checking) !== null) {
        choice.classList.toggle("green-border");
        checking.classList.toggle("checked-icon");
    }
    
    element.classList.toggle("green-border");

    let checkIcon = document.querySelector(".deserts.green-border .check");
    checkIcon.classList.toggle("checked-icon");
}

function finish() {
    let um = document.querySelector(".main-course.green-border");
    let dois = document.querySelector(".drinks.green-border");
    let tres = document.querySelector(".deserts.green-border");

    if (um !== null){
        if(dois !== null){
            if(tres !== null){
                let close = document.querySelector(".bottom-bar-content");
                close.innerHTML = "Fechar pedido";
                close.classList.add("finish-button");
            }
        }
    }
}

                



