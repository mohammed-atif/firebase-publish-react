const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
    try {

        let hostingUrl = '';
        const options = {};
        options.listeners = {
            stdout: (data) => {
                hostingUrl = data.toString();
            }
        };

        console.log('Deploying React Application to Firebase Hosting');

        // Get the Firebase Token
        process.env.FIREBASE_TOKEN = core.getInput('firebase-token');
        process.env.INSTALL_FIREBASE = core.getInput('install-firebase');
        process.env.BUILD_APPLICATION = core.getInput('build-application');
        await exec.exec('bash ./deploy.sh', [], options);

        // Process the output to get the url
        hostingUrl = hostingUrl.substring(hostingUrl.lastIndexOf('Hosting URL: '))
        hostingUrl = hostingUrl.substring(hostingUrl.lastIndexOf('https://'))

        core.setOutput('hosting-url', hostingUrl);
        console.log('Deployment completed to Url :', hostingUrl);

    } catch (error) {
        core.setFailed('Script Failed', error.message);
    }
}

run();