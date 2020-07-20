/* question5 */


console.log("Sales");

let sales = Number(prompt("Enter the number of sales made : ","0"))
let com;
if (sales >= 0 && sales <= 5000){
    com = 2 / 100 * sales;
    console.log(`Total commission earned ${com}`);
}else if (sales >= 5001 && sales <= 10000){
    com = (2 / 100 * 5000) + ((sales-5000) * 5 / 100);
    console.log(`Total commission earned ${com}`);
}else if (sales >= 10001 && sales <= 20000){
    com = (2 / 100 * 5000) + (5 / 100 * 5000) + ((sales-10000) * 7 / 100);
    console.log(`Total commission earned ${com}`);
}else if (sales > 20000){
    com = (2 / 100 * 5000) + (5 / 100 * 5000) + (7 / 100 *10000) + ((sales-20000) * 10 / 100);
    console.log(`Total commission earned ${com}`);
}else{
    console.log("There is some mistake, please enter number of sales again : D");
}