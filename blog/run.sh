#!/bin/sh
 
# Deploy the Seeker Node.js Agent (if enabled by environment variable)
if [ ! -z "${ACTIVATE_SEEKER}" ];
then
    export SEEKER_PROJECT_KEY=${SEEKER_COMPOSITE_PROJECT_KEY}-BLOG
    # Download the Agent package
    #curl -k -o /tmp/seeker-agent.zip "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/NODEJS?osFamily=LINUX"
    #curl -k -o /tmp/seeker-agent.tar.gz "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/NODEJS?projectKey=YYYY-BLOG&compositeProjectKey=YYYY&flavor=DEFAULT&osFamily=LINUX"
    # Unzip the Agent package
    #unzip -d /tmp/seeker /tmp/seeker-agent.zip
    npm install --strict-ssl=false --prefix seeker "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/NODEJS?projectKey=${SEEKER_PROJECT_KEY}&flavor=TARGZ"
    ls /tmp/seeker
    ls node_modules
    node -r './seeker/node_modules/@synopsys-sig/seeker' blog.js
fi
 
node blog.js