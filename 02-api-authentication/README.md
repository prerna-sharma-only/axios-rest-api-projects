<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&duration=3000&pause=1000&color=58A6FF&center=true&vCenter=true&width=600&lines=API+Authentication;Axios+Authentication+Methods"
    alt="API Authentication"
  />
</p>

A Node.js and Express.js project demonstrating different authentication methods used when making REST API requests with Axios.

## Authentication Methods

|          Method          | Endpoint      | Axios Configuration            | Purpose                                                   |
| :----------------------: | :------------ | :----------------------------- | :-------------------------------------------------------- |
|   **No Authentication**  | `/random`     | `axios.get()`                  | Access a public endpoint without credentials              |
| **Basic Authentication** | `/all?page=2` | `auth: { username, password }` | Authenticate using username and password                  |
|        **API Key**       | `/filter`     | `params: { apiKey }`           | Authenticate using an API key passed as a query parameter |
|     **Bearer Token**     | `/secrets/2`  | `Authorization` header         | Authenticate using a Bearer token                         |

## Concepts Covered

* REST API requests with Axios
* No Authentication
* Basic Authentication
* API Key Authentication
* Bearer Token Authentication
* Query Parameters
* Request Headers
* Axios Configuration
* Express.js Routing
* EJS Rendering
* API Response Handling
* Error Handling

## Tech Stack

|   Technology   | Purpose                      |
| :------------: | ---------------------------- |
|   **Node.js**  | JavaScript runtime           |
| **Express.js** | Server and route handling    |
|    **Axios**   | HTTP client for API requests |
|     **EJS**    | Dynamic HTML rendering       |
|    **HTML**    | Frontend structure           |
|     **CSS**    | Frontend styling             |

## Project Structure

```text
02-api-authentication/
├── views/
│   └── index.ejs
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## Routes

| Route          | Method | Authentication | API Request               |
| :------------- | :----: | :------------: | :------------------------ |
| `/`            |   GET  |      None      | Displays the initial page |
| `/noAuth`      |   GET  |      None      | GET `/random`             |
| `/basicAuth`   |   GET  |   Basic Auth   | GET `/all?page=2`         |
| `/apiKey`      |   GET  |     API Key    | GET `/filter`             |
| `/bearerToken` |   GET  |  Bearer Token  | GET `/secrets/2`          |

## Authentication Configuration

### Basic Authentication

```js
{
  auth: {
    username: yourUsername,
    password: yourPassword
  }
}
```

### API Key

```js
{
  params: {
    score: 5,
    apiKey: yourAPIKey
  }
}
```

### Bearer Token

```js
{
  headers: {
    Authorization: `Bearer ${yourBearerToken}`
  }
}
```

## Installation

Install the project dependencies:

```bash
npm install
```

## Run

Start the Express server:

```bash
node index.js
```

Open:

```text
http://localhost:3000
```

## API

This project uses the Secrets API:

```text
https://secrets-api.appbrewery.com
```

## Security

Authentication credentials should be stored in environment variables rather than directly in the source code.

Example:

```env
API_USERNAME=your_username
API_PASSWORD=your_password
API_KEY=your_api_key
BEARER_TOKEN=your_bearer_token
```
