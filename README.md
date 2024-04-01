# Backend Developer Assessment

This repository contains my solutions to the tasks provided in the Backend Developer Assessment.

## Task 1: Implement User Authentication with JWT

In this task, I developed user authentication functionality using JWT (JSON Web Tokens). The implementation includes endpoints for user registration, login, and logout. Sensitive routes are secured by requiring authentication using JWT.

### Evaluation Criteria:

- Proper implementation of JWT authentication with token generation and verification.
- Functional endpoints for user registration, login, and logout.
- Secure access to protected routes using JWT.

## Task 2: Create API Endpoints for Data Retrieval

For this task, I developed API endpoints to fetch data from a public API with filtering options. The implementation utilizes Node.js and Express.js to create API routes. Data is fetched from the provided public API (https://api.publicapis.org/entries), and filtering options for categories and result limits are implemented.

### Evaluation Criteria:

- Successful integration of API endpoints for data retrieval.
- Proper implementation of filtering options for categories and result limits.
- Error handling for invalid requests and edge cases.

## Task 3: Implement Swagger Documentation

In this task, I documented the API endpoints using Swagger for better understanding and usability. Swagger JS is integrated with the Node.js application to generate comprehensive documentation for all API endpoints, including request parameters and responses. Swagger UI is provided for interactive API documentation, allowing easy testing and exploration of the endpoints.
Start the application and go to /api-docs for swagger documentation.

### Evaluation Criteria:

- Proper integration of Swagger JS with the Node.js application.
- Clear and comprehensive documentation of all API endpoints.
- Availability of interactive Swagger UI for testing and exploration.

## Task 4: Secure API Endpoint for Authenticated Users Only

For this task, I restricted access to an API endpoint to authenticated users only. A new API endpoint was created that returns a message or data, and middleware was implemented to verify JWT authentication before allowing access. Proper error handling was implemented for unauthenticated requests.

### Evaluation Criteria:

- Successful implementation of middleware to verify JWT authentication.
- Proper restriction of API endpoint to authenticated users only.
- Correct error handling for unauthenticated requests.

## Task 5: Retrieve Ethereum Account Balance with web3.js (Optional)

*This task was not completed.*

---

Thank you for reviewing my solutions. If you have any questions or need further clarification, please feel free to reach out.
