# \<<%= name %>\>

<%= description %>

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed.
```
npm i -g polymer-cli
```

## Compile Typescript

From the root folder of your application run:
```
$ npm run twc
```

## Viewing Your Application

```
$ polymer serve
```

## Generate Type Definitions for Other Polymer Elements

Use the `potts` script to generate basic type definitions for components in `bower.json`.  From the project root run:
```
$ npm run potts
```
This will create `potts.d.ts` in the project root folder.  Add that file to your `tsconfig.json` file:
```js
 "include": [
    "./potts.d.ts",
    "node_modules/twc/decorators/polymer.d.ts",
    "node_modules/polymer2-types/*.d.ts",
     "./src/**/*.ts",
     "test/**/*.ts"
    ]
```

## Building Your Application for Production

```
$ npm run twc
$ polymer build
```

This will create builds of your application in the `build/` directory, optimized to be served in production. You can then serve the built versions by giving `polymer serve` a folder to serve from:

```
$ polymer serve build/default
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
