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
		host: "host",
		runId: -1
	},
	persistent: false
});

const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule', {
	defaultValue: [],
	persistent: false
});