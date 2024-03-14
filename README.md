# Project WatchWhitUs
![WatchWhitUslogo](https://github.com/WatchWithUs/watch_frontend/assets/152170826/2b8385e8-20e3-408a-9d13-0d3a3e348681)

## Backend of WatchWithUs

This is the backend part of the WatchWithUs project.
In this backend , we have a directory for every of these functionalities:
- the dababase connection file (db/index.js)
- the cloudinary and the file upload directories.
- the models
- the routes
- the middleware

## Instructions

To run in your computer, follow these steps:
- git clone https://github.com/WatchWithUs/watch_backend.git in a directory of your choice.
- install dependencies: `npm install`
- create a `.env` file like this:
PORT=5005
ORIGIN=http://localhost:5173
TOKEN_SECRET=y0uRt0k3N$eCr3T
  - 5005 is the backend port in localhost.
  - http://localhost:5173 is the frontend URL of the application.
  - TOKEN_SECRET: used to sign auth tokens (example, `TOKEN_SECRET=y0uRt0k3N$eCr3T`)
- open a terminal in the root folder of this backend (for instance in Vscode) to run the application with: `npm run dev`



