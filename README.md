## Angular10 NodeJs Docker DeployingCloudRun template

This is a simple template application.

## What's included
 - Frontend: simple Angular10 application
 - Backend: NodeJs with Express
 - Docker file
 - Cloudbuild.yaml file

## Start App in Docker Container (Recommended)
```bash
# build the image
docker build --tag startapp .
# run the image as a container
docker run --publish 8080:8080 startapp:latest
```

CTRL+C to stop.

## Start App Without Docker (Not Recommended)
Run backend
```bash
# go to backend folder
cd backend
# install all dependencies
npm install
# run app
node inde.js
```

Run fronend

```bash
#go to frontend folder
cd frontend
# install all dependencies
npm install
# build app
ng build
# run app
ng serve
```
CTRL+C to stop.
    
## License
[MIT](https://choosealicense.com/licenses/mit/)