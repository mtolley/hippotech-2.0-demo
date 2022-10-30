#!/bin/bash

VERSION=$(cat VERSION)

cp ../hippotech-2.0/screenshot.png screenshot.png
cp ../hippotech-2.0/java-api/target/api.jar java-api
cp ../hippotech-2.0/approval/target/approval.jar approval
cp ../hippotech-2.0/credit/target/credit.jar credit
cp ../hippotech-2.0/fraud/target/fraud.jar fraud
cp ../hippotech-2.0/blog/blog.js blog
cp ../hippotech-2.0/blog/package.json blog
cp ../hippotech-2.0/blog/package-lock.json blog
cp ../hippotech-2.0/hippotech-react/cypress.config.js test
cp ../hippotech-2.0/hippotech-react/cypress/e2e/* test/cypress/e2e
cp -R ../hippotech-2.0/hippotech-react/cypress/fixtures test/cypress/fixtures
cp -R ../hippotech-2.0/hippotech-react/cypress/plugins test/cypress/plugins
cp -R ../hippotech-2.0/hippotech-react/cypress/support test/cypress/support

cd java-api
docker build -t mtolley/hippotech-java-api:$VERSION -t mtolley/hippotech-java-api:latest .
cd ..

cd approval
docker build -t mtolley/hippotech-approval:$VERSION -t mtolley/hippotech-approval:latest .
cd ..

cd blog
docker build -t mtolley/hippotech-blog:$VERSION -t mtolley/hippotech-blog:latest .
cd ..

cd credit
docker build -t mtolley/hippotech-credit:$VERSION -t mtolley/hippotech-credit:latest .
cd ..

cd fraud
docker build -t mtolley/hippotech-fraud:$VERSION -t mtolley/hippotech-fraud:latest .
cd ..

