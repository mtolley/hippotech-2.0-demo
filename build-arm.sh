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
docker build -t mtolley/hippotech-java-api-arm:$VERSION -t mtolley/hippotech-java-api-arm:latest .
cd ..

cd approval
docker build -t mtolley/hippotech-approval-arm:$VERSION -t mtolley/hippotech-approval-arm:latest .
cd ..

cd blog
docker build -t mtolley/hippotech-blog-arm:$VERSION -t mtolley/hippotech-blog-arm:latest .
cd ..

cd credit
docker build -t mtolley/hippotech-credit-arm:$VERSION -t mtolley/hippotech-credit-arm:latest .
cd ..

cd fraud
docker build -t mtolley/hippotech-fraud-arm:$VERSION -t mtolley/hippotech-fraud-arm:latest .
cd ..

