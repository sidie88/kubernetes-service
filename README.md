    1  kubectl get nodes
    2  gcloud container clusters get-credentials standard-cluster-1 --zone asia-southeast1-a --project microservices-248511
    3  kubectl get nodes
    4  gcloud container clusters get-credentials standard-cluster-1 --zone asia-southeast1-a --project microservices-248511
    5  git clone https://github.com/sidie88/service-discovery-in-kubernetes.git
    6  ld
    7  ls
    8  cd service-discovery-in-kubernetes/
    9  ls
   10  cd maven-base-image/
   11  ls
   12  cat Dockerfile 
   13  docker image build -t maven-base:v1 .
   14  docker image tag maven-base:v1 sidie88/maven-base:v1
   15  docker image ls
   16  docker login
   17  docker push sidie88/maven-base:v1
   18  cd ../currency-exchange-service/
   19  ls
   20  nano Dockerfile 
   21  cat Dockerfile 
   22  docker image build -t currency-exchange-service:v1 .
   23  docker image ls
   24  cat Dockerfile 
   25  docker image prune
   26  docker image ls
   27  docker image tag currency-exchange-service:v1 sidie88/currency-exchange-service:v1
   28  docker image ls
   29  docker push sidie88/currency-exchange-service:v1
   30  history
   31  la
   32  ls
   33  nano currency-exchange-sevice.yaml 
   34  kubectl apply -f currency-exchange-sevice.yaml 
   35  nano currency-exchange-sevice.yaml 
   36  kubectl create namespace tarsidi
   37  kubectl apply -f currency-exchange-sevice.yaml 
   38  kubectl get pods
   39  kubectl get pods -n tarsidi
   40  kubectl get pods --all-namespace
   41  kubectl get pods --all-namespaces
   42  clearr
   43  clear
   44  kubectl get all -n tarsidi
   45  kubectl get pods -n tarsidi
   46  kubectl get services -n tarsidi
   47  kubectl describe svc currency-exchange-services -n tarsidi
   48  kubectl get services -n tarsidi
   49  nano currency-exchange-sevice.yaml 
   50  kubectl apply -f currency-exchange-sevice.yaml 
   51  kubectl get services -n tarsidi
   52  kubectl get services -n tarsidi --watch
   53  history
   54  history >> command.txt
   55  gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511
   56  git clone https://github.com/sidie88/service-discovery-in-kubernetes.git
   57  ls
   58  cd service-discovery-in-kubernetes/
   59  nano distributed-tracing/zipkin.yaml 
   60  git fecth
   61  git fetch
   62  git rebase origin/master
   63  nano distributed-tracing/zipkin.yaml 
   64  git login
   65  clear
   66  cd ../
   67  rmdir -rf service-discovery-in-kubernetes/
   68  rm -rf service-discovery-in-kubernetes/
   69  ls
   70  git clone https://github.com/sidie88/service-discovery-in-kubernetes.git
   71  cd service-discovery-in-kubernetes/
   72  nano distributed-tracing/zipkin.yaml 
   73  kubectl apply -f distributed-tracing/rabbitmq.yaml 
   74  kubect create ns tarsidi
   75  kubectl create ns tarsidi
   76  kubectl apply -f distributed-tracing/rabbitmq.yaml 
   77  kubectl apply -f distributed-tracing/zipkin.yaml 
   78  kubectl get pods -n tarsidi
   79  kubectl logs --follow zipkin-pod-5cd998d46c-cpggj
   80  kubectl logs --follow zipkin-pod-5cd998d46c-cpggj -n tarsidi
   81  kubectl get pods -n tarsidi
   82  clear
   83  kubectl apply -f currency-exchange-service/currency-exchange-sevice.yaml 
   84  kubectl get pods -n tarsidi
   85  kubectl logs --follow currency-exchange-pod-558bdc6c66-dg97b -n tarsidi
   86  nano currency-exchange-service/currency-exchange-sevice.yaml 
   87  git fetch
   88  nano currency-exchange-service/src/main/resources/logback.xml 
   89  git rebase origin/master
   90  nano currency-exchange-service/src/main/resources/logback.xml 
   91  cd currency-exchange-service/
   92  docker image build -t sidie88/currency-exchange-service:v2 .
   93  docker login
   94  docker images
   95  cd ../maven-base-image/
   96  docker image build -t maven-base:v1 .
   97  cd ../currency-exchange-service/
   98  docker image build -t sidie88/currency-exchange-service:v2 .
   99  kubectl get deployments -n tarsidi
  100  kubectl --record deployment.apps/currency-exchange-pod  set image deployment.v1.apps/currency-exchange-pod currency-exchange=sidie88/currency-exchange-sevice:v2 –n tarsidi
  101  kubectl --record deployment.apps/currency-exchange-pod -n tarsidi  set image deployment.v1.apps/currency-exchange-pod currency-exchange=sidie88/currency-exchange-sevice:v2
  102  kubectl rollout status deployment.v1.apps/currency-exchange-pod –n tarsidi
  103  kubectl rollout status deployment.v1.apps/currency-exchange-pod
  104  kubectl rollout status deployment.v1.apps/currency-exchange-pod -n tarsidi
  105  kubectl get pods -n tarsidi
  106  kubectl describe pods currency-exchange-pod-558bdc6c66-dg97b -n tarsidi
  107  kubectl logs --follow currency-exchange-pod-558bdc6c66-dg97b -n tarsidi
  108  nano currency-exchange-sevice.yaml 
  109  kubectl get pods -n tarsidi
  110  docker images
  111  docker image prune
  112  docker image push sidie88/currency-exchange-service
  113  kubectl get pods -n tarsidi
  114  docker image push sidie88/currency-exchange-service:v2
  115  kubectl get pods -n tarsidi
  116  nano currency-exchange-sevice.yaml 
  117  kubectl apply -f currency-exchange-sevice.yaml 
  118  clear
  119  kubectl get pods -n tarsidi
  120  kubectl logs follow currency-exchange-pod-6f484556c8-cs2wx -n tarsidi
  121  kubectl logs --follow currency-exchange-pod-6f484556c8-cs2wx -n tarsidi
  122   gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511  && echo "# When the next line says 'Forwarding from...', go to: https://ssh.cloud.google.com/devshell/proxy?port=8080" && kubectl port-forward --namespace tarsidi $(kubectl get pod --namespace tarsidi --selector="app=rabbitmq" --output jsonpath='{.items[0].metadata.name}') 8080:15672
  123  kubectl get pods -n tarsidi
  124  kubectl get services -n tarsidi
  125  kubectl logs --follow currency-exchange-pod-6f484556c8-cs2wx -n tarsidi
  126  clear
  127  ls
  128  kubectl apply -f service-discovery-in-kubernetes/currency-conversion-service/currency-conversion-sevice.yaml 
  129  kubectl get pods -n tarsidi
  130  kubectl logs --follow currency-conversion-pod-7ccfdf57d9-g47n9  -n tarsidi
  131  kubectl apply -f service-discovery-in-kubernetes/spring-api-gateway-server/spring-api-gateway-server.yaml 
  132  gcloud sql connect mysql --user=root --quiet
  133  gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511
  134  kubectl cluster-info
  135  helm
  136  helm search postgresql
  137  helm init --client-only
  138  helm search postgre
  139  helm inspect table/postgresql
  140  helm inspect stable/postgresql
  141  kubectl get namespace
  142  kubectl create ns tarsidi
  143  helm install stable/mysql --version 1.3.1 --namespace tarsidi --set mysqlRootPassword=root,mysqlDatabase=tarsidi
  144  kubectl get pods -n kube-system
  145  helm init --tiller-namespace tarsidi
  146  helm ls
  147  kubectl get pods -n tarsidi
  148  helm ls
  149  helm ls -n tarsidi
  150  helm init
  151  helm version
  152  helm ls
  153  kubectl -n kube-system create sa tiller
  154  kubectl create clusterrolebinding tiller --clusterrole cluster-admin --serviceaccount=kube-system:tiller
  155  helm init --service-account tiller
  156  helm ls
  157  helm reset
  158  kubectl create serviceaccount --namespace kube-system tiller
  159  kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
  160  kubectl patch deploy --namespace kube-system tiller-deploy -p '{"spec":{"template":{"spec":{"serviceAccount":"tiller"}}}}'
  161  helm init --service-account tiller --upgrade
  162  helm version
  163  helm ls
  164  clear
  165  helm ls
  166  helm install stable/mysql --version 1.3.1 --namespace tarsidi --set mysqlRootPassword=root,mysqlDatabase=tarsidi
  167  kubectl get pods -n tarsidi
  168  kubectl describe pods nihilist-gnat-mysql-5549998f86-t9bbk -n tarsidi
  169  kubectl get pods -n tarsidi
  170  helm ls
  171  kubectl get svc -n tarsidi
  172  helm search elastic
  173  helm install -n cd stable/jenkins -f jenkins/values.yaml --version 1.2.2 --wait
  174  ls
  175  git clone https://github.com/sidie88/kubernetes-service.git
  176  ls
  177  cd kubernetes-service/
  178  clera
  179  clear
  180  ll
  181  cd rnd-angular7/
  182  clear
  183  ls
  184  ll
  185  nano Dockerfile
  186  docker images
  187  nano Dockerfile
  188  docker search openjdk
  189  cd ~
  190  ls
  191  cd service-discovery-in-kubernetes/
  192  ls
  193  cd currency-exchange-service/
  194  ls
  195  cat Dockerfile 
  196  cd ~
  197  cd kubernetes-service/
  198  cd rnd-angular7/
  199  cd ../
  200  ls
  201  cd rnd-angular7/
  202  clear
  203  ll
  204  nano Dockerfile 
  205  docker image build -t sidie88/backend-service:java .
  206  kubectl get svc -n tarsidi
  207  docker images
  208  docker image prune
  209  clear
  210  docker login
  211  docker images
  212  docker push sidie88/backend-service:java
  213  kubectl apply -f backend-service.yaml 
  214  kubectl get pods -n tarsidi
  215  kubectl logs --follow backend-app-pod-8b5ccc88c-bft6r -n tarsidi
  216  kubectl apply -f backend-service.yaml 
  217  cd ../
  218  cd angular-rnd/
  219  clear
  220  ll
  221  cat Dockerfile 
  222  docker image build -t sidie88/frontend:angular .
  223  kubectl get services -n tarsidi
  224  docker image build -t sidie88/frontend:angular .
  225   gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511  && echo "# When the next line says 'Forwarding from...', go to: https://ssh.cloud.google.com/devshell/proxy?port=8080" && kubectl port-forward --namespace tarsidi $(kubectl get pod --namespace tarsidi --selector="app=backend-app" --output jsonpath='{.items[0].metadata.name}') 8080:8080
  226  docker push sidie88/frontend:angular
  227  LL
  228  ll
  229  kubectl apply -f frontend.yaml 
  230  kubectl get pods -n tarsidi
  231  kubectl apply -f frontend.yaml 
  232  kubectl get pods -n tarsidi
  233  kubectl describe pods frontend-app-pod-d997b8b98-x8nvq -n tarsidi
  234  kubectl get pods -n tarsidi
  235  kubectl logs --follow frontend-app-pod-d997b8b98-x8nvq -n tarsidi
  236   gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511  && echo "# When the next line says 'Forwarding from...', go to: https://ssh.cloud.google.com/devshell/proxy?port=8080" && kubectl port-forward --namespace tarsidi $(kubectl get pod --namespace tarsidi --selector="app=frontend-app" --output jsonpath='{.items[0].metadata.name}') 8080:4200
  237  gcloud container clusters get-credentials standard-cluster-1 --zone us-central1-a --project microservices-248511
  238  ls
  239  cd kubernetes-service/
  240  git add .
  241  git commit
  242  git commit -m "update deployment kubernetes"
  243  git config --global user.email "sidie88@gmail.com"
  244  git config --global user.name "sidie88"
  245  git commit -m "update deployment kubernetes"
  246  git push origin/master
  247  git push origin master
  248  history >  command-kubernetes-angular-java.txt
