FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install && npm install -g @angular/cli
RUN apk update && apk add bash
RUN apk --no-cache add curl
ENTRYPOINT ["ng","serve","--host","0.0.0.0"]
