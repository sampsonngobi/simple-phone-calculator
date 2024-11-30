

const display = document.getElementById("display");

let result;

function appendTodisplay(input) {
    const mathOperatorsRegex = new RegExp( /[+\-*/^%]/g);
    if(mathOperatorsRegex.test(input) && result != undefined){
        display.value = result + input;
        result = undefined
        return
    }

    if(result != undefined){
        display.value = input;
        result = undefined;
    }
    else{   
    display.value += input;
    }
updateDisplay()
}

function clearDisplay() {
    display.value = "";
    updateDisplay()

}

function calculate() {
    try {
        display.value = eval(display.value);
        result = display.value;
    }

    catch (error) {
        display.value = "Error"

    }
}

function updateDisplay(){
    document.getElementById("display").textContent = display.value;
}