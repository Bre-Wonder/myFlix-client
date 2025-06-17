# myFlix Client React App

### Project Description
  The myFlix-client React application allows users to find a list of movies from a database on the client-side. A user can both update user information and find lists or details about movies in the database. The user information can also be updated to change four fields: username, email, password, and birtdate. Each user has a unique token that allows the user to be recognized and their account set up uniquely. A user can select movies from the homepage to add to their favorite movies list in their profile view. myFlix-Client is set up as a Single Page Application with routing elements to all the user viewpoints. 

## Dependancies
Tech Stack Used: MERN (MongoDB, Express, React, Node.js) | Parcel used at build tool | Fetched API from Heroku
React app hosted on Nelify | React-Boostrap


## How to get started
  Installing Parcel:
   - to install parcel globally: npm install -g parcel
   - to install parcel react application: npm install --save react react-dom
   - ask Parcel to build project: parcel [path to index.html] (for example: parcel src/index.html)
  
  Next, create structure for components: 
    - Decide on what file you want to be the "Main View" for the user. Make sure that this file is imported into the index.js. Then create folders for compenents of your react app that you want to build. 
  
  Next, import React into React files and build compenents to be added to Main View from there. 

  Next, build different components to be imported to necessary views for user to interact with.



## API Use
  The API used for this project was a REST API that I built through coursework in Career Foundry using Express and Node.js. I had created endpoints specifically designed for this React App. You can see the code for the API in GitHub under movie_api. 

GitHub Repository site: https://github.com/Bre-Wonder/myFlix-client
