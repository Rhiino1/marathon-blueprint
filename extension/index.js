'use strict';

//nodecg context, needed on all extensions.
const nodecgApiContext = require('./util/nodecg-api-context');

module.exports = function (nodecg) {
	nodecgApiContext.set(nodecg);

	require('./util/replicant-declarator');
	require('./horarioAPI')
}