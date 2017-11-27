# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

### Added

- `Discovery.ctor` now support dependency injection, where instances of `require('axis-discovery-bonjour').Discovery` and `require('axis-discovery-ssdp').Discovery` can be specified. This enables the possibility of configuring  each individual discovery protocol.

## [1.0.2] - 2017-11-23

### Fixed

- Creating package using [yarn](https://yarnpkg.com/en/) does not produce a complete package, revert back to use [npm](https://www.npmjs.com/)

## [1.0.1] - 2017-11-22

### Fixed

- During a cache hit the properties of a device sometimes gets overwritten with the value of `undefined`

## [1.0.0] - 2017-07-16

### Added

- Support for discovering [Axis Communications](http://www.axis.com/) devices on the network using Bonjour and SSDP (UPnP)
