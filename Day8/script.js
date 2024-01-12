
const add = (num1, num2) =>{
    return num1 + num2;
}

const sub = (num1, num2) =>{
    return num1 - num2;
}

const calculate = (num1, num2, operation) => {
    const result = operation(num1, num2);
    console.log(result);
}

calculate(5, 3, add);










































