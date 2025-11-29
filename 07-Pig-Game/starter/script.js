'use strict';

//selecting element
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1'); //both are correct we can write both
const current0e1=document.getElementById('current--0');
const current1e1=document.getElementById('current--1');

const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting condition
score0el.textContent = 0;
score1el.textContent = 0;
diceel.classList.add('hidden');

let currentscore=0;


//rolling dice

btnRoll.addEventListener('click',function(){

    // 1.generating normal dice roll
const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);


// 2.diplay dice
diceel.classList.remove('hidden');
diceel.src = `dice-${dice}.png`;

// 3.check for rolled 1 if true then give dice to next player
if(dice!=1){
    currentscore+=dice;
    current0e1.textContent= currentscore//change later
}
})