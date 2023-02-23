#!/bin/bash
VERSION=$(cat VERSION)

docker push mtolley/hippotech-java-api-arm:$VERSION
docker push mtolley/hippotech-java-api-arm:latest

docker push mtolley/hippotech-fraud-arm:$VERSION
docker push mtolley/hippotech-fraud-arm:latest

docker push mtolley/hippotech-approval-arm:$VERSION
docker push mtolley/hippotech-approval-arm:latest

docker push mtolley/hippotech-credit-arm:$VERSION
docker push mtolley/hippotech-credit-arm:latest

docker push mtolley/hippotech-blog-arm:$VERSION
docker push mtolley/hippotech-blog-arm:latest
