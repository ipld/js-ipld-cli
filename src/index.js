'use strict'

const ArgumentParser = require('argparse').ArgumentParser
const pkg = require('../package.json')
const path = require('path')
const os = require('os')
const fsb = require('fs-blob-store')
const IPFSRepo = require('ipfs-repo')
const BlockService = require('ipfs-block-service')
const IPLDService = require('ipfs-ipld/src').IPLDService

const addCmd = require('./commands/add')
const catCmd = require('./commands/cat')

const parser = new ArgumentParser({
  version: pkg.version,
  addHelp: true,
  description: 'IPLD command line tool'
})

const subparsers = parser.addSubparsers({
  title: 'commands',
  dest: 'subcommand'
})

const add = subparsers.addParser('add', {
  addHelp: true,
  description: 'Add a new object in JSON format'
})
add.addArgument('content', {
  type: String
})

const cat = subparsers.addParser('cat', {
  addHelp: true,
  description: 'Resolve a given path'
})
cat.addArgument('path', {
  type: String
})
cat.addArgument('--yml', {
  type: Boolean,
  defaultValue: false,
  nargs: 0,
  help: 'Print the result in yaml'
})
cat.addArgument('--json', {
  type: Boolean,
  nargs: 0,
  defaultValue: true,
  help: 'Print the result in json'
})
cat.addArgument('--no-colors', {
  type: Boolean,
  nargs: 0,
  defaultValue: false,
  help: 'Print the result without colors',
  dest: 'noColors'
})

const args = parser.parseArgs()
const repo = new IPFSRepo(path.join(os.homedir(), '.ipfs-cli'), {stores: fsb})
const bs = new BlockService(repo)
const ipldService = new IPLDService(bs)

switch (args.subcommand) {
  case 'add':
    addCmd(args, ipldService)
    break
  case 'cat':
    catCmd(args, ipldService)
    break
  default:
    throw new Error('Invalid command')
}
