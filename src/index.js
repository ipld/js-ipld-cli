'use strict'

const ArgumentParser = require('argparse').ArgumentParser
const pkg = require('../package.json')

const os = require('os')
const fsb = require('fs-blob-store')
const IPFSRepo = require('ipfs-repo')
const BlockService = require('ipfs-blocks').BlockService
//const IPLDService = require('ipfs-ipld').IPLDService

const parser = new ArgumentParser({
  version: pkg.version,
  addHelp: true,
  description: 'IPLD command line tool'
})

const subparsers = parser.addSubparsers({
  title: 'Commands'
})

const add = subparsers.addParser('add', {addHelp: true})
add.addArgument('filename', {
  type: String
})

const args = parser.parseArgs()
console.log(args.subcommand_name, args)

const repo = new IPFSRepo(os.tmpdir(), {stores: fsb})
const bs = new BlockService(repo)
// const ipldService = new IPLDService(bs)

switch (args.subcommand_name) {
  case 'add':
    addCmd(args)
  default:
    throw new Error('Invalid command')
}

function addCmd (args) {
  console.log('Adding %s', args.filename)
}
