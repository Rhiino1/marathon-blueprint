import '../styles/layoutCarreras2.css';

const runner = document.querySelectorAll('.runner');
const game = document.querySelectorAll('.game');
const category = document.querySelectorAll('.category');
const platform = document.querySelectorAll('.platform');
const estimate = document.querySelectorAll('.estimate');
const coms = document.querySelectorAll('.coms');

const generalRunInfo = nodecg.Replicant('generalRunInfo');
const players = nodecg.Replicant('players');

NodeCG.waitForReplicants(generalRunInfo, players).then(() => {
  players.on('change', (value) => {
    runner[0].textContent = `${value.twitch[0]}`;
    runner[1].textContent = `${value.twitch[1]}`;
  })
  generalRunInfo.on('change', (value) => {
    console.log(value);
    game[0].textContent = value.game;
    category[0].textContent = `${value.category}`;
    // platform[0].textContent = `${value.platform}`;
    estimate[0].textContent = `${value.estimate}`;
    coms[0].textContent = `${value.coms}`;
  })
})