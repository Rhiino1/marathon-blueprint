import '../styles/generalPanel.css'

// const ext_url = nodecg.bundleConfig.externalTimerURL + '/timer';
const ext_url = '/timer';

const raceModePlayersInput = document.querySelector('.race-players-names');
const playersQuantityContainer = document.querySelector('#race-players-quantity-container');

const playersNames = document.querySelectorAll('.player-name');
const playersTwitchLinks = document.querySelectorAll('.twitch-icon');
const playersLabels = document.querySelectorAll('.players-twitch-label');

const racePlayersName = nodecg.Replicant('players');

NodeCG.waitForReplicants(racePlayersName).then(() => {
	racePlayersName.on('change', value => {
		for (let i = 0; i < playersNames.length; i++) {
			playersNames[i].value = `${value.players[i]}`;
			// playersNames[i].value = value.players[i];
			playersLabels[i].value = `${value.twitch[i]}`;
			playersTwitchLinks[i].href = `http://twitch.tv/${value.twitch[i]}`
		}
		showPlayers()
	})
})

function showPlayers() {
	raceModePlayersInput.firstChild.style.display = 'flex';
	document.querySelector('.body-container').style.gridTemplateRows = '.7fr 0.5fr 1fr 1fr';
	for (let i = 0; i < raceModePlayersInput.childNodes.length; i++) {
		raceModePlayersInput.childNodes[i].style.display = 'none';
	}
	for (let i = 0; i < racePlayersName.value.playing; i++) {
		raceModePlayersInput.childNodes[i].style.display = 'flex';
	}
	// setInputPlayersName()
}

//------- general section -------

const generalText = document.querySelectorAll('.general-info-text');
const generalRunButtons = document.querySelectorAll('.general-button');
const scheduleNumberInput = document.querySelector('#manual-schedule-number-input');

const generalRunInfo = nodecg.Replicant('generalRunInfo');

NodeCG.waitForReplicants(generalRunInfo).then(() => {
	generalRunInfo.on('change', (value) => {
		generalText[0].value = value.game;
		generalText[1].value = value.category;
		generalText[2].value = value.estimate;
		generalText[3].value = value.platform;
		generalText[4].value = value.year;
		scheduleNumberInput.value = value.runId + 1;
		// actualScheduleNumber.innerHTML = value.runId;
	})
})


generalRunButtons[0].addEventListener('click', (e) => {
	nodecg.sendMessage('backSchedule');
})

generalRunButtons[1].addEventListener('click', (e) => {
	generalRunInfo.value.game = generalText[0].value;
	generalRunInfo.value.category = generalText[1].value;
	generalRunInfo.value.estimate = generalText[2].value;
	generalRunInfo.value.platform = generalText[3].value;
	generalRunInfo.value.year = generalText[4].value;
	for (let i = 0; i < playersNames.length; i++) {
		racePlayersName.value.players[i] = playersNames[i].value;
		racePlayersName.value.twitch[i] = playersLabels[i].value;
	}
})

generalRunButtons[2].addEventListener('click', (e) => {
	nodecg.sendMessage('advanceSchedule');
})

generalRunButtons[3].addEventListener('click', (e) => {
	nodecg.sendMessage('manualSchedule', scheduleNumberInput.value - 1);	
})
