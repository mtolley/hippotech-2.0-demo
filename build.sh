#!/bin/bash

cp ../hippotech-2.0/screenshot.png screenshot.png
cp ../hippotech-2.0/java-api/target/api.jar java-api
cp ../hippotech-2.0/hippotech-react/cypress.config.js test
cp -R ../hippotech-2.0/hippotech-react/cypress/e2e test/cypress/e2e
cp -R ../hippotech-2.0/hippotech-react/cypress/fixtures test/cypress/fixtures
cp -R ../hippotech-2.0/hippotech-react/cypress/plugins test/cypress/plugins
cp -R ../hippotech-2.0/hippotech-react/cypress/support test/cypress/support