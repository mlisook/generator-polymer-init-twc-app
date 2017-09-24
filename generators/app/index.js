"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const Generator = require("yeoman-generator");
class GeneratorAppTsTwc extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }
    initializing() {
        // Yeoman replaces dashes with spaces. We want dashes.
        this.appname = this.appname.replace(/\s+/g, '-');
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            const prompts = [
                {
                    name: 'name',
                    type: 'input',
                    message: `Application name`,
                    default: this.appname,
                },
                {
                    type: 'input',
                    name: 'elementName',
                    message: `Main element name`,
                    default: (answers) => `${answers.name}-app`,
                    validate: (name) => {
                        const nameContainsHyphen = name.includes('-');
                        if (!nameContainsHyphen) {
                            this.log('\nUh oh, custom elements must include a hyphen in ' +
                                'their name. Please try again.');
                        }
                        return nameContainsHyphen;
                    },
                },
                {
                    type: 'input',
                    name: 'description',
                    message: 'Brief description of the application',
                },
                {
                    type: 'list',
                    name: 'templateLocation',
                    message: 'Where do you want your HTML template?',
                    choices: [{
                            name: 'as a string value in the @template() decorator',
                            value: 'atTemplate'
                        }, {
                            name: 'in an HTML file named your-element-name.template.html',
                            value: 'inHTML'
                        }, {
                            name: 'return a value from the template() method',
                            value: 'templateFn'
                        }],
                    default: 1
                }
            ];
            this.props = yield this.prompt(prompts);
            this.props.elementClassName = this.props.elementName.replace(/(^|-)(\w)/g, (_match, _p0, p1) => p1.toUpperCase());
            this.props.templateText = `
        <style>
        :host {
          display: block;
        }
        </style>
        <h2>Hello [[prop1]]!</h2>
        `;
        });
    }
    writing() {
        const elementName = this.props.elementName;
        this.fs.copyTpl(`${this.templatePath()}/**/?(.)!(_)*`, this.destinationPath(), this.props);
        this.fs.copyTpl(this.templatePath('src/_element/_element.ts'), `src/${elementName}/${elementName}.ts`, this.props);
        this.fs.copyTpl(this.templatePath('test/_element/_element_test.html'), `test/${elementName}/${elementName}_test.html`, this.props);
        if (this.props.templateLocation == 'inHTML') {
            this.fs.copyTpl(this.templatePath('src/_element/_element.template.html'), `src/${elementName}/${elementName}.template.html`, this.props);
        }
    }
    install() {
        this.log(chalk.bold('\nProject generated!'));
        this.log('Installing dependencies...');
        this.installDependencies({
            npm: true,
            bower: true
        });
    }
    end() {
        this.log(chalk.bold('\nSetup Complete!'));
        this.log('Check out your new project README for information about what to do next.\n');
    }
}
module.exports = GeneratorAppTsTwc;
//# sourceMappingURL=index.js.map