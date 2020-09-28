#!/bin/bash -e

# Install firebase with npm
if [ $INSTALL_FIREBASE == "true" ]
then
    echo "Installing Firebase CLI"
    curl -sL https://firebase.tools | bash
else
    echo "Reusing Firebase CLI from previous steps"
fi

# Make build for publishing
if [ $BUILD_APPLICATION == "true" ]
then
    echo "Buillding the application"
    npm i
    npm run build
else
    echo "Reusing build from previous steps"
fi

# Deploy the application to firebase
firebase deploy --only hosting --token $FIREBASE_TOKEN