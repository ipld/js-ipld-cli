# ipld-cli

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io) [![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](http://ipfs.io/) [![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![Dependency Status](https://david-dm.org/ipfs/js-ipld-cli.svg?style=flat-square)](https://david-dm.org/ipfs/js-ipld-cli)
[![Travis CI](https://travis-ci.org/ipfs/js-ipld-cli.svg?branch=master)](https://travis-ci.org/ipfs/js-ipld-cli)

> Interact with IPLD on the command line

## Installation

```bash
$ npm i -g ipld-cli
```

## Usage

```bash
$ ipld add -h
usage: ipld add [-h] content

Add a new object in JSON format

Positional arguments:
  content

Optional arguments:
  -h, --help  Show this help message and exit.

$ ipld cat -h
usage: ipld cat [-h] [--yml] [--json] [--no-colors] path

Resolve a given path

Positional arguments:
  path

Optional arguments:
  -h, --help   Show this help message and exit.
  --yml        Print the result in yaml
  --json       Print the result in json
  --no-colors  Print the result without colors
```
