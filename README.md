# generator-polymer-init-twc-app
Generator for simple Polymer 2.0 app using **Typescript** and **TWC**

`TWC` (*Typed Web Components* - see [Draccoz/twc](https://github.com/Draccoz/twc) for details) allows developers to use Typescript and decorators to create Polymer custom elements. `TWC` acts as a compiler, translating the Typescript into Polymer ES6 class based elements. There is no runtime library - everything happens in the build step.

This generator is based on the Polymer init simple application generator, of course.

## Install
First ensure you have the **Polymer CLI** installed. If not use:
```
npm i -g polymer-cli
```
Then install this package:
```
npm i -g generator-polymer-init-twc-app
```

## Use
Create a new folder for your Polymer 2.0 project, cd into that folder and run `polymer init`:
```
mkdir my-new-app-name
cd my-new-app-name
polymer init
```
Choose the **twc-app** option from the list.

## Compile Typescript
Compile typescript classes to ES6 class based Polymer 2.0 dom modules by running the `twc` command from the project's root folder.

## Serve Your App
```
polymer serve
```

## Review the TWC Wiki
Documentation on TWC can be found in the [Draccoz/twc Wiki](https://github.com/Draccoz/twc/wiki). 

## Issues
Please submit issues through github at [mlisook generator-polymer-init-twc-element issues](https://github.com/mlisook/generator-polymer-init-twc-element/issues).

## Contributions
Contributions are welcome and appreciated.

## License

MIT
