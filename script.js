'use strice';
const playerE0 = document.querySelector('.player__0')
const playerE1 = document.querySelector('.player__1')
const score0E1 = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currente1 = document.getElementById('current--0')
const currente2 = document.getElementById('current--1')
const dice1 = document.querySelector('.dice')
const btmgame = document.querySelector('.btn--new')
const btmroll = document.querySelector('.btn--roll')
const btmhold = document.querySelector('.btn--hold')

// score0E1.textContent = 0;
// score1El.textContent = 0;
// dice1.classList.add('hidden');

// let score = [0, 0]
// let currentScore = 0;
// let activeplayer = 0;
// let playing = true;

let score, currentScore, activeplayer, playing;


const init = function () {

    score = [0, 0]
    currentScore = 0;
    activeplayer = 0;
    playing = true;

    score0E1.textContent = 0;
    score1El.textContent = 0;
    currente1.textContent = 0;
    currente2.textContent = 0;

    dice1.classList.add('hidden');
    playerE0.classList.remove('player--winner');
    playerE1.classList.remove('player--winner')
    playerE0.classList.add('player--active');
    playerE1.classList.remove('player--active')
};
init();
10

const switchplayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = currentScore;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentScore = 0;
    playerE0.classList.toggle('player--active');
    playerE1.classList.toggle('player--active');
}

btmroll.addEventListener('click', function () {
    if (playing) {
        //  dice roll 
        const dice = Math.trunc(Math.random() * 6) + 1;
        // console.log(dice);
        //display dice
        dice1.classList.remove('hidden');
        dice1.src = `dice-${dice}.png`;

        //for rolled
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentScore;
            // currente1.textContent = currentScore; //change later

        } else {
            //switch next player
            switchplayer()
        }
    }
});

btmhold.addEventListener('click', function () {
    // add current score active player
    if (playing) {
        score[activeplayer] += currentScore

        //score [1]=score[1]  +current score

        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];

        // check if score is >=100
        if (score[activeplayer] >= 100) {
            // finish the game 
            playing = false;
            dice1.classList.add('hidden');
            document.querySelector(`.player__${activeplayer}`).classList.add('player--winner');

            document.querySelector(`.player--${activeplayer}`).remove('player--active')
        }
        else {

            switchplayer()
        }

    }
    // switch next player
})


btmgame.addEventListener('click', init);