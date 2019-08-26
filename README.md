`gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511`

`kubectl cluster-info`kubectl get namespace`

`kubectl create ns tarsidi`

`helm init`

`kubectl -n kube-system create sa tiller`

`kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller`

`helm init --service-account tiller`

`helm ls`

`helm reset`

`kubectl create serviceaccount --namespace kube-system tiller`

`kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller`

`kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'`

`helm init --service-account tiller --upgrade`

`helm version`

`helm ls`

`helm install stable/mysql --version 1.3.1 --namespace tarsidi --set mysqlRootPassword=root,mysqlDatabase=tarsidi`

`kubectl get pods -n tarsidi`

`kubectl describe pods nihilist-gnat-mysql-5549998f86-t9bbk -n tarsidi`

`kubectl get pods -n tarsidi`

`helm ls`

`kubectl get svc -n tarsidi`

`helm search elastic`

`helm install -n cd stable/jenkins -f jenkins/values.yaml --version 1.2.2 --wait`

`git clone https://github.com/sidie88/kubernetes-service.git`

`cd kubernetes-service/`

`cd rnd-angular7/`

`nano Dockerfile`

`docker images`

`nano Dockerfile`

`docker search openjdk`

`cd ~`

`cd service-discovery-in-kubernetes/`

`cd currency-exchange-service/`

`cat Dockerfile `

`cd ~`

`cd kubernetes-service/`

`cd rnd-angular7/`

`cd ../`

`cd rnd-angular7/`

`nano Dockerfile `

`docker image build -t sidie88/backend-service:java .`

`kubectl get svc -n tarsidi`

`docker images`

`docker image prune`

`docker login`

`docker images`

`docker push sidie88/backend-service:java`

`kubectl apply -f backend-service.yaml `

`kubectl get pods -n tarsidi`

`kubectl logs --follow backend-app-pod-8b5ccc88c-bft6r -n tarsidi`

`kubectl apply -f backend-service.yaml `

`cd ../`

`cd angular-rnd/`

`cat Dockerfile `

`docker image build -t sidie88/frontend:angular .`

`kubectl get services -n tarsidi`

`docker image build -t sidie88/frontend:angular .`

`docker push sidie88/frontend:angular`

`kubectl apply -f frontend.yaml `

`kubectl get pods -n tarsidi`

`kubectl apply -f frontend.yaml `

`kubectl get pods -n tarsidi`

`kubectl describe pods frontend-app-pod-d997b8b98-x8nvq -n tarsidi`

`kubectl get pods -n tarsidi`

`kubectl logs --follow frontend-app-pod-d997b8b98-x8nvq -n tarsidi`

`cd kubernetes-service/`

`git add .`

`git commit`

`git commit -m "update deployment kubernetes"`

`git config --global user.email "sidie88@gmail.com"`

`git config --global user.name "sidie88"`

`git commit -m "update deployment kubernetes"`

`git push origin/master`

`git push origin master`

`history >  command-kubernetes-angular-java.txt`
