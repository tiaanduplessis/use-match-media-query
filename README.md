# use-match-media-query
[![package version](https://img.shields.io/npm/v/use-match-media-query.svg?style=flat-square)](https://npmjs.org/package/use-match-media-query)
[![package downloads](https://img.shields.io/npm/dm/use-match-media-query.svg?style=flat-square)](https://npmjs.org/package/use-match-media-query)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/use-match-media-query.svg?style=flat-square)](https://npmjs.org/package/use-match-media-query)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)


> Match Media as a React hook!

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Safari](#safari)
- [Polyfills](#polyfills)
- [Contribute](#contribute)
- [License](#License)

## Usage

```js
import {useMatchMediaQuery} from 'use-match-media-query'

const Comp = () => {
    const isMobile = useMatchMediaQuery('screen and (max-width: 60em')
    return isMobile ? 'on mobile' : 'not on mobile'
}
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install use-match-media-query
$ # OR
$ yarn add use-match-media-query
```

## Safari

Having issues on Safari? [You are not alone!](https://stackoverflow.com/questions/35719526/safari-ignore-window-matchmedia).

# Polyfills

- [matchmedia-polyfill](https://www.npmjs.com/package/matchmedia-polyfill)

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    