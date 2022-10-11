#!/bin/sh
 
# Deploy the Seeker Java Agent
if [ ! -z "${SEEKER_SERVER_URL}" ];
then
    export SEEKER_PROJECT_KEY=${SEEKER_COMPOSITE_PROJECT_KEY}-BLOG
    # Download the Agent package
    curl -k -o /tmp/seeker-agent.tar.gz "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/NODEJS?osFamily=LINUX"
    #curl -k -o /tmp/seeker-agent.tar.gz "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/NODEJS?projectKey=YYYY-BLOG&compositeProjectKey=YYYY&flavor=DEFAULT&osFamily=LINUX"
    # Unzip the Agent package
    #unzip -d /tmp/seeker /tmp/seeker-agent.zip
    tar xvf /tmp/seeker-agent.tar.gz
    # Append the Seeker options to the JVM options   
fi
 
# Run the application
#java ${JAVA_OPTS} -jar api.jar
npm start