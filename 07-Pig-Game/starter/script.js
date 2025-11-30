'use strict';

//selecting element
const palyer0el=document.querySelector('.player--0');
const palyer1el=document.querySelector('.player--1');
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

const scores=[0,0];
let currentscore=0;
let activeplayer=0;

const switchplayer=function(){
    document.getElementById(`current--${activeplayer}`).textContent=0;
    currentscore=0;             
    activeplayer=activeplayer===0?1:0;
    palyer0el.classList.toggle('player--active');
    palyer1el.classList.toggle('player--active');
}


//rolling dice

btnRoll.addEventListener('click',function(){

    // 1.generating normal dice roll
const dice = Math.trunc(Math.random() * 6) + 1;


// 2.diplay dice
diceel.classList.remove('hidden');
diceel.src = `dice-${dice}.png`;

// 3.check for rolled 1 if true then give dice to next player
if(dice!==1){
    currentscore+=dice;
    document.getElementById(`current--${activeplayer}`).textContent=currentscore;
}
else{
  switchplayer();
}
})

btnHold.addEventListener('click',function(){
        //add current score to active player score
        scores[activeplayer]+=currentscore;
        //score[1]=score[1]+currentscore;
        document.getElementById(`score--${activeplayer}`).textContent=scores[activeplayer];



        //switching to next player;
        switchplayer();
})