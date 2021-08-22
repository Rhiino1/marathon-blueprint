import '../styles/layoutEspera.css';

// const nextRunsListSchedule = nodecg.Replicant('nextRunsListSchedule');

// NodeCG.waitForReplicants(nextRunsListSchedule).then(() => {

// 	nextRunsListSchedule.on('change', (newValue, oldValue) => {
// 		while (nextGamesListContainer.firstChild) {
// 			nextGamesListContainer.removeChild(nextGamesListContainer.firstChild);
// 		}
// 		console.log(nextGamesListContainer.childNodes.length);
// 		for (let i = 0; i < newValue.length; i++) {
// 			let nextGameContainer = document.createElement('div');

// 			let nextGameBgContainer = document.createElement('div');


// 			if (i === 0) {
// 				let nextListMainTitleContainer = document.createElement('div');
// 				nextListMainTitleContainer.classList.add('next-list-main-title-container');
// 				nextGamesListContainer.appendChild(nextListMainTitleContainer);

// 				nextGameBgContainer.classList.add('next-game-bg-main-container-1');
// 				nextGameContainer.appendChild(nextGameBgContainer);

// 				let nextListMainTitle = document.createElement('h1');
// 				nextListMainTitle.classList.add('next-list-main-title');
// 				nextListMainTitle.textContent = 'YA VIENE:';
// 				nextListMainTitleContainer.appendChild(nextListMainTitle);

// 				let firstDivisor = document.createElement('div');
// 				firstDivisor.classList.add('first-divisor');
// 				nextListMainTitleContainer.appendChild(firstDivisor);

// 				nextGameContainer.classList.add('main-game-container');
// 				nextGamesListContainer.appendChild(nextGameContainer);
// 			} else if (i === 1) {
// 				let nextListTitleContainer = document.createElement('div');
// 				nextListTitleContainer.classList.add('next-list-title-container');
// 				nextGamesListContainer.appendChild(nextListTitleContainer);

// 				let nextListTitle = document.createElement('h1');
// 				nextListTitle.classList.add('next-list-title');
// 				nextListTitle.textContent = 'EN COLA:';
// 				nextListTitleContainer.appendChild(nextListTitle);

// 				let secondDivisor = document.createElement('div');
// 				secondDivisor.classList.add('second-divisor');
// 				nextListTitleContainer.appendChild(secondDivisor);
// 			}

// 			if (!nextGameContainer.classList.contains('main-game-container')) {
// 				nextGameContainer.classList.add('not-main-game-container');

// 				nextGameBgContainer.classList.add('next-game-bg-not-main-container-1');
// 				nextGameContainer.appendChild(nextGameBgContainer);
// 			}
// 			nextGameContainer.classList.add('next-game-container');
// 			nextGamesListContainer.appendChild(nextGameContainer);

// 			let nextGameRunnersEstimateContainer = document.createElement('div');
// 			nextGameRunnersEstimateContainer.classList.add('next-game-runners-estimate-container');
// 			nextGameContainer.appendChild(nextGameRunnersEstimateContainer);

// 			let nextGameRunner = document.createElement('h3');
// 			nextGameRunner.classList.add('next-game-runner');
// 			nextGameRunnersEstimateContainer.appendChild(nextGameRunner);

// 			let nextGameEstimate = document.createElement('h3');
// 			nextGameEstimate.classList.add('next-game-estimate');
// 			nextGameRunnersEstimateContainer.appendChild(nextGameEstimate);

// 			nextGameRunner.textContent = joinRunnersNames(newValue[i].runners);
// 			nextGameEstimate.textContent = newValue[i].estimado;

// 			let nextGameNameContainer = document.createElement('div');
// 			nextGameNameContainer.classList.add('next-game-name-container');
// 			nextGameContainer.appendChild(nextGameNameContainer);

// 			let nextGameName = document.createElement('h2');
// 			nextGameName.classList.add('next-game-name');
// 			nextGameNameContainer.appendChild(nextGameName);

// 			nextGameName.textContent = newValue[i].game;

// 			let nextGameCategoryPlatformContainer = document.createElement('div');
// 			nextGameCategoryPlatformContainer.classList.add('next-game-category-platform-container');
// 			nextGameContainer.appendChild(nextGameCategoryPlatformContainer);

// 			let nextGameCategory = document.createElement('h3');
// 			nextGameCategory.classList.add('next-game-category');
// 			nextGameCategoryPlatformContainer.appendChild(nextGameCategory);

// 			let nextGamePlatform = document.createElement('h3');
// 			nextGamePlatform.classList.add('next-game-platform');
// 			nextGameCategoryPlatformContainer.appendChild(nextGamePlatform);

// 			nextGameCategory.textContent = newValue[i].categoria;
// 			nextGamePlatform.textContent = newValue[i].plataforma;

// 		}
// 	})
// })
