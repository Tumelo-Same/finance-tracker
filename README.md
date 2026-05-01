# Finance Tracker API

A RESTful API built with Java and Spring Boot that allows users to track
their income and expenses and calculate their current balance.

## Tech Stack

- Java 24
- Spring Boot 3.5
- PostgreSQL
- Maven

## Features

- Add income and expense transactions
- Retrieve all transactions
- Filter transactions by category
- Filter transactions by type
- Calculate current balance

## Getting Started

### Prerequisites

- Java JDK 17 or higher
- PostgreSQL
- Maven
- Postman (to test the API)

### Setup

1. Clone the repository
   git clone https://github.com/Tumelo-Same/finance-tracker.git

2. Create a PostgreSQL database called finance_tracker

3. Copy the example properties file
   cp src/main/resources/application.properties.example src/main/resources/application.properties

4. Open application.properties and fill in your PostgreSQL credentials

5. Run the application in IntelliJ or with
   mvn spring-boot:run

6. Server will start on http://localhost:8081

## API Endpoints

### Add a Transaction
- Method: POST
- URL: http://localhost:8081/transactions
- Body (JSON):
  {
  "description": "Grocery shopping",
  "amount": 350.00,
  "category": "food",
  "type": "expense"
  }

### Get All Transactions
- Method: GET
- URL: http://localhost:8081/transactions

### Get Current Balance
- Method: GET
- URL: http://localhost:8081/transactions/balance
- Returns the total income minus total expenses

### Filter by Category
- Method: GET
- URL: http://localhost:8081/transactions/category/food
- Replace "food" with any category you used

### Filter by Type
- Method: GET
- URL: http://localhost:8081/transactions/type/expense
- Type can be "income" or "expense"

## Testing with Postman

1. Download and install Postman from https://www.postman.com/downloads
2. Open Postman and create a new request
3. Set the method and URL as shown in the endpoints above
4. For POST requests click Body, select raw, select JSON
   and paste the request body
5. Hit Send and see the response

## Example Responses

Add Transaction Response:
{
"id": 1,
"description": "Grocery shopping",
"amount": 350.0,
"category": "food",
"type": "expense",
"createdAt": "2026-04-27T22:24:16.278095"
}

Balance Response:
14530.0

## Author

Tumelo Same
GitHub: https://github.com/Tumelo-Same