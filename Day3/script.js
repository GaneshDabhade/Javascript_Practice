function calculate (){
    const inputBox1 = document.getElementById("num1").value;
    const inputBox2 = document.getElementById("num2").value;

    const addition = parseFloat(inputBox1) + parseFloat(inputBox2);

    console.log(addition);

    document.getElementById("outputResults").innerText = `Addition is: ${addition}`;
}

// Number entered: 12 ,66
// Addition: 456564
// Substraction: 454/
// Multiplication:
// Division
