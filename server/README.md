
# Laptop Showcase API

This is the backend API for the Laptop Showcase application.

## Setup

### Prerequisites

1. Node.js (v14+ recommended)
2. MySQL server
3. phpMyAdmin (for database management)

### Database Setup

1. Create a database named `laptop_showcase` in phpMyAdmin
2. Import the `db/init.sql` file to create tables and seed initial data
3. Update `.env` file with your MySQL credentials

### Installation

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

| Method | Endpoint         | Description        | Request Body                                 | Response                |
|--------|------------------|--------------------|----------------------------------------------|-------------------------|
| GET    | /api/laptops     | Get all laptops    | None                                         | Array of laptop objects |
| GET    | /api/laptops/:id | Get laptop by ID   | None                                         | Laptop object           |
| POST   | /api/laptops     | Create new laptop  | Laptop object                                | `{success: true, id}`   |
| PUT    | /api/laptops/:id | Update laptop      | Laptop object                                | `{success: true}`       |
| DELETE | /api/laptops/:id | Delete laptop      | None                                         | `{success: true}`       |

## Environment Variables

Create a `.env` file with the following variables:

```
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=laptop_showcase
PORT=3001
```
