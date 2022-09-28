const operar = (operator) => {

    let numberOne = parseInt(document.getElementById("valueOne").value);
    let numberTwo = parseInt(document.getElementById("valueTwo").value);
    let result = 0;

    

    switch(operator){
        case "+" : 
            result = numberOne + numberTwo;
            break;
        case "-" : 
            result = numberOne - numberTwo;
            break;
        case "/" : 
            result = numberOne / numberTwo;
            break;
        case "*" : 
            result = numberOne * numberTwo;
            break;
    }

    document.getElementById("result").innerHTML = result;

}