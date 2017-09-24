import * as chalk from 'chalk';
import * as path from 'path';
import Generator = require('yeoman-generator');

class GeneratorAppTsTwc extends Generator {

    props: any;

    constructor(args: string | string[], opts: any) {
        super(args, opts);
    }

    initializing() {
        // Yeoman replaces dashes with spaces. We want dashes.
        this.appname = this.appname.replace(/\s+/g, '-');
    }

    async prompting(): Promise<void> {
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
                default: (answers: any) => `${answers.name}-app`,
                validate: (name: string) => {
                    const nameContainsHyphen = name.includes('-');
                    if (!nameContainsHyphen) {
                        this.log(
                            '\nUh oh, custom elements must include a hyphen in ' +
                            'their name. Please try again.');
                    }
                    return nameContainsHyphen;
                },
            },
            {
                type: 'input',
                name: 'description',
                message: 'Brief description of the application',
            }
        ];

        this.props = await this.prompt(prompts);
        this.props.elementClassName = this.props.elementName.replace(
            /(^|-)(\w)/g,
            (_match: string, _p0: string, p1: string) => p1.toUpperCase());
    }

    writing() {
        const elementName = this.props.elementName;

        this.fs.copyTpl(
            `${this.templatePath()}/**/?(.)!(_)*`,
            this.destinationPath(),
            this.props);

        this.fs.copyTpl(
            this.templatePath('src/_element/_element.ts'),
            `src/${elementName}/${elementName}.ts`,
            this.props);

        this.fs.copyTpl(
            this.templatePath('test/_element/_element_test.html'),
            `test/${elementName}/${elementName}_test.html`,
            this.props);
    }

    install() {
        this.log(chalk.bold('\nProject generated!'));
        this.log('Installing dependencies...');
        this.installDependencies({
            npm: false,
        });
    }

    end() {
        this.log(chalk.bold('\nSetup Complete!'));
        this.log(
            'Check out your new project README for information about what to do next.\n');
    }
}

module.exports = GeneratorAppTsTwc;