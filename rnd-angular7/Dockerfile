FROM maven:3.6.1-jdk-8-slim  AS build
COPY . /app
WORKDIR /app
RUN mvn install -Dmaven.test.skip=true
FROM openjdk:8u212-jdk-alpine3.9
RUN apk update && apk add bash
RUN apk --no-cache add curl
WORKDIR /usr/src/app
COPY --from=build /app/target/rnd-angular7-0.0.1-SNAPSHOT.jar /usr/src/app/app.jar
ENTRYPOINT ["java","-jar","/usr/src/app/app.jar"]
