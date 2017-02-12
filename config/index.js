const lodash = require('lodash')
const mdName = process.argv[2] ? process.argv[2] || (process.env.NODE_ENV === 'production' ? 'prod': 'docs') : 'docs';
const md = require('./' + mdName);

module.exports = lodash.assign({}, md.global, process.argv[3] === 'production' ? md.build : md.dev);