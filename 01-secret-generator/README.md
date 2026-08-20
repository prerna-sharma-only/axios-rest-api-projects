<p align="center">
  <img
    src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&duration=2600&pause=2000&color=58A6FF&center=true&vCenter=true&width=600&lines=Secret+Generator"
    alt="Secret Generator"
  />
</p>

A simple Express.js application that fetches a random secret from the Secrets API and dynamically displays it using EJS.

## Features

* Fetches a random secret using Axios
* Dynamically displays the secret with EJS
* Displays the username associated with the secret
* Serves static assets using Express

## Tech Stack

|   Technology   | Purpose                         |
| :------------: | ------------------------------- |
|   **Node.js**  | JavaScript runtime              |
| **Express.js** | Server and routing              |
|    **Axios**   | Fetching data from the REST API |
|     **EJS**    | Dynamic HTML rendering          |
|    **HTML**    | Page structure                  |
|     **CSS**    | Styling and layout              |

## API

```text
GET https://secrets-api.appbrewery.com/random
```

### Response Data

|  Property  | Description                         |
| :--------: | ----------------------------------- |
|  `secret`  | Random secret displayed on the page |
| `username` | User associated with the secret     |

## Project Flow

```text
Browser
   │
   ▼
Express.js
   │
   ▼
Axios GET Request
   │
   ▼
Secrets API
   │
   ▼
API Response
   │
   ▼
EJS Template
   │
   ▼
Rendered Secret
```

## Project Structure

```text
01-secret-generator/
├── public/
│   ├── images/
│   │   └── whisper-img.jpg
│   └── styles/
│       └── main.css
├── views/
│   └── index.ejs
├── README.md
├── index.js
├── package.json
└── package-lock.json
```

## Installation

```bash
npm install
```

## Run

```bash
node index.js
```

Open the application at:

```text
http://localhost:3000
```

