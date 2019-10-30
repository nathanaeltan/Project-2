# EZ TRIPPER
## Link
https://lit-falls-64728.herokuapp.com/welcome

## About
Planning a trip has never been easier, just select what attractions you want to see on your trip, and drag and drop it into the times. It will then generate a summary for ease of use. 

## Technology used
Javascript

NodeJS 

Express

React

Bootstrap 

PostGres

Google Places API


## Installation
npm install
 "dependencies": {
    "bootstrap": "^4.3.1",
    "cookie-parser": "^1.4.4",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-react-views": "^0.11.0",
    "js-sha256": "^0.9.0",
    "jspdf": "^1.5.3",
    "method-override": "^3.0.0",
    "pg": "^7.12.1",
    "react": "^16.10.2",
    "react-bootstrap": "^1.0.0-beta.14",
    "react-dom": "^16.10.2"


## Unsolved Problems
-Still Need an edit function and a better way to pull data other than just pulling data form the DOM

-On Heroku, if the user adds too a certain number of attractions to the summary , the page will take a long time to load. 

-if the user refreshes the page at the add attractions section, it will keep registering a new trip

## ERD

![ERD](https://github.com/nathanaeltan/Project-2/blob/master/images/ERD.png)


## Wire Frames

![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/home.png)
![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/addTrip.png)
![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/login.png)
![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/planner.png)
![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/summary.png)
![wireFrames](https://github.com/nathanaeltan/Project-2/blob/master/images/attractions.png)

## User Stories

User Will be led through the add trips process to select a country and date, then pick attractions from that city and drop them into the time slot that they want to do the activity. 
