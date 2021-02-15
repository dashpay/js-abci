## [0.18.2](https://github.com/tendermint/js-abci/compare/v0.17.0...v0.18.2) (2021-02-15)


### Features

* handle write or close errors ([6d5bfd3](https://github.com/tendermint/js-abci/commit/6d5bfd3d44d205007a3e9e0f20246d3d06759bdc))



## [0.18.1](https://github.com/tendermint/js-abci/compare/v0.17.0...v0.18.1) (2021-02-15)


### Bug Fixes

* an error on `maybeReadNextMessage` breaks server ([bca69da](https://github.com/tendermint/js-abci/commit/bca69da512e9fcf8073e7957090f236db6e3c9e2))


### Features

* write error on connection error ([f94bbf5](https://github.com/tendermint/js-abci/commit/f94bbf578fd9219ef15575d1470e85bc45938543))



# [0.18.0](https://github.com/tendermint/js-abci/compare/v0.17.0...v0.18.0) (2021-02-04)


### Features

* handle connection error ([#5](https://github.com/tendermint/js-abci/issues/5))


### BREAKING CHANGES

* server `error` event renamed to `handlerError`



# 0.17.0 (2020-12-30)


### Features

* emit server error on errors in handlers ([#2](https://github.com/tendermint/js-abci/issues/2))
* update to tenderdash v0.17 ([#1](https://github.com/tendermint/js-abci/issues/1))


### BREAKING CHANGES

* this project is no longer compatible with an original Tendermint


