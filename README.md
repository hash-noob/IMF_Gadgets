# Phoneix Gadgets

A **Gadget Management System** built with Node.js, Express, and PostgreSQL using Sequelize. This API allows you to manage gadgets with features like creating, updating, decommissioning, and even triggering a self-destruct sequence on gadgets. Secure your endpoints with JWT-based authentication.

## Features

- **CRUD Operations:** Create, read, update, and decommission gadgets.
- **Self-Destruct:** Trigger a self-destruct sequence for a gadget.
- **JWT Authentication:** Secure routes using JSON Web Tokens.
- **Database Integration:** Uses PostgreSQL with Sequelize ORM.
- **Modular Code Structure:** Organized controllers, models, middlewares, and routes for scalability.

## Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/)
- A running PostgreSQL database

## Installation

1. **Clone the repository:**
   Create a .env file containing the required varaiables along with their values. (refer samplet_env.txt)

   ```bash
   git clone https://github.com/your-username/phoneix-gadgets.git
   cd src
   npm install
   node app.js
