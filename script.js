const numbers = document.getElementsByClassName("nums");
const equal = document.getElementById("equal");
const negative_positive = document.getElementById("negative-positive");
const percentage = document.getElementById("percentage");
const clear = document.getElementById("clear");
const dot = document.getElementById("dot");
const tela = document.getElementById("tela");
const signals = document.getElementsByClassName("signals");

let num1 = "";
let isNum1 = false;
let num2 = "";
let isNum2 = false;
let total = "";
let expression = "";
let expressionNum2 = "";
let expressionSignal = "";
let signal = "";
let isSignal = false;
let isPercentage = false;

function clearAll() {
    isNum1 = false;
    tela.innerHTML = "";
    num1 = "";
    num2 = "";
    total = "";
    expression = "";
    expressionNum2 = "";
    signal = "";
    perc = "";
}


clear.addEventListener("click", clearAll);

mult.addEventListener("click", function () {

})

for (let j = 0; j < numbers.length; j++) {
    numbers[j].addEventListener("click", (e) => {
        let atr = e.target.getAttribute('value');
        if (isNum1 === false) {
            num1 += atr
            expression = num1
            tela.innerHTML = expression
        } else {
            num2 += atr
            expressionNum2 = num2
            tela.innerHTML = "<p>" + expression + expressionSignal + expressionNum2 + "</p>";
            isNum2 = true;
        }
    })
};

negative_positive.addEventListener("click", negative_Positive)

percentage.addEventListener("click", takePercentage);

dot.addEventListener("click", decimal);

for (let i = 0; i < signals.length; i++) {
    signals[i].addEventListener("click", (e) => {
        let atr = e.target.getAttribute('value');
        if (expressionSignal === "") {
            signal += atr;
        } else if (expressionSignal.includes(signal) && (expressionSignal === "*")) {
            signal += atr;
        } else {
            signal = atr;
        }
        isNum1 = true;
        isSignal = true;
        expressionSignal = signal;
        tela.innerHTML = "<p>" + expression + expressionSignal + "</p>";
    })
}

function negative_Positive() {
    num1 = num1 - (num1 * 2);
    console.log(num1);
    expression = num1;
    tela.innerHTML = expression;
}
function decimal() {
    if (isSignal === false){
        num1 = num1 + ".";
        expression = num1;
        tela.innerHTML = expression;
    }
    else{
        num2 = num2 + ".";
        expressionNum2 = num2;
        tela.innerHTML = "<p>" + expression + signal + expressionNum2 + "</p>";
    }
}
function takePercentage() {
    if (isPercentage == false) {
        isNum1 = true;
        signal = this.value;
        expressionSignal = signal;
        tela.innerHTML = expression + expressionSignal;
        console.log(signal)
    }
}


equal.addEventListener("click", function () {
    if (signal == "+") {
        total = parseFloat(num1) + parseFloat(num2);
        tela.innerHTML = total;
    }
    else if (signal == "-") {
        total = parseFloat(num1 - num2)
        tela.innerHTML = total;
        
    }
    else if (signal == "/") {
        total = parseFloat(num1 / num2)
        tela.innerHTML = total;
    }
    else if (signal == "**") {
        total = parseFloat(num1 ** num2)
        tela.innerHTML = total;
    }
    else if (signal == "*") {
        total = parseFloat(num1 * num2)
        tela.innerHTML = total;
    }else if(signal == "%"){
        total = calcPercentage(num1, num2);
        tela.innerHTML = total;
    }

    num1 = "";
    num2 = "";
    total = "";
    expression = "";
    signal = "";
    isNum1 = false;
    isNum2 = false;
    isSignal =false;
})


function calcPercentage(percent, total) {
    return ((percent/100) * total)
}