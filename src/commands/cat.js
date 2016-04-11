'use strict'

const resolve = require('ipfs-ipld/src').resolve
const colorz = require('json-colorz')
const prettyjson = require('prettyjson')

module.exports = function cat (args, ipldService) {
  resolve(ipldService, args.path, function (err, res) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    if (args.noColors) {
      console.log(JSON.stringify(res, null, 2))
    } else if (args.yml) {
      console.log(prettyjson.render(res, {indent: 2}))
    } else if (args.json) {
      colorz(res)
    }
  })
}
