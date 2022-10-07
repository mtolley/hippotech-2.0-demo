FROM amazoncorretto:11

RUN yum install -y unzip

WORKDIR /java-api
COPY api.jar ./api.jar
COPY run.sh ./run.sh
RUN chmod +x run.sh

CMD ["/bin/sh", "run.sh"]