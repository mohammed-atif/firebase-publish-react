# Firebase Publish React
Github Action tool to publish your React Application to Firebase

## Inputs
### firebase-token
* **Required** Firebase token obtained for CI tool
* **Default**  ''
> Warning: Use of tokens and secrets are recommened using [Github Secrets](https://docs.github.com/en/free-pro-team@latest/actions/reference/encrypted-secrets)

### install-firebase
* If true, then action will use its own firebase cli. If false, reuse firebase cli from previous steps  
* **Default** true

### build-application
* If true, build application before deploying. If false, use the build directory from previous steps
* **Default** true

## Output
### hosting-url
* Firebase Hosting Url of the deployed application

## Using the action

### Directly use the action
```yaml
- uses: mohammed-atif/firebase-publish-react@v0.0.2
  with:
    firebase-token: ${{ secrets.FIREBASE_TOKEN }}
```

### Use the action with existing build or Firebase installation to save time
```yaml
- uses: mohammed-atif/firebase-publish-react@v0.0.2
  with:
    firebase-token: ${{ secrets.FIREBASE_TOKEN }}
    install-firebase: false
    build-application: false
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