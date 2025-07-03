# Changelog

## 0.1.0-alpha.4 (2025-07-03)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/Romamo/instantly2/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **client:** add support for endpoint-specific base URLs ([d9961f1](https://github.com/Romamo/instantly2/commit/d9961f1c59e9cab7132613d81c547c0c35540c16))
* **mcp:** set X-Stainless-MCP header ([0c27b72](https://github.com/Romamo/instantly2/commit/0c27b72b0074f1562cf26e51ad1b67683314f8c4))


### Bug Fixes

* **ci:** release-doctor — report correct token name ([b937106](https://github.com/Romamo/instantly2/commit/b937106b5f462b1648488ae3fc5087cd5145a86e))
* **client:** explicitly copy fetch in withOptions ([d034495](https://github.com/Romamo/instantly2/commit/d034495167d11e5a700162282dd96c77722f0e0e))
* **client:** get fetchOptions type more reliably ([8e3eeea](https://github.com/Romamo/instantly2/commit/8e3eeea9826de5cba4d0a00f6158a716b23cc2a2))
* publish script — handle NPM errors correctly ([4ecb0a8](https://github.com/Romamo/instantly2/commit/4ecb0a8ec3e72c2be446e0567d27deaf402e1f07))


### Chores

* add docs to RequestOptions type ([1a32d13](https://github.com/Romamo/instantly2/commit/1a32d130646428afa398ae8d634298baedf466e3))
* **ci:** enable for pull requests ([4a51ac6](https://github.com/Romamo/instantly2/commit/4a51ac6c4d6d019c9125286f74930f1b45339b1d))
* **ci:** only run for pushes and fork pull requests ([ff2f8dd](https://github.com/Romamo/instantly2/commit/ff2f8dd0d1e31d80c607d7000e843dbb8522ccf9))
* **client:** improve path param validation ([be6c775](https://github.com/Romamo/instantly2/commit/be6c7759d04605d40289e4893893a8703373d733))
* **client:** refactor imports ([259847c](https://github.com/Romamo/instantly2/commit/259847c63c627efda20ded2a0ec94c0a61182efe))
* **internal:** add pure annotations, make base APIResource abstract ([26d5c9c](https://github.com/Romamo/instantly2/commit/26d5c9c7a6e3836696f3c9e5bbba3e728a4510e3))
* **readme:** update badges ([366f82c](https://github.com/Romamo/instantly2/commit/366f82c5e608c4ddcc4f2542208df54b23ae6803))
* **readme:** use better example snippet for undocumented params ([858250a](https://github.com/Romamo/instantly2/commit/858250a07ae19ba0c4ae06e6921f26d2bc97e0f2))


### Refactors

* **types:** replace Record with mapped types ([c3e66fe](https://github.com/Romamo/instantly2/commit/c3e66fe2cddf6317562eaad09df7bc9ff776a37f))

## 0.1.0-alpha.3 (2025-06-11)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/Romamo/instantly2/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Chores

* avoid type error in certain environments ([ada1f24](https://github.com/Romamo/instantly2/commit/ada1f24c036528d32e4641d9cdbc6530e357fdb4))
* **mcp:** provides high-level initMcpServer function and exports known clients ([1a5cba9](https://github.com/Romamo/instantly2/commit/1a5cba99fa82e7e75c9123f312fae93666d6cbe2))

## 0.1.0-alpha.2 (2025-06-06)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/Romamo/instantly2/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **mcp:** implement support for binary responses ([217903f](https://github.com/Romamo/instantly2/commit/217903f3e1f85bf0410be198e0761e144627618b))

## 0.1.0-alpha.1 (2025-06-04)

Full Changelog: [v0.0.1-alpha.1...v0.1.0-alpha.1](https://github.com/Romamo/instantly2/compare/v0.0.1-alpha.1...v0.1.0-alpha.1)

### Features

* **mcp:** include http information in tools ([93daab3](https://github.com/Romamo/instantly2/commit/93daab3098bfb01ae8ac10a156f3166dfb8124e5))


### Bug Fixes

* compat with more runtimes ([232041d](https://github.com/Romamo/instantly2/commit/232041ddc81c01850ab4d768245b018d49f2f1c8))
* **mcp:** include description in dynamic tool search ([522fa36](https://github.com/Romamo/instantly2/commit/522fa362d854b0c09e6015204422b43a674fb758))


### Chores

* adjust eslint.config.mjs ignore pattern ([3bdf238](https://github.com/Romamo/instantly2/commit/3bdf2388d5446a583733e072b81be837332cb407))
* **deps:** bump eslint-plugin-prettier ([1d1cadb](https://github.com/Romamo/instantly2/commit/1d1cadb0db1cc8e4e00cf545fc0a0cfb636e4af0))
* **docs:** use top-level-await in example snippets ([37299fb](https://github.com/Romamo/instantly2/commit/37299fb572d2b46fd562683f2538fe403027ecf4))
* improve publish-npm script --latest tag logic ([c204c86](https://github.com/Romamo/instantly2/commit/c204c8633a471045eb34a3cd40fb0953a699e891))
* **internal:** fix readablestream types in node 20 ([19032aa](https://github.com/Romamo/instantly2/commit/19032aa34ff641503e8518db7c955e5b3e626885))
* **internal:** update jest config ([b4df1a5](https://github.com/Romamo/instantly2/commit/b4df1a59408aee7137ca0ba1a1f392f5eaa46df9))
* **mcp:** remove duplicate assignment ([d7c3db9](https://github.com/Romamo/instantly2/commit/d7c3db9393b72ad192dc788e0684f44795cab2d3))

## 0.0.1-alpha.1 (2025-05-24)

Full Changelog: [v0.0.1-alpha.0...v0.0.1-alpha.1](https://github.com/Romamo/instantly2/compare/v0.0.1-alpha.0...v0.0.1-alpha.1)

### Bug Fixes

* **mcp:** fix cursor schema transformation issue with recursive references ([98bc06f](https://github.com/Romamo/instantly2/commit/98bc06fedc1ecb1f7ec30e81b6037c604ac061e6))


### Chores

* configure new SDK language ([e09546d](https://github.com/Romamo/instantly2/commit/e09546d64d2249fb26a0a1cb4ebb3b5b5a933ae6))
* **docs:** grammar improvements ([89db359](https://github.com/Romamo/instantly2/commit/89db35963008f79f5ae10f58863d468c956bf565))
* improve docs for MCP servers ([65cbc05](https://github.com/Romamo/instantly2/commit/65cbc0535200b47a8a1de011d07623b416c4dd12))
* **internal:** codegen related update ([bc11582](https://github.com/Romamo/instantly2/commit/bc115820168b1801f84f66be7a3e207cf0591c2c))
* update SDK settings ([8cab0aa](https://github.com/Romamo/instantly2/commit/8cab0aaa63ac367b631ae18b72cba72d4e3cfa3d))
* update SDK settings ([7e0bb0c](https://github.com/Romamo/instantly2/commit/7e0bb0c11d31a7fd954b89842f63b342d5374d8c))
