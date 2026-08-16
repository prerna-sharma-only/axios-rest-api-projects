<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=35&duration=1&pause=1000&color=00D9FF&center=true&vCenter=true&width=500&lines=REST+API+DEMO"
    alt="REST API DEMO"
  />
</p>
<p align="center">
  <code>GET</code> •
  <code>POST</code> •
  <code>PUT</code> •
  <code>PATCH</code> •
  <code>DELETE</code>
</p>

A simple Express.js application demonstrating how to interact with a REST API using **GET, POST, PUT, PATCH, and DELETE** requests.

## Project Structure

```text
03-rest-api-demo/
├── views/
│   └── index.ejs
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Features

* Fetch a secret using `GET`
* Create a secret using `POST`
* Replace a secret using `PUT`
* Update a secret using `PATCH`
* Delete a secret using `DELETE`
* Simple EJS-based web interface
* Bearer token authentication with Axios

## Tech Stack

|    Technology   | Purpose                                                 |
| :-------------: | ------------------------------------------------------- |
|   **Node.js**   | JavaScript runtime for running the application          |
|  **Express.js** | Web framework for creating the server and API routes    |
|    **Axios**    | HTTP client for making REST API requests                |
|     **EJS**     | Template engine for rendering the frontend              |
| **Body Parser** | Middleware for parsing form data from incoming requests |
|   **REST API**  | Backend API used for CRUD operations                    |


## Installation

Clone the project and install the dependencies:

```bash
npm install
```

## Configuration

The application uses a Bearer Token to authenticate with the API.

Set the token as an environment variable:

```bash
BEARER_TOKEN=your_token_here
```

Avoid committing the actual token to the repository.

## Run the Application

Start the server with:

```bash
node index.js
```

The application will run on:

```text
http://localhost:3000
```

## API Operations

| Operation | Route            | Purpose                    |
| --------- | ---------------- | -------------------------- |
| GET       | `/get-secret`    | Fetch a secret by ID       |
| POST      | `/post-secret`   | Create a new secret        |
| PUT       | `/put-secret`    | Replace an existing secret |
| PATCH     | `/patch-secret`  | Update an existing secret  |
| DELETE    | `/delete-secret` | Delete a secret            |

The form accepts:

* **ID** — Secret ID
* **Secret** — Secret value
* **Score** — Secret score

The response from the API is displayed on the page.

## API

This project uses the Secrets API:

```text
https://secrets-api.appbrewery.com
```

## Notes

Make sure EJS is configured as the view engine in Express and that the Bearer Token is provided before running the application.
