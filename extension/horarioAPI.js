const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const requestRQ = require('./util/requestH');

const horarioUrl = "/schedules/7111co9f9y93iv7a7c"
const horarioLink = "https://horaro.org/playathon3/playathon3"

const generalRunInfo = nodecg.Replicant('generalRunInfo');
const players = nodecg.Replicant('players');
const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule');

nodecg.listenFor('backSchedule', async() => {
  if (requestRQ.horaroCounter === 1) {
    console.log('Esta en el inicio de maraton, no puede retroceder.');
    return;
  }
  requestRQ.horaroCounter = requestRQ.horaroCounter - 2;
  const horarioData = await requestRQ.get(horarioUrl);
  await generalScheduleFunction(horarioData);
  await getNextListSchedule(horarioData);
})

nodecg.listenFor('manualSchedule', async(count) => {
  const horarioData = await requestRQ.get(horarioUrl);
  await generalScheduleFunction(horarioData, count);
  await getNextListSchedule(horarioData)
})

nodecg.listenFor('advanceSchedule', async() => {
  const horarioData = await requestRQ.get(horarioUrl);
  await generalScheduleFunction(horarioData);
  await getNextListSchedule(horarioData);
})


function toHHMMSS(timeInSeconds) {
  var sec_num = parseInt(timeInSeconds, 10); // don't forget the second param
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (hours === 0) {
    return minutes + ':' + seconds;
  } else {
    return hours + ':' + minutes + ':' + seconds;
  }
}

async function getNextListSchedule(horarioData) {
  nextRunsListSchedule.value = [];

  let i = requestRQ.horaroCounter;
  for (i; i < requestRQ.horaroCounter + 5 && i < requestRQ.horaroCounterMax; i++) {

    let juegoC;
    let runnerC;
    let categoriaC;
    let plataformaC;
    let comsC;
    let yearC;
    let hiddenRunnerC;
    let gameIndex;
    let runnerIndex;
    let categoriaIndex;
    let plataformaIndex;
    let comsIndex;
    let yearIndex;
    let hiddenRunnerIndex;

    for (let index = 0; index < horarioData.data.columns.length; index++) {
      if (horarioData.data.columns[index] === 'Juego') {
        juegoC = index;
      }
      if (horarioData.data.columns[index] === 'Runners') {
        runnerC = index;
      }
      if (horarioData.data.columns[index] === 'Categoría') {
        categoriaC = index;
      }
      if (horarioData.data.columns[index] === 'Consola') {
        plataformaC = index;
      }
      if (horarioData.data.columns[index] === 'Comentarista') {
        comsC = index;
      }
      if (horarioData.data.columns[index] === 'hiddenYear') {
        yearC = index;
      }
      if (horarioData.data.columns[index] === 'hiddenRunners') {
        hiddenRunnerC = index;
      }
    }

    let game = horarioData.data.items[i].data[juegoC];
    if (!game) {
      game = 'TBD'
    }

    let runner = horarioData.data.items[i].data[runnerC];
    if (!runner) {
      runner = 'TBD'
    }

    let runnerTwitch = horarioData.data.items[i].data[hiddenRunnerC];
    if (!runnerTwitch) {
      runnerTwitch = 'TBD'
    }

    let categoria = horarioData.data.items[i].data[categoriaC];
    if (!categoria) {
      categoria = 'TBD'
    }

    let plataforma = horarioData.data.items[i].data[plataformaC];
    if (!plataforma) {
      plataforma = 'TBD'
    }

    let comentarista = horarioData.data.items[i].data[comsC];
    if (!comentarista) {
      comentarista = 'TBD'
    }

    let year = horarioData.data.items[i].data[yearC];
    if (!year) {
      year = 'TBD'
    }

    let estimado = horarioData.data.items[i].length_t;

    if (game.startsWith('[')) {
      gameIndex = game.search(']');
      game = game.substring(1, gameIndex);
    }


    if (runner.startsWith('[')) {
      runnerIndex = runner.search(']');
      runner = runner.substring(1, runnerIndex);
    }

    if (runnerTwitch.startsWith('[')) {
      hiddenRunnerIndex = runnerTwitch.search(']');
      runnerTwitch = runnerTwitch.substring(1, hiddenRunnerIndex);
    }

    if (categoria.startsWith('[')) {
      categoriaIndex = categoria.search(']');
      categoria = categoria.substring(1, categoriaIndex);
    }

    if (plataforma.startsWith('[')) {
      plataformaIndex = plataforma.search(']');
      plataforma = plataforma.substring(1, plataformaIndex);
    }

    if (comentarista.startsWith('[')) {
      comsIndex = comentarista.search(']');
      comentarista = comentarista.substring(1, comsIndex);
    }

    if (year.startsWith('[')) {
      yearIndex = year.search(']');
      year = year.substring(1, yearIndex);
    }

    if (game.startsWith('**')) {
      game = game.substring(2, horarioData.data.items[i].data[juegoC].length - 2);
    } else if (game.startsWith('*')) {
      game = game.substring(1, horarioData.data.items[i].data[juegoC].length - 1);
    }

    if (runner.startsWith('**')) {
      runner = runner.substring(2, horarioData.data.items[i].data[runnerC].length - 2);
    } else if (runner.startsWith('*')) {
      runner = runner.substring(1, horarioData.data.items[i].data[runnerC].length - 1);
    }

    if (runnerTwitch.startsWith('**')) {
      runnerTwitch = runnerTwitch.substring(2, horarioData.data.items[i].data[hiddenRunnerC].length - 2);
    } else if (runnerTwitch.startsWith('*')) {
      runnerTwitch = runnerTwitch.substring(1, horarioData.data.items[i].data[hiddenRunnerC].length - 1);
    }

    if (categoria.startsWith('**')) {
      categoria = categoria.substring(2, horarioData.data.items[i].data[categoriaC].length - 2);
    } else if (categoria.startsWith('*')) {
      categoria = categoria.substring(1, horarioData.data.items[i].data[categoriaC].length - 1);
    }

    if (plataforma.startsWith('**')) {
      plataforma = plataforma.substring(2, horarioData.data.items[i].data[plataformaC].length - 2);
    } else if (plataforma.startsWith('*')) {
      plataforma = plataforma.substring(1, horarioData.data.items[i].data[plataformaC].length - 1);
    }
    if (comentarista.startsWith('**')) {
      comentarista = comentarista.substring(2, horarioData.data.items[i].data[comsC].length - 2);
    } else if (comentarista.startsWith('*')) {
      comentarista = comentarista.substring(1, horarioData.data.items[i].data[comsC].length - 1);
    }

    if (year.startsWith('**')) {
      year = year.substring(2, horarioData.data.items[i].data[yearC].length - 2);
    } else if (plataforma.startsWith('*')) {
      year = year.substring(1, horarioData.data.items[i].data[yearC].length - 1);
    }

    let runnersName = runner.split(', ');
    let runnersTwitch = runnerTwitch.split(', ');

    let runners = [];
    for (let i = 0; i < runnersName.length; i++) {
      runners.push({
        name: runnersName[i],
        twitch: runnersTwitch[i]
      })
    }

    // console.log(game);
    // console.log(runners);
    // console.log(categoria);
    // console.log(toHHMMSS(estimado));
    // console.log(plataforma);

    nextRunsListSchedule.value.push({
      game: game,
      runners: runners,
      categoria: categoria,
      estimado: toHHMMSS(estimado),
      plataforma: plataforma,
      year: year,
      coms: comentarista
    });
    // console.log(nextRunsListSchedule.value);
  }
}

async function generalScheduleFunction(horarioData, count = 0) {

  if (requestRQ.horaroCounterMax === -1) {
    requestRQ.horaroCounterMax = horarioData.data.items.length;
  }

  if (count) {
    if (count < 0 && count > requestRQ.horaroCounterMax) {
      nodecg.log.info(`Numero invalido.`)
      return
    } else {
      requestRQ.horaroCounter = count;
    }
  }
  if (requestRQ.horaroCounter === requestRQ.horaroCounterMax) {
    requestRQ.active = false;
    nodecg.log.info(`No hay más juegos programados.`)
    return;
  }
  requestRQ.active = true;
  requestRQ.comsEdited = false;
  requestRQ.runnerEdited = false;
  requestRQ.categoriaEdited = false;
  requestRQ.estimadoEdited = false;


  let juegoC;
  let runnerC;
  let categoriaC;
  let plataformaC;
  let comsC;
  let yearC;
  let hiddenRunnerC;
  let gameIndex;
  let runnerIndex;
  let categoriaIndex;
  let plataformaIndex;
  let comsIndex;
  let yearIndex;
  let hiddenRunnerIndex;

  for (let index = 0; index < horarioData.data.columns.length; index++) {
    if (horarioData.data.columns[index] === 'Juego') {
      juegoC = index;
    }
    if (horarioData.data.columns[index] === 'Runners') {
      runnerC = index;
    }
    if (horarioData.data.columns[index] === 'Categoría') {
      categoriaC = index;
    }
    if (horarioData.data.columns[index] === 'Consola') {
      plataformaC = index;
    }
    if (horarioData.data.columns[index] === 'Comentarista') {
      comsC = index;
    }
    if (horarioData.data.columns[index] === 'hiddenYear') {
      yearC = index;
    }
    if (horarioData.data.columns[index] === 'hiddenRunners') {
      hiddenRunnerC = index;
    }
  }

  let game = horarioData.data.items[requestRQ.horaroCounter].data[juegoC];
  if (!game) {
    game = 'TBD'
  }

  let runner = horarioData.data.items[requestRQ.horaroCounter].data[runnerC];
  if (!runner) {
    runner = 'TBD'
  }

  let runnerTwitch = horarioData.data.items[requestRQ.horaroCounter].data[hiddenRunnerC];
  if (!runnerTwitch) {
    runnerTwitch = 'TBD'
  }

  let categoria = horarioData.data.items[requestRQ.horaroCounter].data[categoriaC];
  if (!categoria) {
    categoria = 'TBD'
  }

  let plataforma = horarioData.data.items[requestRQ.horaroCounter].data[plataformaC];
  if (!plataforma) {
    plataforma = 'TBD'
  }

  let comentarista = horarioData.data.items[requestRQ.horaroCounter].data[comsC];
  if (!comentarista) {
    comentarista = 'TBD'
  }

  let year = horarioData.data.items[requestRQ.horaroCounter].data[yearC];
  if (!year) {
    year = 'TBD'
  }

  let estimado = horarioData.data.items[requestRQ.horaroCounter].length_t;

  if (game.startsWith('[')) {
    gameIndex = game.search(']');
    game = game.substring(1, gameIndex);
  }


  if (runner.startsWith('[')) {
    runnerIndex = runner.search(']');
    runner = runner.substring(1, runnerIndex);
  }

  if (runnerTwitch.startsWith('[')) {
    hiddenRunnerIndex = runnerTwitch.search(']');
    runnerTwitch = runnerTwitch.substring(1, hiddenRunnerIndex);
  }

  if (categoria.startsWith('[')) {
    categoriaIndex = categoria.search(']');
    categoria = categoria.substring(1, categoriaIndex);
  }

  if (plataforma.startsWith('[')) {
    plataformaIndex = plataforma.search(']');
    plataforma = plataforma.substring(1, plataformaIndex);
  }

  if (comentarista.startsWith('[')) {
    comsIndex = comentarista.search(']');
    comentarista = comentarista.substring(1, comsIndex);
  }

  if (year.startsWith('[')) {
    yearIndex = year.search(']');
    year = year.substring(1, yearIndex);
  }

  if (game.startsWith('**')) {
    game = game.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[juegoC].length - 2);
  } else if (game.startsWith('*')) {
    game = game.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[juegoC].length - 1);
  }

  if (runner.startsWith('**')) {
    runner = runner.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[runnerC].length - 2);
  } else if (runner.startsWith('*')) {
    runner = runner.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[runnerC].length - 1);
  }

  if (runnerTwitch.startsWith('**')) {
    runnerTwitch = runnerTwitch.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[hiddenRunnerC].length - 2);
  } else if (runnerTwitch.startsWith('*')) {
    runnerTwitch = runnerTwitch.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[hiddenRunnerC].length - 1);
  }

  if (categoria.startsWith('**')) {
    categoria = categoria.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[categoriaC].length - 2);
  } else if (categoria.startsWith('*')) {
    categoria = categoria.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[categoriaC].length - 1);
  }

  if (plataforma.startsWith('**')) {
    plataforma = plataforma.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[plataformaC].length - 2);
  } else if (plataforma.startsWith('*')) {
    plataforma = plataforma.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[plataformaC].length - 1);
  }

  if (comentarista.startsWith('**')) {
    comentarista = comentarista.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[comsC].length - 2);
  } else if (comentarista.startsWith('*')) {
    comentarista = comentarista.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[comsC].length - 1);
  }

  if (year.startsWith('**')) {
    year = year.substring(2, horarioData.data.items[requestRQ.horaroCounter].data[yearC].length - 2);
  } else if (plataforma.startsWith('*')) {
    year = year.substring(1, horarioData.data.items[requestRQ.horaroCounter].data[yearC].length - 1);
  }

  let runnersName = runner.split(', ');
  let runnersTwitch = runnerTwitch.split(', ');

  let runners = [];
  for (let i = 0; i < runnersName.length; i++) {
    runners.push({
      name: runnersName[i],
      twitch: runnersTwitch[i]
    })
  }

  // console.log(game);
  // console.log(runners);
  // console.log(categoria);
  // console.log(toHHMMSS(estimado));
  // console.log(plataforma);

  generalRunInfo.value.game = game;
  generalRunInfo.value.category = categoria;
  generalRunInfo.value.estimate = toHHMMSS(estimado);
  generalRunInfo.value.platform = plataforma;
  generalRunInfo.value.year = year;
  generalRunInfo.value.coms = comentarista
  generalRunInfo.value.runId = requestRQ.horaroCounter;

  players.value.playing = runners.length;
  // nodecg.log.info(players.value.playing)
  for (let i = 0; i < runners.length; i++) {
    players.value.players[i] = runners[i].name;
    players.value.twitch[i] = runners[i].twitch;
  }

  requestRQ.horaroCounter++;
}