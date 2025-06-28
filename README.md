# myFlix Client React App

### Project Description
  The myFlix-client React application allows users to find a list of movies from a database on the client-side. A user can both update user information and find lists or details about movies in the database. The user information can also be updated to change four fields: username, email, password, and birtdate. Each user has a unique token that allows the user to be recognized and their account set up uniquely. A user can select movies from the homepage to add to their favorite movies list in their profile view. myFlix-Client is set up as a Single Page Application with routing elements to all the user viewpoints. 

### Technologies Used:
Tech Stack Used: MERN (MongoDB, Express, React, Node.js) | Parcel used at build tool | Fetched API from Heroku
React app hosted on Nelify | React-Boostrap


### How to start this Project:
  Installing Parcel:
   - to install parcel globally: npm install -g parcel
   - to install parcel react application: npm install --save react react-dom
   - ask Parcel to build project: parcel [path to index.html] (for example: parcel src/index.html)
  
  Next, create structure for components: 
    - Decide on what file you want to be the "Main View" for the user. Make sure that this file is imported into the index.js. Then create folders for compenents of your react app that you want to build. 
  
  Next, import React into React files and build compenents to be added to Main View from there. 

  Next, build different components to be imported to necessary views for user to interact with.

### API Use
  The API used for this project was a REST API that I built through coursework in Career Foundry using Express and Node.js. I had created endpoints specifically designed for this React App. You can see the code for the API in GitHub under movie_api. 

### Lessons Learned:
I learned a lot through this project. It was my first time using a Javascript Library. I was able to nest components allowing me to be able to build them separately and be reused. There is a huge advantage to using React since HTML, CSS and Javscript files are combined in one single JSX file. It also prevents the same elements from having to be built twice. React also allows the client-side rendering to be done by managing state, meaning that the UI doesn't have reload from the server every time something is changed. Managing state in the DOM allows for load times to be managed by loading the application at the very beginning and not having to continuously communicate with the server. 

### What would I do differently? 
My navigation bar is not reponsive to the browswer size. I would make the navigation bar stretch to match the size of the browser that it is run. 

GitHub Repository site: https://github.com/Bre-Wonder/myFlix-client

Live Site:  https://bre-flix.com
