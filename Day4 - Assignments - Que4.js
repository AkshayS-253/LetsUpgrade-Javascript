/* question4 */

console.log("Calculator");

let operation = prompt("Enter the operation to br performed: \n 1.Addition \n 2.Subtraction \n 3.Multiplication \n 4.Division \n 5.Squareroot \n 6.Percentage");
let number1 = Number(prompt("Enter the first number : ","0"));
var number2;
if (operation != "Squareroot"){
    number2 = Number(prompt("Enter the second number : ","0"));
}
let calfun = function(){
    while (true){
        console.log(`The operation to be performed is ${operation}`);
        console.log(`Entered first number is ${number1}`);
        console.log(`Entered second number is ${number2}`);
        if (operation == "Addition"){
            let add = number1 + number2;
            console.log(`Result is ${add}`);
            break;
        }else if (operation == "Subtraction"){
            let sub = number1 - number2;
            console.log(`Result is ${sub}`);
            break;
        }else if (operation == "Multiplication"){
            let mul = number1 * number2;
            console.log(`Result is ${mul}`);
            break;
        }else if (operation == "Division"){
            let div = number1 / number2;
            console.log(`Result is ${div}`);
            break;
        }else if (operation == "Squareroot"){
            let sqrt = Math.sqrt(number1);
            console.log(`Result is ${sqrt}`);
            break;
        }else if (operation == "Percentage"){
            let perc = number1 / number2 * 100;
            console.log(`Result is ${perc}%`);
            break;
        }else{
            console.log("There was some mistake, please enter the number and operation to be performed again : D");
            break;
        }
    }
}
calfun();