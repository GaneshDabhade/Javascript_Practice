let fruitsList = ["Apple", 'Banana', "Kiwi", "Berries"];
let hobbiesList = ['reading', 'programming', 'walking'];

let outputArr = [];

outputArr.push(...fruitsList, ...hobbiesList);

console.log(outputArr);