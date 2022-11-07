const inputToken = document.querySelector("#token");
const buttons = document.querySelector(".buttons");
const submitBtn = document.querySelector(".btn-submit-container");
const regressBtn = document.querySelector(".regress-container");
const success = document.querySelector("#success");
const error = document.querySelector("#error")

buttons.addEventListener("click", (e) => {
addEventListenerFunction(e);
})

regressBtn.addEventListener("click", () => {
    regress();
})

submitBtn.addEventListener("click", () => {
    submit()
})

function addEventListenerFunction(e) {
    const element = e.target;
    const elementClass = element.getAttribute("class");
    if (elementClass.includes("one")) {
        setValueToInput("1");
    } else if (elementClass.includes("two")) {
        setValueToInput("2");
    } else if (elementClass.includes("three")) {
        setValueToInput("3");
    } else if (elementClass.includes("four")) {
        setValueToInput("4");
    } else if (elementClass.includes("five")) {
        setValueToInput("5");
    } else if (elementClass.includes("six")) {
        setValueToInput("6");
    } else if (elementClass.includes("seven")) {
        setValueToInput("7");
    } else if (elementClass.includes("eight")) {
        setValueToInput("8");
    } else if (elementClass.includes("nine")) {
        setValueToInput("9");
    } else if (elementClass.includes("zero")) {
        setValueToInput("0");
    }

}

function setValueToInput(value) {
    const valueAttribute = inputToken.getAttribute("value");
    valueAttribute ? valueAttribute.length < 4 ? inputToken.setAttribute("value", valueAttribute + value)
                                               : console.log("máxima cantidad de números alcanzada")
                    : inputToken.setAttribute("value", value);
}

function overWriteInput(value) {
    inputToken.setAttribute("value", value);
    console.log(inputToken.getAttribute("value"));
}

function regress() {
    const value = inputToken.getAttribute("value");
    const res = value.substring(0, value.length -1);
    value ? overWriteInput(res) : console.log("no hay ningún número escrito");
}

function submit() {
    const value = inputToken.getAttribute("value");
    inputToken.getAttribute("value").length === 4 ? value === "1234" ? successCode()
                                                                     : errorCode()
                                                    : console.log("te faltan numeros")
}

function restartInput() {
    inputToken.removeAttribute("value");
}

function successCode() {
    success.removeAttribute("class");
    restartInput();
    setTimeout( () => {
        success.setAttribute("class", "none")
    }, 3000 )
}

function errorCode() {
    error.removeAttribute("class");
    setTimeout( () => {
        error.setAttribute("class", "none")
    }, 3000 )
    restartInput();
}