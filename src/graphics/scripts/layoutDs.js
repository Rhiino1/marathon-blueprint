import '../styles/layoutDs.css';

const info = document.querySelectorAll('.info')

const generalRunInfo = nodecg.Replicant('generalRunInfo');
const players = nodecg.Replicant('players');

NodeCG.waitForReplicants(generalRunInfo, players).then(() => {
	players.on('change', (value) => {
		info[1].textContent = `Runner: ${value.twitch[0]}`;
	})
	generalRunInfo.on('change', (value) => {
		info[0].textContent = value.game;
		info[2].textContent = `Categoría: ${value.category}`;
		info[3].textContent = `Plataforma: ${value.platform}`;
		info[4].textContent = `Estimado: ${value.estimate}`;
	})
})
