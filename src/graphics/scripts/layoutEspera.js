import '../styles/layoutEspera.css';

const generalRunInfo = nodecg.Replicant('generalRunInfo');
const nextGame = document.querySelector('.next-game');

const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule');
const nextRunsListContainer = document.querySelector('.next-game-list-container');

NodeCG.waitForReplicants(generalRunInfo, nextRunsListSchedule).then(() => {

  generalRunInfo.on('change', (value) => {
    nextGame.textContent = `${value.game}`;
  })

  nextRunsListSchedule.on('change', (newValue, oldValue) => {
    while (nextRunsListContainer.firstChild) {
      nextRunsListContainer.removeChild(nextRunsListContainer.firstChild);
    }
    for (let i = 0; i < newValue.length; i++) {
      let nextGame = document.createElement('h3');
      nextGame.classList.add('next-game-list');
      nextGame.textContent = newValue[i].game;
      nextRunsListContainer.appendChild(nextGame);
    }
  })
})