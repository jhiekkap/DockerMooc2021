const readline = require('readline');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
    return new Promise((resolve, reject) => {
        readlineInterface.question(questionText, resolve);
    });
}

const execute = async (command) => {
    try {
        const { stdout, stderr } = await exec(command);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    } catch (err) {
        console.error(err);
    };
}

const command = (repo) => {
    const folder = repo.split('/').splice(-1)[0];
    const cloneGit = `git clone ${repo}`;
    const dockerFileRows = [
        'FROM node:latest',
        'WORKDIR /mydir',
        'EXPOSE 5000',
        'COPY . .',
        'RUN npm install',
        'RUN npm run build',
        'RUN npm install -g serve',
        'CMD ["serve", "-s", "-l", "5000", "build"]',
    ];
    const createDockerfile = `printf '${dockerFileRows.join('\n')}' > Dockerfile`;
    const dockerBuild = `cd ${folder} && docker build . -t jhiekkap/mirror`;
    const dockerRun = 'docker run -p 5000:5000 mirror';
    const dockerPush = 'docker push jhiekkap/mirror';
    return `${cloneGit} && ${createDockerfile} && mv Dockerfile ${folder} && ${dockerBuild} && ${dockerRun} && ${dockerPush}`;
}

async function start() {
    let repo = await ask('Github repo: ');
    if (repo && repo.includes('https://github.com/')) {
        execute(command(repo));
    }
    //  process.exit();
}

start();
// https://github.com/jhiekkap/singers-mirror