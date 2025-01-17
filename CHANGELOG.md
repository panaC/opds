# Next

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.6...develop

Changes:
* TODO

# 1.0.6

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* NPM updates
* Significant unit test updates, handling of union/polymorph types with special (de)serialization rules, and OPDS feed crawler.

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.6/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.6

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.5...v1.0.6

# 1.0.5

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* Reviewed and annotated the data models based on the most current JSON Schema (significant unit test updates to match)
* Minor NPM updates

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.5/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.5

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.4...v1.0.5

# 1.0.4

> Build environment: NodeJS `8.14.1`, NPM `6.4.1`

Changes:
* Updated documentation (minor)
* NPM 6.5.* has regression bugs for global package installs, so revert back to NPM 6.4.1 (which is officially shipped with the NodeJS installer).

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.4/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.4

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.3...v1.0.4

# 1.0.3

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.3/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.3

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.2...v1.0.3

# 1.0.2

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (r2-xxx-js)

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.2/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.2

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.1...v1.0.2

# 1.0.1

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (minor)
* Replaced deprecated RawGit URLs
* Improved Ava unit test setup
* Removed unnecessary TypeScript import aliases

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.1/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.1

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0...v1.0.1

# 1.0.0

> Build environment: NodeJS `8.14.0`, NPM `6.5.0`

Changes:
* NPM updates (minor)
* README info
* VisualStudio code tweaks (developer workflow)
* Semantic versioning bump 1.*.* (3-digit style now, "-alphaX" suffix caused issues with NPM tooling: updates, lockfile, etc.)

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.7...v1.0.0

# 1.0.0-alpha.7

> Build environment: NodeJS `8.12.0`, NPM `6.4.1`

Changes:
* NPM updates (minor corrections)

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.7/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.7/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.7

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.6...v1.0.0-alpha.7

# 1.0.0-alpha.6

> Build environment: NodeJS `8.12.0`, NPM `6.4.1`

Changes:
* NPM updates (minor)
* Git revision JSON info now includes NodeJS and NPM version (build environment)
* OPDS v1 to v2 converter now exposes Entry-compatible function

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.6/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.6/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.6

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.5...v1.0.0-alpha.6

# 1.0.0-alpha.5

Changes:
* Dependency "ta-json" GitHub semver dependency becomes "ta-json-x" NPM package (fixes https://github.com/readium/r2-testapp-js/issues/10 )
* Removed TypeScript linter warning message (checks for no unused variables)
* NPM updates related to the Node TypeScript typings

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.5/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.5/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.5

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.4...v1.0.0-alpha.5

# 1.0.0-alpha.4

Changes:
* OPDS converter XML to JSON: empty language ignored.
* npm updates (external dependencies)

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.4/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.4/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.4

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.3...v1.0.0-alpha.4

# 1.0.0-alpha.3

Changes:
* correct version in `package-lock.json`

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.3/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.3/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.3

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.2...v1.0.0-alpha.3

# 1.0.0-alpha.2

Changes (NPM updates):
* `@types/node`
* `r2-utils-js`
* `r2-shared-js`

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.2/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.2/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.2

Git diff:
* https://github.com/readium/r2-opds-js/compare/v1.0.0-alpha.1...v1.0.0-alpha.2

# 1.0.0-alpha.1

Changes:
* initial NPM publish

Git revision info:
* https://unpkg.com/r2-opds-js@1.0.0-alpha.1/dist/gitrev.json
* https://github.com/edrlab/r2-opds-js-dist/blob/v1.0.0-alpha.1/dist/gitrev.json

Git commit history:
* https://github.com/readium/r2-opds-js/commits/v1.0.0-alpha.1

Git diff:
* initial NPM publish
