<<<<<<< HEAD
function addition(){
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value); 
    let output = number1 + number2;
    let outputString = `Result: ${output}`
    document.getElementById("Results").innerText = outputString;

    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}



=======
let fruitsList = ["Apple", 'Banana', "Kiwi", "Berries"];
let hobbiesList = ['reading', 'programming', 'walking'];

let outputArr = [];

outputArr.push(...fruitsList, ...hobbiesList);

console.log(outputArr);
>>>>>>> c176d036dac113aab84b8ae4c92f88a1186e4fc1
