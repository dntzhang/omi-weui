const lodash = require('lodash')
const mdName = process.env.NODE_ENV ? process.argv[2] || (process.env.NODE_ENV === 'production' ? 'prod': 'example') : 'example'
const md = require('./' + mdName)

module.exports = lodash.assign({}, md.global, process.env.NODE_ENV === 'production' ? md.build: md.dev)