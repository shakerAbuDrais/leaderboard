import './style.css';
import { newGame, addScore } from './modules/gameHandler.js';
import displayPlayer from './displayPlayer.js';
// html elements as constants
// this is a new code uploaded here
const newPlayer = document.querySelector('#sub-btn');
const refresh = document.querySelector('#refresh');
const playerName = document.querySelector('#name');
const playerScore = document.querySelector('#score');

window.onload = () => {
  displayPlayer();
  if (!localStorage.getItem('GameID')) {
    newGame();
  }
  newPlayer.addEventListener('click', (e) => {
    e.preventDefault();
    const user = playerName.value;
    const score = playerScore.value;
    const gameID = localStorage.getItem('GameID');
    addScore(user, score, gameID);
  });

  refresh.addEventListener('click', (e) => {
    e.preventDefault();
    displayPlayer();
  });
};