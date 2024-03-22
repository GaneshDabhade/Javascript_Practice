const boys = ['Ram', 'Sham', 'Bharat', "lucky", 'Bharat', "Bharat"];

// Searching array element's index
let elementIndex = boys.indexOf("Bharat");
console.log("First index of Bharat element is: ", elementIndex);

let lastElementIndex = boys.lastIndexOf("Bharat");
console.log("Last element Index is: ", lastElementIndex);

// Verify if element present
let result = boys.includes("Sham");
console.log(result);

// Reversing an array
boys.reverse();
console.log("After reversing the array: ", boys);