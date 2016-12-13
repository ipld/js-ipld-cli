# js-ipld-cli

[![](https://img.shields.io/badge/made%20by-Protocol%20Labs-blue.svg?style=flat-square)](http://ipn.io)
[![](https://img.shields.io/badge/project-IPLD-blue.svg?style=flat-square)](http://github.com/ipld/ipld)
[![](https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square)](http://webchat.freenode.net/?channels=%23ipfs)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Coverage Status](https://coveralls.io/repos/github/ipld/js-ipld-cli/badge.svg?branch=master)](https://coveralls.io/github/ipld/js-ipld-cli?branch=master)
[![Travis CI](https://travis-ci.org/ipld/js-ipld-cli.svg?branch=master)](https://travis-ci.org/ipld/js-ipld-cli)
[![Circle CI](https://circleci.com/gh/ipld/js-ipld-cli.svg?style=svg)](https://circleci.com/gh/ipld/js-ipld-cli)
[![Dependency Status](https://david-dm.org/ipld/js-ipld-cli.svg?style=flat-square)](https://david-dm.org/ipld/js-ipld-cli) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> Interact with IPLD on the command line

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## Install

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

## Maintainers

Captain: [@dignifiedquire](https://github.com/dignifiedquire)

## Contribute

Feel free to join in. All welcome. Open an [issue](https://github.com/ipld/js-ipld-cli/issues)!

Check out our [contributing document](https://github.com/ipld/ipld/blob/master/contributing.md) for more information on how we work, and about contributing in general. Please be aware that all interactions related to IPLD are subject to the IPFS [Code of Conduct](https://github.com/ipfs/community/blob/master/code-of-conduct.md).

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT](LICENSE) © 2016 Protocol Labs Inc.
