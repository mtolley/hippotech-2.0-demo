FROM amazoncorretto:11

RUN yum install -y unzip

WORKDIR /fraud
COPY fraud.jar ./fraud.jar
COPY run.sh ./run.sh
RUN chmod +x run.sh

ENV SPRING_DATASOURCE_URL=jdbc:postgresql://hippodb:5432/hippotech
ENV SPRING_DATASOURCE_USERNAME=hippotech
ENV SPRING_DATASOURCE_PASSWORD=hippotech
ENV SPRING_JPA_HIBERNATE_DDL-AUTO=update
ENV SPRING_JPA_SHOW-SQL=true
ENV SPRING_JPA_PROPERTIES_HIBERNATE_FORMAT_SQL=true
ENV SPRING_JPA_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.PostgreSQL81Dialect

CMD ["/bin/sh", "run.sh"]