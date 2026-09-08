# workout-buddy

Workout Buddy is a full-stack MERN applicaion that help
users create,manage,and track their workouts

## Features

- user registration and login
- create workout records
- view workout list
- update workout details
- delete workouts
- user-specific workout data
- responsive user interface
- REST API for workout management
- mongoDB database integration

## Technologies used

 ## frontend

   -React.js
   -javascript
   -Html
   -Css
   -Axios

  ## Backend

 -MongoDB(DB)
-Expressjs(Backend)
-Nodejs(Backend)
-Mongoose
-JWT Authentication

 ## Tool

 - vs Code
 - MongoDB Compass
 - postman
 - Git
 - GitHub

## Project Structure

Backend
 -server.js
 -routes/
 -controller/
 -model/
 -server.js

Frontend
 -src/
      -component/
      -pages/
      -hooks/
      -context
  -App.jsx
  -index.css
  -main.jsx    

## installation

 ### Backend
  ```bash
   npm install
   npm run dev
   ```
   ### Frontend
  ```bash
   npm install
   npm run dev
   ``` 

   ## envirenment variable

create a `.env` file in the backend.

```env
PORT = 4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=password
```

 ## API Endpoint

 1 Authentication

  Method      Endpoint              Description

  POST        /api/auth/signin       Signin

  POST       /api/auth/login         Login 

2 Workout API

  Method      Endpoint              Description

  GET        /api/workouts           get workout

  GET        /api/workouts/:id       get workout by id

  POST       /api/workouts           create a workout

  PUT        /api/workouts/:id       update a workout

  DELETE     /api/workouts/:id       Delete a workout



## future improvement

- Workout progress charts
- Exercise categories
- Workout reminders
- Calories tracking
- Profile management
- Dark mode
- Deployment

# Git Hub
https://github.com/ravaninitu470-creator/workout-buddy

# Author
 
  Nitu Ravani
