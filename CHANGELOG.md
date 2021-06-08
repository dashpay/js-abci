# [0.19.0](https://github.com/tendermint/js-abci/compare/v0.18.5...v0.19.0) (2021-06-08)


### Features

* reimplemented server for better reliability ([#6](https://github.com/tendermint/js-abci/issues/6))
* update protos for tenderdash signing branch ([#3](https://github.com/tendermint/js-abci/issues/3))



## [0.18.5](https://github.com/tendermint/js-abci/compare/v0.18.3...v0.18.5) (2021-02-16)


### Features

* better handle connection errors ([53cac14](https://github.com/tendermint/js-abci/commit/53cac14b7bed6dced9712e8fd62e98b3d3d58a4b))



## [0.18.4](https://github.com/tendermint/js-abci/compare/v0.18.3...v0.18.4) (2021-02-16)


### Bug Fixes

* skip write on write error ([a26f065](https://github.com/tendermint/js-abci/commit/a26f06562b43f0caa440b2df354f322aa61a9fb2))



## [0.18.3](https://github.com/tendermint/js-abci/compare/v0.18.2...v0.18.3) (2021-02-16)


### Bug Fixes

* connection errror writes to closed stream ([47da4e9](https://github.com/tendermint/js-abci/commit/47da4e9233f8047781cf6f986bb5d4891d5af03e))



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


