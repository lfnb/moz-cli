const inquirer = require('inquirer');
const path = require('path');
let download = require('download-git-repo');
const { promisify } = require('util');

const { fnLoadingByOra } = require('./utils/common');

// download = promisify(download);

const choise = {
    'h5': 'direct:https://github.com/lfnb/h5-tpl.git#main',
    'pc': 'direct:https://github.com/lfnb/pc-tpl.git#main',
}

module.exports = async (projectName) => {
    //是否存在当前目录
    const cwd = process.cwd();
    const inCurrent = projectName === '.';
    const name = inCurrent ? path.relative('../', cwd) : projectName;
    const targetDir = path.relative(cwd, name);
    
    const { repo } = await inquirer.prompt([
        {
            type: 'list',
            name: 'repo',
            message: '请选择一个要创建的项目',
            choices: Reflect.ownKeys(choise),
        }
    ])

    const gitPath = choise[repo];
    // console.log('targetDir', targetDir);
    // return;
    download(gitPath, targetDir,{clone: true}, () => {
        console.log('ss');
    });
}