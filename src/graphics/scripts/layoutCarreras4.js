import '../styles/layoutCarreras4.css';

const runnersNames = document.querySelectorAll('.runner-name')
const runners = document.querySelectorAll('.runner-js')
const runnerNameContainer = document.querySelectorAll('.runner-name-container')
const info = document.querySelectorAll('.info')

const generalRunInfo = nodecg.Replicant('generalRunInfo');
const players = nodecg.Replicant('players');

NodeCG.waitForReplicants(generalRunInfo, players).then(() => {
	players.on('change', (value) => {
		for (let i = 0; i < runnersNames.length; i++) {
			runnerNameContainer[i].style.display = 'none';
			runnersNames[i].textContent	= '';
			runners[i].textContent	= '';
		}
		for (let i = 0; i < value.playing; i++) {
			runnerNameContainer[i].style.display = 'flex';
			runnersNames[i].textContent = value.twitch[i];
			runners[i].textContent = value.twitch[i];
		}
	})
	generalRunInfo.on('change', (value) => {
		info[0].textContent = value.game;
		info[2].textContent = `Categoría: ${value.category}`;
		info[3].textContent = `Plataforma: ${value.platform}`;
		info[4].textContent = `Año: ${value.year}`;
		info[5].textContent = `Estimado: ${value.estimate}`;
	})
})
