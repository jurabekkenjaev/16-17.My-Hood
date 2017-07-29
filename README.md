# Project Description

Hyper Local is a collection of guides for neighborhoods that are not on the grid but have a lot to offer. Searching yelp or google yields limited results at best.

A local insiders curated Field Guide to the lesser known local spots that fly under the radar. This is for people who love exploring new places or find themselves in a strange place with no resource to turn to. Like having your best friend with really good taste offering recommendations for what to see, where to eat or where to drink.

*features*
* User generated database of exceptional places based on geography (post req/res).
* Form inputs, validation and DB population.
* Google maps API -- Geo-location.
* FireBase user authenication.
* User controlled sorting based on activity and/or location (get req/res).
* Preview review of what makes the listing great.
* Up and down voting on listing.

This document outlines the base requirements for Project 2.

## Team
Fernando Medina /
Nurul /
Jake Demonaco /
Jurabek Kenjaev /
Manassah /
Robert Spica /


### Requirements

Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).

### Suggestions

Your project _should_:
* Incorporate Basic Testing Framework, see [Project Suggestions](../Suggestions/README.md);
* Use Handlebars for Server-Side Templating
* Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
* Use an existing public dataset to power the database
* Create a migration strategy for sharing data across team members.

## Site architecture:
________________________

├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── MyHood_controller.js
│
├── db
│   ├── USER-schema.sql
│   
│   ├── RESULTS-schema.sql
│
├── models
│   └── Results.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── index.css
│   │   │   └── search.css
│   │   │   └── Post.css
│   │   └── img
│   │       └── ****.png
│   │       └── ****.png
│   └── test.html
│
├── server.js
│
└── views
│   ├── index.handlebars
│   └── layouts
│        └── main.handlebars
│        
├── Package.json
│
└── Readme


Additional tech:
Login Authentication
Google Maps


