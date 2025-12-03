## Zap URL – Full-Stack URL Shortener

Zap URL is a **full-stack URL shortener** application that demonstrates end-to-end product development: from REST API design and database integration to a responsive React frontend and production deployment on AWS and Vercel.

It showcases **modern web development practices**, including SPA architecture, API integration, caching, logging, and cloud deployment.

---

## Project Overview

Zap URL allows users to **convert long URLs into short, shareable links** and then **redirects** those short links to their original destinations.

The stack is split into:

- **Frontend**: React + Vite + TypeScript + TailwindCSS (SPA with client-side routing and responsive UI)
- **Backend**: Node.js + Express running on AWS EC2
- **Data & Infra**:
  - **DynamoDB** for persistent storage of URLs and metadata
  - **Redis** for caching and performance
  - **ArcJet** for security controls (e.g. bot protection, abuse prevention)
  - **PM2** and optionally **NGINX** for robust backend process and HTTP management

This project emphasizes **full-stack integration**, **production-oriented deployment**, and **real-world patterns** such as caching, logging, and error handling.

---

## Features

- **URL Shortening**
  - **`POST /api/shorten`** API to create short URLs for any valid long URL
  - Stores original URL and associated metadata in DynamoDB

- **Redirection**
  - **`GET /api/:shortId`** API to resolve a short ID and redirect to the original URL
  - Uses Redis to quickly look up frequently accessed short URLs

- **Scalable Backend Architecture**
  - Express-based API with a clear controller–service–repository structure
  - Redis caching layer in front of DynamoDB for performance and reduced read load
  - ArcJet integration for enhanced security and request protection

- **Modern React Frontend**
  - Single Page Application built with React, Vite, and TypeScript
  - Responsive TailwindCSS-based UI
  - SPA routing for landing page, shortening form, and results

- **Full Integration**
  - Frontend communicates with the deployed backend over HTTP
  - Vite proxy and environment configuration wired to the EC2 backend

- **Logging & Error Handling**
  - Centralized logging in the backend for observability
  - Structured error responses and middleware-based error handling

---

## Tech Stack

- **Frontend**
  - React
  - Vite
  - TypeScript
  - TailwindCSS
  - React Router (SPA routing)

- **Backend**
  - Node.js
  - Express
  - PM2 (process manager)
  - NGINX (optional reverse proxy)

- **Data & Infrastructure**
  - Redis (caching layer)
  - AWS DynamoDB (persistent data store)
  - AWS EC2 (Ubuntu instance for backend)
  - ArcJet (security / protection)

- **Tooling**
  - npm (package management)
  - ESLint / TypeScript configuration
  - Vite build pipeline

---

## Folder Structure

At the root of the repository:

- **`zapurl`** – React + Vite frontend  
  - `src/` – React components, pages, and app entry
    - `components/` – UI and layout components (landing, shortener form, etc.)
    - `pages/` – Page-level views and routing
    - `lib/` – Utilities and helpers
  - `public/` – Static assets
  - `dist/` – **Production build output** for the frontend
  - `vite.config.ts` – Vite configuration (including base and proxy setup)
  - `tsconfig*.json` – TypeScript configurations
  - `package.json` – Frontend scripts and dependencies

- **`zapurl-backend`** – Node.js + Express backend  
  - `src/`
    - `server.js` – Backend entry point (launched with PM2)
    - `app.js` – Express app configuration and middleware wiring
    - `routes/` – Route definitions, including:
      - `url.routes.js` – Routes like `POST /api/shorten`
      - `redirect.routes.js` – Routes like `GET /api/:shortId`
    - `controller/` – Controllers for redirect and URL operations
    - `service/` – Business logic for URL creation, retrieval, and validation
    - `repositories/` – DynamoDB/Redis data access layer
    - `config/` – Configuration for Redis, DynamoDB, ArcJet, etc.
    - `middleware/` – Security and other middlewares
    - `logger/` – Logging utilities
    - `utils/` – Helpers (ID generation, validation, etc.)
  - `package.json` – Backend scripts and dependencies

- **Environment & Config**
  - `.env` files (not committed) – Backend and frontend configuration:
    - Redis connection
    - DynamoDB credentials/region
    - Backend base URL / API URL
    - ArcJet keys and security config

---

## API Endpoints

- **Shorten URL**
  - **Method**: `POST`
  - **Path**: `/api/shorten`
  - **Description**: Accepts a long URL (and optional metadata) and returns a shortened URL + ID.
  - **Sample Request Body** (example):

    ```json
    {
      "url": "https://example.com/very/long/url",
      "expiresIn": 86400
    }
    ```

- **Redirect to Original URL**
  - **Method**: `GET`
  - **Path**: `/api/:shortId`
  - **Description**: Looks up the original URL by `shortId`, leverages Redis cache, and redirects the client.

---

## Deployment

- **Frontend**
  - Deployed on **Vercel** at:  
    [`https://zap-url-five.vercel.app/`](https://zap-url-five.vercel.app/)
  - Built using `npm run build` (Vite).
  - Vite configured with:
    - `base: '/'`
    - Development proxy targeting the backend on AWS EC2
    - Production environment variable (`VITE_API_BASE_URL`) for direct backend communication
  - Environment Configuration:
    - **Development**: Uses Vite proxy (leave `VITE_API_BASE_URL` empty)
    - **Production**: Set `VITE_API_BASE_URL=http://3.108.254.115:3000` in Vercel

- **Backend**
  - Deployed on an **AWS EC2 (Ubuntu)** instance at: `http://3.108.254.115:3000`
  - Runs as a Node.js process managed by **PM2**:
    - Example: `pm2 start src/server.js --name zapurl-backend`
  - **Redis** installed and running locally on the EC2 instance.
  - **DynamoDB** used as the main database (using AWS SDK from the backend).
  - **CORS** configured to accept requests from:
    - `http://localhost:5173` (local development)
    - `https://zap-url-five.vercel.app` (production)
  - **NGINX** optionally used as a reverse proxy in front of the Node server for:
    - SSL termination
    - Routing from port 80/443 to the Node app

- **Networking**
  - Frontend makes API calls directly to the backend using the EC2 public IP
  - Environment variables configure the API base URL on the frontend:
    - `VITE_API_BASE_URL` for production (set in Vercel)
    - Empty/omitted for development (uses Vite proxy)

---

## Setup Instructions (Local Development)

### 1. Clone the Repository

```bash
git clone <your-repo-url>.git
cd zapurl
```

### 2. Frontend Setup (`zapurl`)

```bash
cd zapurl
npm install
```

Create a `.env` file for local development (uses Vite proxy):

```bash
# Leave empty for development
VITE_API_BASE_URL=
```

For production deployment on Vercel, set environment variable:

```bash
VITE_API_BASE_URL=http://3.108.254.115:3000
```

To run in development:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

**Note**: The `.env.production` file is already configured with the production backend URL.

### 3. Backend Setup (`zapurl-backend`)

In a separate terminal:

```bash
cd /Users/nibedanpati/Desktop/Projects/Full\ Stack/zapurl/zapurl-backend
npm install
```

Configure backend environment variables in a `.env` file, for example:

```bash
PORT=3000
REDIS_HOST=localhost
REDIS_PORT=6379
DYNAMODB_REGION=<your-region>
DYNAMODB_TABLE=<your-table-name>
ARCJET_API_KEY=<your-arcjet-key>
```

You’ll also need a running **Redis** instance and access to **DynamoDB** (either AWS or local DynamoDB).

### 4. Run Backend with PM2

From the `zapurl-backend` directory:

```bash
pm2 start src/server.js --name zapurl-backend
```

Or (if `server.js` is at root of `src` or compiled location as configured):

```bash
pm2 start server.js --name zapurl-backend
```

PM2 will keep the process alive and restart it if it crashes.

### 5. Access the App

- Frontend (local dev): typically `http://localhost:5173` (or the port Vite prints).
- Backend (local): `http://localhost:3000` or whatever `PORT` you configured.

---

## Screenshots (Optional)

You can add screenshots or GIFs here to visually demonstrate:

- **Landing page** showing the URL input form.
- **Shortened URL result view**.
- **Mobile view** to highlight the responsive TailwindCSS layout.

Example placeholders:

- `![Zap URL – Landing Page](./screenshots/landing.png)`
- `![Zap URL – Shortened URL Result](./screenshots/result.png)`

---

## Future Enhancements

- **User Accounts & Analytics**
  - Add authentication and user profiles.
  - Track click analytics (per link, per user, geolocation, referrer, etc.).

- **Custom Aliases & Domains**
  - Allow custom short IDs and custom domains for branded links.

- **Rate Limiting & Advanced Security**
  - Expand ArcJet rules and add application-level rate limiting per IP or per user.

- **Admin Dashboard**
  - Web dashboard to manage links, monitor traffic, and view error logs.

- **Improved Monitoring & Observability**
  - Integrate with services like CloudWatch, Datadog, or Grafana for metrics and alerting.

---

## Why This Project Matters

Zap URL demonstrates:

- **Full-stack skills**: React + Vite + TypeScript on the frontend, Node.js + Express on the backend.
- **Real-world deployment experience**: Vercel for frontend, AWS EC2 (with PM2, Redis, DynamoDB, and optional NGINX) for the backend.
- **Production-minded design**: Caching, logging, error handling, configuration via environment variables, and clear project structure.

It is designed to be **recruiter-friendly** and to showcase the ability to build, integrate, and deploy a complete modern web application.