'use strict';

//selecting element
const palyer0el = document.querySelector('.player--0');
const palyer1el = document.querySelector('.player--1');
const score0el = document.querySelector('#score--0');
const score1el = document.getElementById('score--1'); //both are correct we can write both
const current0e1 = document.getElementById('current--0');
const current1e1 = document.getElementById('current--1');

const New = document.querySelector('.btn--new');
const diceel = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores,currentscore,activeplayer,playing;
const init = function () {
  //starting condition

 scores = [0, 0];
 currentscore = 0;
 activeplayer = 0;
 playing = true;

  score0el.textContent = 0;
  score1el.textContent = 0;
  current0e1.textContent = 0;
  current1e1.textContent = 0;
  palyer0el.classList.remove('player--winner');
  palyer1el.classList.remove('player--winner');
  palyer1el.classList.add('player--active');
  palyer0el.classList.remove('player--active');
  diceel.classList.add('hidden');
};
init();

const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentscore = 0;
  activeplayer = activeplayer === 0 ? 1 : 0;
  palyer0el.classList.toggle('player--active');
  palyer1el.classList.toggle('player--active');
};

//rolling dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1.generating normal dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2.diplay dice
    diceel.classList.remove('hidden');
    diceel.src = `dice-${dice}.png`;

    // 3.check for rolled 1 if true then give dice to next player
    if (dice !== 1) {
      currentscore += dice;
      document.getElementById(`current--${activeplayer}`).textContent =
        currentscore;
    } else {
      switchplayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to active player score
    scores[activeplayer] += currentscore;
    //score[1]=score[1]+currentscore;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];

    //finsh the game if palyer has>=100
    if (scores[activeplayer] >=100) {
      //finish the  game
      playing = false;
      diceel.classList.add('hidden');

      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove('player--active');
    } else {
      //switching to next player;
      switchplayer();
    }
  }
});

btnNew.addEventListener('click', init);
