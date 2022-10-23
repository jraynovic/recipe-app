# Getting Started

To get started with the application

Run:

```javascript

- $yarn install
- $cd client
- $yarn install
- $cd ../
```

This will install the dependencies for the server, change to the client directory, and install the react application dependencies.

## Starting the Server

To start the Express server

Run:

```javascript

- $yarn server
```

To start the Express server and open the client in a new vscode instance

Run:

```javascript

- $yarn dev
```

**Switch to VSCode with Client**

```javascript

- $yarn start
```

Server starts on `http://localhost:5001/` endpoints are tested with Postman.

## Testing in Postman

Endpoints:

- GET `http://localhost:5001/recipe` returns all Recipes in an array.

- GET `http://localhost:5001/recipe/search/titles/*` returns all Recipes with given search parameter from the "title" field.

- GET `http://localhost:5001/recipe/search/descriptions/*` returns all Recipes with given search parameter from the "description" field.

- POST `http://localhost:5001/recipe` adds a recipe to the database.
  **Requires**: Body
  | Key | Value |
  | ------ | ------ |
  | titleImage | file |
  | title | text |
  | description | text |


•	Hire, trian, and oversee a team of 11 Technical Assistants to use our software to track and monitor progress of our services using data analytics and up-to-date SEO tactics 
•	Monitored, restored, and enhanced software updates using marketing software to serve clients at scale 
•	Expedited and refined marketing strategies using customized software to increase clientele by an average of 178.8% 
•	Managed team of 30+ successful Brand Account Managers, Media Negotiators and Promotions Specialists 
