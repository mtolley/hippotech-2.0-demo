FROM amazoncorretto:11

WORKDIR /java-api
COPY api.jar ./api.jar
COPY run.sh ./run.sh
RUN chmod +x run.sh

CMD ["/bin/sh", "run.sh"]