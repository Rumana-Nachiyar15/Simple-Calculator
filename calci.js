function calculate() 
{
    // get user input 
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);

    // calculation process

    let result;
    switch (operator) {
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Select Operator";
    }
    // displaying the result with inner.HTML

document.getElementById("result").innerHTML = "Result : " + result;
}