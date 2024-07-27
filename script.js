const display = document.getElementById('display'); 

function appendToDisplay(number) { 
    display.value += number
}

function calculate(){ 
    display.value = eval(display.value)
}

function c(){ 
    display.value = ""
}