/*Question3*/

const name = prompt("Enter your name","Name");

title.innerText += `Welcome to this webpage ${name}`;

const ctime = document.getElementById('time');

function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

const attr = document.getElementById('att');

attr.classList.toggle('bgBlack');


document.body.style.color = 'white';
