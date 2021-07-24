function mainCourse(element) {

    let choice = document.querySelector(".main-course.green-border");
    if (choice !== null) {
        choice.classList.toggle("green-border");
    }
    
    element.classList.toggle("green-border");
}

function drink(element) {

    let choice = document.querySelector(".drinks.green-border");
    if (choice !== null) {
        choice.classList.toggle("green-border");
    }
    
    element.classList.toggle("green-border");
}

function desert(element) {

    let choice = document.querySelector(".deserts.green-border");
    if (choice !== null) {
        choice.classList.toggle("green-border");
    }
    
    element.classList.toggle("green-border");
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

                



