# Firebase Publish React
Github Action tool to publish your React Application to Firebase

## Inputs

| key               | required | default | description                         | example            |
|-------------------|----------|---------|-------------------------------------|--------------------|
| firebase-token    | yes      | ""	     | Firebase token obtained for CI tool | 1//abscdsomesecret |
| install-firebase  | no	   | TRUE    | If true, then action will use its own firebase cli.<br>If false, reuse firebase cli from previous steps. | TRUE |
| build-application | no	   | TRUE	 | If true, build application before deploying.<br>If false, use the build directory from previous steps. | TRUE |

## Outputs

| key              | description                                      | example              |
|------------------|--------------------------------------------------|----------------------|
| hosting-url      | Firebase Hosting Url of the deployed application | https://firebase.app |

## Using the action

### Directly use the action
```yaml
- name: Deploy to Firebase
  uses: mohammed-atif/firebase-publish-react@v1.0
  with:
    firebase-token: ${{ secrets.FIREBASE_TOKEN }}
```

### Use the action with existing build or Firebase installation to save time
```yaml
- uses: mohammed-atif/firebase-publish-react@v1.0
  with:
    firebase-token: ${{ secrets.FIREBASE_TOKEN }}
    install-firebase: false
    build-application: false
```

### Passing environment variables to build the React application
```yaml
- uses: mohammed-atif/firebase-publish-react@v1.0
  with:
    firebase-token: ${{ secrets.FIREBASE_TOKEN }}
  env:
    REACT_APP_KEY1: "Key value 1"
    REACT_APP_KEY2: "Key value 2"
    REACT_APP_KEY3: "Key value 3" 
```
#### Reserved environment variables for action step
* FIREBASE_TOKEN
* INSTALL_FIREBASE
* BUILD_APPLICATION

### Full workflow example to demonstrate the use of url output
```yaml
name: Deploy to Firebase

on:
  push:
    tags:
      - firebase-*

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
      - name: Deploy to firebase
        id: firebase-deploy
        uses: mohammed-atif/firebase-publish-react@v1.0
        with:
          firebase-token: ${{ secrets.FIREBASE_TOKEN }}
      - name: Verify Output
        run: echo ${{ steps.firebase-deploy.outputs.hosting-url }}
```

### To obtain the firebase token for CI System : [Refer](https://firebase.google.com/docs/cli#cli-ci-systems)
```bash
firebase login:ci
```

# Setup Firebase in React Application

Refer: [Firebase QuickStart](https://firebase.google.com/docs/hosting/quickstart)

## Initialize your project with Firebase

```bash
firbase login
firebase init
```

* Choose the hosting option from the list
* Choose or Create a new Application
* Set the build folder according to your setup
* COmplete the setup


# Collaborations
* Contributions Welcome
* Feel free to report a bug or request a feature
* Need jumpstart to contribute? Refer [Actions with Javascript](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/creating-a-javascript-action)