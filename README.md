# HippoTech 2.0 - Intentionally Vulnerable App & API

HippoTech is a fake, online mortgage service full of the worst kinds of security vulnerabilities you can imagine...and then some! It is designed for application security training and you should run it carefully, in private, and **never expose it on the network or internet** because it is dangerously vulnerable.

Questions? Comments? Hit the author up (gently) at <mtolley@synopsys.com>. 

## The Tech Stack

HippoTech 2.0 is a Single Page Application (SPA) written in React/JavaScript. The SPA reaches out to an API server with an OpenAPI, RESTish interface, which is currently implemented in Java. Here's a glimpse of what you have to look forward to:

![HippoTech screenshot](screenshot.png)

There are end-to-end automated tests written using the excellent **[Cypress](https://cypress.io)** testing framework. This author does not enjoy testing asynchronous client-side code, but thankfully Cypress makes it much easier.

## Up And Running: The Monolithic Version

It's a Java application so you'll need a JVM (Java 11 or later). Just grab the latest release from https://github.com/mtolley/hippotech-2.0-demo/releases/latest/download/api.jar and run: 

`java -jar api.jar`

This will serve the entire application (the API back-end and the React frontend) locally on port 3001. The port number is pretty much hard-wired today so if that doesn't work out for you, unfortunately, you will need to *make* it work. Sorry about that. 

Make sure it's up and running on <http://localhost:3001>.

## Up And Running: The Microservices Version

### Docker Compose

You can easily run a distributed, microservices version of the same application with Docker Compose. The functionality is identical, but there are multiple "microservices" behind the scenes communicating over HTTP and Kafka queues. You will need to:

1. Clone this repository.
2. Launch the microservices version of the application with Docker Compose

```
git clone https://github.com/mtolley/hippotech-2.0-demo.git
cd hippotech-2.0-demo
docker-compose up
```

Just like the monolithic version, the front end will be accessible on <http://localhost:3001>.

### Kubernetes

You will find all the necessary Kubernetes resources as YAML files under `./k8s`. You will need a working Kubernetes cluster and be able to run `kubectl` commands to follow these instructions. They have been tested on the local Kubernetes environment that comes with Docker Desktop, but should be portable to any Kubernetes implementation.

In this example we create and us a Kubernetes namespace called "hippo123" - just replace this with the namepsace you choose to use.

```
cd k8s
kubectl create namespace hippo123
kubectl -n hippo123 apply -f .
```

That will deploy all the resources in the `k8s` directory to your Kubernetes cluster in the specified namespace you can check that the pods are up and running with `kubectl get pods -n hippo123`:

```
% kubectl get pods -n hippo123
NAME                         READY   STATUS    RESTARTS   AGE
approval-854bdffbf6-9mklk    1/1     Running   0          8s
blog-646c77f5c-cgn5w         1/1     Running   0          8s
credit-546c8864fd-fw7rr      1/1     Running   0          8s
fraud-59759b55d9-4fm2p       1/1     Running   0          8s
java-api-6db8d59f48-r79fd    1/1     Running   0          8s
kafka-5dcfc99d7f-5fllt       1/1     Running   0          8s
mongo-757874cc59-g8hrq       1/1     Running   0          8s
zookeeper-56799b45d5-q7sws   1/1     Running   0          7s
```

This is running exactly the same set of services as above in Docker Compose: the only difference is that they are deployed in a Kubernetes cluster. However, at this point there is no way to access the HippoTech application that is running on the cluster. To do this quickly you can set up port forwarding with the following command:

```
kubectl -n hippo123 port-forward services/java-api-svc 3001
```

Now you should be able to point your browser at `http://localhost:3001` and see the HippoTech UI as normal.

#### Uninstalling from the Kubernetes cluster

When you're ready to remove your deployment of HippoTech you can run:

```
kubectl delete -f . -n hippo123
```

and all of the deployed resouces will be removed from the specified namespace.

## Logging In

There are instructions in the user interface on the login page, but not everybody sees 'em so:

Username: siguser@synopsys.com
Password: password

## Features

### Apply for an Agreement In Principle

This is the core workflow in HippoTech. Hit **GET ME A MORTGAGE**, log in if you haven't already, and you will get a short wizard asking you some questions about the property you wish to buy, payment details for a $1 USD fee, etc. The only real validation is on the purchase price and the amount you wish to borrow. HippoTech processes mortgages from $200k to $1M USD, so the purchase price will need to be in that range. HippoTech does not process loans of less than $100k, so the amount-to-borrow needs to be in the $100-900k range. And less than the value of the property, of course!

One you complete the application, your new request for consideration will be visible in My Mortgages.

### My Mortgages

Click on the burger icon on the top left and you will see My Mortgages. If you navigate to this feature you will see a list of all mortgage applications you have previously made - a couple have already been seeded - and view the history of those applications including any relevant events. You also have the opportunity to withdraw an application that you have previously made.

### The Blog

Click on the burger icon on the top left and you will see a link to the Blog. 

#### Subscription

There's a **SUBSCRIBE** button on the Blog home page: this will give you the opportunity to add your email address to the distribution list. This is entirely theoretic - no emails will be sent.

#### The Stories

There are three blog posts, of which you can see a summary on the Blog home page. If you click **continue reading** you will be taken to the full blog post.

#### Comments

Once you navigate to the full blog post, you will see any comments that have been left on that post by HippoTech's highly-engaged customer community. If you're logged in, you will also have the opportunity to leave your own comments. But please keep them respectful!

### Fraud checks

HippoTech's Fraud department keep a close eye on incoming requests. Fraud Agents use http://localhost:4004/fraudreporting to view recent suspicious requests from the general public. This is pretty much read-only for the moment: you can't actually do anything here other than view the flagged requests, which is all of them.

## Automated Functional Testing

HippoTech 2.0 comes with a suite of end-to-end tests using the **[Cypress](https://cypress.io)** testing framework. The tests can be run headless (without the UI) or interactively (a browser will pop up and you'll see the automated tests running live). 

### Dependencies

You will need Node.js v16 or later to install and run Cypress. Cypress does have some dependencies outside of the Node ecosystem that may be missing from your environment. Just give it a go, and if it turns out that you can't run Cypress out of the box, check out the Cypress docs here: <https://docs.cypress.io/guides/getting-started/installing-cypress> for guidance on what to install.

On Ubuntu, for example, this should do the trick:

`apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb`

### Installing Cypress

You will only need to do this once:

```
cd test
npm install
```

### Running the Interactive Tests

```
cd test                     # if you haven't already
npx cypress open            # now you can view and run the test suites 
                            # interactively in your browser
```

### Running the Headless Tests

```
cd test                    # if you haven't already
npx cypress run            # this will run all the tests without UI 
```
