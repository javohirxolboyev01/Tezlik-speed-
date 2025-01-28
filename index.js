const input = document.querySelectorAll('input');
const span  = document.querySelectorAll('span');
const p = document.querySelector('p');
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    let masofa = input[1].value;
    let vaqt = input[0].value;
    let son = 0;
    son = +input[1].value / +input[0].value;
    p.innerText = `Sizning masofangiz ${input[1].value} sizning vaqtingiz ${input[0].value} tezligingiz esa ${son} km/s`;
    console.log(son);
});