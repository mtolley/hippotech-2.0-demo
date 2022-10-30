#!/bin/bash
VERSION=$(cat VERSION)

docker push mtolley/hippotech-java-api:$VERSION
docker push mtolley/hippotech-java-api:latest

docker push mtolley/hippotech-fraud:$VERSION
docker push mtolley/hippotech-fraud:latest

docker push mtolley/hippotech-approval:$VERSION
docker push mtolley/hippotech-approval:latest

docker push mtolley/hippotech-credit:$VERSION
docker push mtolley/hippotech-credit:latest

docker push mtolley/hippotech-blog:$VERSION
docker push mtolley/hippotech-blog:latest
