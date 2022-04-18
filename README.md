# Fabelle-learn 

Fabelle Learn is an eCommerce Web App. This webiste can be use to sell Online Courses.

## Installation

Clone the cportfolio repository

```bash
https://github.com/arjun-computer-geek/fabelle-learn-react.git
```
### Mthod : 1
Move to backend and frontend folder and Install required Packages.

```bash
npm install
```
Change the proxy to the `"proxy": "http://localhost:8000"` in frontend's `package.json`

Set Environment variable `ATLAS_DB_URI= <with your atlas credentials>` in `/backend/config/config.env`

Run both code frontend and backend with `start` command.

```bash
npm start
```

### Mthod : 2
If setup the mongodb atlas is crooked pudding then you can use the `method : 2`
In this method we are going to use `Docker`.

#### Install the Docker on your machine (if required)
Go to the [Docker](https://docs.docker.com/get-docker/) and install according to your convenient.

Go to the `/backend/config/databaseConnection.js` and change `ATLAS_DB_URI` Environment variable to the `DB_URI`.

Open your favourite Command Prompt and navigate to the project folder and `run` following command.

It will create network for the docker containers.
```bash
docker network create ecommerce-network
```
Now You can run the following command : 
  - It will automatically build the image and create container and run.
```bash
docker-compose up -d
```
Now you can see the app on 3000 port on your browser.😉
