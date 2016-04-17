/* eslint-env mocha */
'use strict'

const expect = require('chai').expect
const path = require('path')
const os = require('os')
const fsb = require('fs-blob-store')
const IPFSRepo = require('ipfs-repo')
const BlockService = require('ipfs-blocks').BlockService
const IPLDService = require('ipfs-ipld/src').IPLDService

const add = require('../src/commands/add')

describe('ipld-cli', () => {
  describe('commands', () => {
    it('add', (done) => {
      const repo = new IPFSRepo(path.join(os.tmpdir(), '.ipfs-cli'), {stores: fsb})
      const bs = new BlockService(repo)
      const service = new IPLDService(bs)

      add({content: JSON.stringify({hello: 'world'})}, service, (err, mh) => {
        expect(err).to.not.exist
        expect(mh).to.be.eql('QmWSKnuEtJzn3EjFbSQsbiTPAPMgrL9piq68PaJYRNeqbv')
        done()
      })
    })
  })
})
