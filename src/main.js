const program = require('commander');
const path = require('path');

const { version } = require('./utils/constant');
const { mapActions } = require('./utils/common');

Reflect.ownKeys(mapActions).map(key => {
    const action = mapActions[key];
    program.command(key)
        .alias(action.alias)
        .description(action.description)
        .action(() => {
            if(key === '*') {
                console.log(action.description);
            }
            else {
                require(path.join(__dirname, `${key}`))(...process.argv.slice(3));
            }
        })
});

program.on('--help', () => {
    console.log('\nExamples:');
    Reflect.ownKeys(mapActions).map(key => {
        const action = mapActions[key];
        action.examples.map(example => {
            console.log(`${example}`)
        })
    })
})

program.version(version)
    .parse(process.argv);