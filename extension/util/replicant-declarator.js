const nodecgApiContext = require("./nodecg-api-context");

const nodecg = nodecgApiContext.get();

const players = nodecg.Replicant('players', {
	defaultValue: {
		players: ["player1", "player2", "player3", "player4"],
		twitch: ["player1", "player2", "player3", "player4"],
		finished: [false, false, false, false],
		pos: 1,
		playing: 4,
	},
	persistent: false,
});

const generalRunInfo = nodecg.Replicant('generalRunInfo', {
	defaultValue: {
		game: "game",
		category: "category",
		estimate: "estimate",
		platform: "platform",
		year: "year",
		runId: -1
	},
	persistent: false
});

const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule', {
	defaultValue: [],
	persistent: false
});

const tokenLinks = nodecg.Replicant('tokenLinks', {
	defaultValue: ['', '']
});

const timer = nodecg.Replicant('timer', {
	defaultValue: {
		hours: `00`,
		minutes: `00`,
		seconds: `00`,
		tenthseconds: `0`,
	},
	persistent: false
})
