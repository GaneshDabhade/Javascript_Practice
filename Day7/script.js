function addition(){
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value); 
    let output = number1 + number2;
    let outputString = `Result: ${output}`
    document.getElementById("Results").innerText = outputString;

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}



