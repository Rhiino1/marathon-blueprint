import '../styles/generalPanel.css'

// const ext_url = nodecg.bundleConfig.externalTimerURL + '/timer';
const ext_url = '/timer';

const raceMode = document.querySelector('#raceMode');
const raceModePlayersInput = document.querySelector('.race-players-names');
const playersQuantity = document.querySelector('#player-quantity-list')
const playersQuantityContainer = document.querySelector('#race-players-quantity-container');

const playersNames = document.querySelectorAll('.player-name');
const playersTwitchLinks = document.querySelectorAll('.twitch-icon');
const playersLabels = document.querySelectorAll('.players-twitch-label');
const playersContainer = document.querySelectorAll('.player-container');
const playersLinks = document.querySelectorAll('.playerLink');
const playersDones = document.querySelectorAll('.done-button-players');

const generateLinks = document.querySelector('#generar-links');
const resetLinks = document.querySelector('#reset-links');
const setButton = document.querySelector('#set');
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');

const raceModeEnabled = nodecg.Replicant('raceModeEnabled');
const racePlayersName = nodecg.Replicant('players');
const tokenLinks = nodecg.Replicant('tokenLinks');

let timerDisplay = document.querySelector(`[data-chronometer]`);
const timer = nodecg.Replicant('timer');

let hours = document.querySelector('.timer-manual-input-hours')
let minutes = document.querySelector('.timer-manual-input-minutes')
let seconds = document.querySelector('.timer-manual-input-seconds')

setButton.addEventListener('click', () => {
	timer.value.hours = hours.value;
	timer.value.minutes = minutes.value;
	timer.value.seconds = seconds.value;
	timer.value.tenthseconds = 0;
})

timer.on('change', (newValue) => {
	if (newValue.hours === '00') {
		timerDisplay.textContent = `${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
	} else {
		timerDisplay.textContent = `${newValue.hours}:${newValue.minutes}:${newValue.seconds}.${newValue.tenthseconds}`
	}
})

NodeCG.waitForReplicants(raceModeEnabled, racePlayersName).then(() => {
	racePlayersName.on('change', value => {
		for (let i = 0; i < playersNames.length; i++) {
			playersNames[i].value = `${value.twitch[i]}`;
			// playersNames[i].value = value.players[i];
			playersLabels[i].textContent = `${value.twitch[i]}`;
			playersTwitchLinks[i].href = `http://twitch.tv/${value.twitch[i]}`
		}

		if (racePlayersName.value.playing > 1) {
			playersQuantity.selectedIndex = value.playing - 2;
			console.log(playersQuantity.childNodes[racePlayersName.value.playing - 2], racePlayersName.value.playing - 2);
		} else {
			playersQuantity.selectedIndex = 0;
		}
		showPlayers()
	})

	raceModeEnabled.on('change', (value) => {
		raceMode.checked = value;
		showPlayers()
	})

	tokenLinks.on('change', (value) => {
		if (value.length > 0) {
			generateLinks.classList.add('btn-disabled');
		} else {
			generateLinks.classList.remove('btn-disabled');
		}
		setLinks()
	})
})

raceMode.addEventListener('click', () => {
	if (raceMode.checked) {
		raceModeEnabled.value = true;
	} else {
		raceModeEnabled.value = false;
	}
	nodecg.sendMessage('raceMode', raceMode.checked);
})

function setInputPlayersName() {
	for (let i = 1; i < playersContainer.length; i++) {
		if (i < playersQuantity.value) {
			playersContainer[i].style.display = 'flex';
		} else {
			playersContainer[i].style.display = 'none';
		}
	}
}

function showPlayers() {
	raceModePlayersInput.firstChild.style.display = 'flex';
	if (raceModeEnabled.value) {
		document.querySelector('.body-container').style.gridTemplateRows = '.7fr 0.5fr 1fr 1fr';
		nodecg.sendMessage('raceMode', true);
		// if (racePlayersName.value.playing === 1) {
		// 	playersQuantity.selectedIndex = 0;
		// 	racePlayersName.value.playing = 2;
		// }
		for (let i = 1; i < raceModePlayersInput.childNodes.length; i++) {
			raceModePlayersInput.childNodes[i].style.display = 'flex';
		}
		playersQuantityContainer.style.display = 'flex';
		setInputPlayersName()
	} else {
		document.querySelector('.body-container').style.gridTemplateRows = '.2fr 0.5fr 1fr 1fr';
		// racePlayersName.value.playing = 1;
		for (let i = 1; i < raceModePlayersInput.childNodes.length; i++) {
			raceModePlayersInput.childNodes[i].style.display = 'none';
		}
		playersQuantityContainer.style.display = 'none';
		playersDones[0].style.display = 'none';
	}
}

function donePlayer(numPlayer) {
	if (raceModeEnabled.value) {
		nodecg.sendMessage('doneRacePlayer', racePlayersName.value.players[numPlayer]);
	}
}

function setLinks() {
	if (raceModeEnabled.value) {
		if (tokenLinks.value.length > 0) {
			for (let i = 0; i < playersLinks.length; i++) {
				if (tokenLinks.value[i]) {
					playersLinks[i].style.display = 'block';
					playersLinks[i].href = `${ext_url}?p=${tokenLinks.value[i]}`;
					playersDones[i].style.display = 'block';
				}
			}
		} else {
			for (let i = 0; i < playersLinks.length; i++) {
				playersLinks[i].style.display = 'none';
				playersDones[i].style.display = 'none';
			}
		}
	} else {
		if (tokenLinks.value[0]) {
			playersLinks[0].style.display = 'block';
			playersLinks[0].href = `${ext_url}?p=${tokenLinks.value[0]}`;
			// playersDones[0].style.display = 'block';
		} else {
			playersLinks[0].style.display = 'none';
			playersDones[0].style.display = 'none';
		}
	}
}

playersQuantity.addEventListener('change', () => {
	racePlayersName.value.playing = playersQuantity.selectedIndex + 2;
	setInputPlayersName()
})

generateLinks.addEventListener('click', () => {
	for (let i = 0; i < playersNames.length; i++) {
		racePlayersName.value.players[i] = playersNames[i].value;
	}

	nodecg.sendMessage('generar-links', [playersNames[0].value, playersNames[1].value, playersNames[2].value, playersNames[3].value]).then(array => {
		if (raceModeEnabled.value) {
			for (let i = 0; i < playersLinks.length; i++) {
				playersLinks[i].href = `${ext_url}?p=${array[i]}`;
				playersLinks[i].style.display = 'block';
				playersDones[i].style.display = 'block';
			}
		} else {
			playersLinks[0].href = `${ext_url}?p=${array[0]}`;
			playersLinks[0].style.display = 'block';
			// playersDones[0].style.display = 'block';
		}
		generateLinks.classList.add('btn-disabled');
	})
})

resetLinks.addEventListener('click', resetLinksFunction)

function resetLinksFunction() {
	nodecg.sendMessage('reset-links');
	for (let i = 0; i < playersLinks.length; i++) {
		playersLinks[i].style.display = 'none';
		playersLinks[i].href = "#";
		playersDones[i].style.display = 'none';
	}
	generateLinks.classList.remove('btn-disabled');
}

playButton.addEventListener('click', () => {
	nodecg.sendMessage('play-external-timer')
	nodecg.sendMessage('play', true);
})

pauseButton.addEventListener('click', () => {
	nodecg.sendMessage('pause-external-timer')
	nodecg.sendMessage('pause', true);
})

resetButton.addEventListener('click', () => {
	nodecg.sendMessage('reset-external-timer')
	nodecg.sendMessage('reset', true);
})


for (let i = 0; i < playersDones.length; i++) {
	playersDones[i].addEventListener('click', () => {
		donePlayer(i);
	});
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
		generalText[4].value = value.host;
		scheduleNumberInput.value = value.runId + 1;
		// actualScheduleNumber.innerHTML = value.runId;
	})
})


generalRunButtons[0].addEventListener('click', (e) => {
	nodecg.sendMessage('backSchedule');
	resetLinksFunction()
})

generalRunButtons[1].addEventListener('click', (e) => {
	generalRunInfo.value.game = generalText[0].value;
	generalRunInfo.value.category = generalText[1].value;
	generalRunInfo.value.estimate = generalText[2].value;
	generalRunInfo.value.platform = generalText[3].value;
	generalRunInfo.value.host = generalText[4].value;
	for (let i = 0; i < playersNames.length; i++) {
		// playersNames[i].value = racePlayersName.value.players[i];
		racePlayersName.value.twitch[i] = playersNames[i].value;
	}
})

generalRunButtons[2].addEventListener('click', (e) => {
	nodecg.sendMessage('advanceSchedule');
	resetLinksFunction()
})

generalRunButtons[3].addEventListener('click', (e) => {
	nodecg.sendMessage('manualSchedule', scheduleNumberInput.value - 1);
	resetLinksFunction()
})