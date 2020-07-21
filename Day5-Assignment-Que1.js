/*Question1*/


n = prompt("Enter a positive number" );
let arr = [];
for(let i = 1; i<=n; i++){
    arr.push(i);
}
console.log(arr)
let odd = arr.filter(el=>el%2!=0);
console.log(odd);
let oddCubes = arr.filter(el=>el%2!=0).map(el=>el**3);
console.log(oddCubes);