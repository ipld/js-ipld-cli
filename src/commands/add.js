'use strict'

const ipld = require('ipld')

module.exports = function add (args, ipldService, cb) {
  cb = cb || (() => {})

  let content
  try {
    content = JSON.parse(args.content)
  } catch (err) {
    console.error('Invalid JSON')
    process.exit(1)
  }

  ipldService.add(content, function (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    const mh = ipld.multihash(ipld.marshal(content))
    console.log('Added new node with hash %s', mh)
    cb(null, mh)
  })
}
