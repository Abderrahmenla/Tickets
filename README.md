<h1 align="center"><a href="#">Ticketing.dev</a></h1>

<p align="center">
  <a href="#">Ticketing.dev</a> site built using kubernetes with React.js, TypeScript and nodeJS.
</p>


# Tickets
Ticketing is a highly scalable ecommerce app built with micro-services architecture created for learning purpose. 

# Platform Features

 - Horizontally scalable
 - Highly Concurrent
 - Microservice Architecture
 - Containerized Application
 - Production Grade Code with Integration Tests using Docker Containers
 
 # Technologies
 
 - Typescript
 - Kubernetes
 - Docker
 - Redis
 - NodeJS
 - ReactJS
 - MongoDB
 - ExpressJS

**You can find the latest [Figma design protype here](https://www.figma.com/file/lOxAGGg5KXb6nwie7zXkz6/NJ---Design-System?node-id=22%3A6086).**

## 🚀 Get Started

1. **CD to each microservice.**

   ```bash
   # install the dependencies
   npm i
   # build local docker image 
   docker built -t YourDockerID/YourMicroserviceName
   # push the docker image to docker hub
   docker push YourDockerID/YourMicroserviceName
   ```
2. **Enter the kubernetes secret keys.**
   ```bash
    # if you're on a linux distro run these commands first
    minikube start
    minikube addons enable ingress
    # enter the keys
    kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
    kubectl create secret generic stripe-secret --from-literal=STRIPE_KEY=your private stripe api key

   ```

1. **Start developing.**

   ```bash
   skaffold dev
   ```

1. **Open the source code and start editing!**

   The site is now running at `http://localhost:8000`!

## 🧐 What's inside?

A quick look at some of the top-level files and directories found in this project.

```console
.
├── .github
├── auth
├── client
├── common
├── expiration
├── infra/k8s
├── orders
├── payments
├── tickets
├── .gitignore
├── README.md
```

1. **`/infra/k8s`**: This directory contains kubernetes configuration files (deployments,services,ingress-srv config file)

2. **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

3. **`/src`**: This directory will contain all of the code related to what you will see on the front-end/logic in the backend of the app site. "Src" is a convention for "source code."

5.**`/client`**: this microservice is responsible for rendering the UI of the app (what you see in the browser), like your site header, or a page template. Built with love and nextJS

6.**`/auth`**: this microservice is responsible for user authentification : signin & signup & signout. built with nodeJS-mongoDB

7.**`/expiration`** this microservice is responsible for locking/unlocking the ticket ,built with nodeJS & redis 

8. **`/payments`**: This micrservice is responsible for the payments built with nodeJS and mongoDB as a DB.

9. **`/orders`**: This micrservice is responsible for creating/updating/deleting orders built with nodeJS and mongoDB as a DB.

10. **`/tickets`**: This micrservice is responsible for creating tickets/editing/deleting tickets built with nodeJS and mongoDB as a DB.

11. **`/__test__`**: Tests for this projects are stored in this directory. This project uses [Jest]("https://jestjs.io/) as it's testing framework.

12. **`/routes`**: This directory contains our route handlers

13. **`/models`**: This directory contains mongoDB models

14. **`/listeners`**: This directory contains our event listeners 

15. **`/publishers`**: This directory contains our event publishers 

16. **`Dockerfile`**: Our docker image configuration file 

17. **`.dockerignore`**: This file contains the files that should be ignored while building the docker image

18. **`skaffold.yaml`**: Skaffold configuration file 

19. **`.gitignore`**: This file tells git which files it should not track/not maintain a version history.

20. **`package-lock.json`** This is an automatically generated file based on the exact versions of  npm dependencies that were installed for the project. (You won't change this file directly).

21. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project's name, author, etc.). This manifest is how npm knows which packages to install for the project.

22. **`README.md`**: A text file containing useful reference information about the project.

23. **`tsconfig.json`**: Config file for TypeScript


### Summary / Current Status

My current focus is on site development.

### Team

Any person who wants to contribute to the initiative is welcome! and join the effort 🙌.

