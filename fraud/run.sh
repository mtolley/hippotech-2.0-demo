#!/bin/sh
 
# Configure basic Java options for your application
JAVA_OPTS="-Xmx512m"
 
# Deploy the Seeker Java Agent
if [ ! -z "${ACTIVATE_SEEKER}" ];
then
    export SEEKER_PROJECT_KEY=${SEEKER_COMPOSITE_PROJECT_KEY}-FRAUD
    # Download the Agent package
    curl -k -o /tmp/seeker-agent.zip "${SEEKER_SERVER_URL}/rest/api/latest/installers/agents/binaries/JAVA"
    # Unzip the Agent package
    unzip -d /tmp/seeker /tmp/seeker-agent.zip
    # Append the Seeker options to the JVM options
    JAVA_OPTS="-javaagent:/tmp/seeker/seeker-agent.jar ${JAVA_OPTS}"
fi
 
# Run the application
java ${JAVA_OPTS} -jar fraud.jar