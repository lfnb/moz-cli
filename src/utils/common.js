const ora = require('ora');

const fnLoadingByOra = async (fn, message) => {
    const spinner = ora(message);
    spinner.start();
    let result = await fn();
    spinner.succeed();
    return result;
}

const mapActions = {
    create: {
        alias: 'c',
        description: '创建一个项目',
        examples: [
            'moz create <project-name>'
        ]
    },
    config: {
        alias: 'conf',
        description: 'config project variable',
        examples: [
            'moz config set <k> <v>',
            'moz config get <k>',
        ]
    },
    '*': {
        alias: '',
        description: 'command not found',
        examples: []
    },
};

module.exports = {
    mapActions,
    fnLoadingByOra,
}