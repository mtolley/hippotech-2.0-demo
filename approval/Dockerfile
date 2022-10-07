FROM amazoncorretto:11

RUN yum install -y unzip

WORKDIR /approval
COPY approval.jar ./approval.jar
COPY run.sh ./run.sh
RUN chmod +x run.sh

CMD ["/bin/sh", "run.sh"]