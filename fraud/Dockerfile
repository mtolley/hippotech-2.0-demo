FROM amazoncorretto:11

RUN yum install -y unzip

WORKDIR /fraud
COPY fraud.jar ./fraud.jar
COPY run.sh ./run.sh
RUN chmod +x run.sh

CMD ["/bin/sh", "run.sh"]