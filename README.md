# Gas Webpack Workspace Boilerplate

## Setup

First, install [google/clasp](https://github.com/google/clasp) to global, and

``` bash
$ yarn install
```

## Clone Gas Project

``` bash
$ yarn clone
yarn run v1.22.10
$ bin/clone.sh
Input Project Name >> sample
? Clone which script? # select your project
Warning: files in subfolder are not accounted for unless you set a '.claspignore' file.
Cloned 2 files.
└─ ./dist/appsscript.json
└─ ./dist/コード.js
Not ignored files:
└─ dist/appsscript.json
└─ dist/コード.js

Ignored files:

✨  Done in 11.52s.
```

## Write Gas Function

`projects/<projectName>/index.ts` are entry points for webpack and `global.*` functions are recoginized as gas function.

``` typescript:projects/sample/index.ts
globla.gasFunc = () => {
  console.log(`Hello World!`)
}
```

## Push to Gas

``` bash
$ yarn push sample
yarn run v1.22.10
$ run-p typecheck test
$ tsc -p . --noEmit
$ jest
$ bin/push.sh members
$ webpack
[webpack-cli] Compilation finished
# ...
└─ dist/appsscript.json
└─ dist/bundle.js
Pushed 2 files.
✨  Done in 29.15s.
```
