## Create Namespace

`kubectl create ns tarsidi`

## Starting Helm
`helm init --client-only`

### Check Helm 
`helm version`

`helm ls`

## Install mysql server
`helm install stable/mysql --version 1.3.1 --namespace tarsidi --set mysqlRootPassword=root,mysqlDatabase=tarsidi`

`kubectl get pods -n tarsidi`

`kubectl describe pods nihilist-gnat-mysql-5549998f86-t9bbk -n tarsidi`

`kubectl get pods -n tarsidi`

`helm ls`

`kubectl get svc -n tarsidi`

## Clone source code
`git clone https://github.com/sidie88/kubernetes-service.git`

## Build backend docker file
`cd kubernetes-service/`

`cd rnd-angular7/`

`nano Dockerfile`

`docker images`

`nano Dockerfile`

`docker image build -t sidie88/backend-service:java .`

`kubectl get svc -n tarsidi`

`docker image prune`

## Push backend image to docker hub

`docker login`

`docker push sidie88/backend-service:java`

## Deploy image to kubernetes cluster

`kubectl apply -f backend-service.yaml `

## Check log file on pod

`kubectl get pods -n tarsidi`

`kubectl logs --follow backend-app-pod-8b5ccc88c-bft6r -n tarsidi`

## Build frontend docker file

`cd ../`

`cd angular-rnd/`

`cat Dockerfile `

`docker image build -t sidie88/frontend:angular .`

## Push frontend image to docker hub

`docker push sidie88/frontend:angular`

`kubectl apply -f frontend.yaml `

`kubectl get pods -n tarsidi`

## Deploy image to kubernetes cluster

`kubectl apply -f frontend.yaml `

## Check log file on pod

`kubectl get pods -n tarsidi`

`kubectl describe pods frontend-app-pod-d997b8b98-x8nvq -n tarsidi`

## Commit and push code to github

`cd kubernetes-service/`

`git add .`

`git commit`

`git commit -m "update deployment kubernetes"`

`git config --global user.email "sidie88@gmail.com"`

`git config --global user.name "sidie88"`

`git commit -m "update deployment kubernetes"`

`git push origin/master`

`git push origin master`
