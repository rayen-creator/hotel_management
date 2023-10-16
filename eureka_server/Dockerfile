 FROM openjdk:8
 EXPOSE 8761
 ADD target/eureka_server-0.0.1-SNAPSHOT.jar eureka_server-0.0.1.jar
 ENTRYPOINT ["java", "-jar","eureka_server-0.0.1.jar"]

#FROM maven:3.8.2-jdk-8
#
#WORKDIR /eureka_server
#COPY . .
#RUN mvn clean install
#
#CMD mvn spring-boot:run