Backend CRUD API with Node.js, Express, Sequelize & PostgreSQL

📌 PROJECT OVERVIEW


-This project is a RESTful Backend API built using Node.js, Express.js, Sequelize ORM, and PostgreSQL (Supabase). 

-It demonstrates how to build a structured backend application by implementing CRUD (Create, Read, Update, Delete) operations for Users and Posts, along with request validation, error handling, and database integration.

-The project follows a modular architecture by separating routes, controllers, models, and database configuration, making the code clean, maintainable, and scalable.

🚀FEATURES

-User CRUD Operations
-Post CRUD Operations
-Express Routing
-Sequelize ORM Integration
-PostgreSQL (Supabase) Database
-User–Post Relationship
-Email Validation
-Age Validation
-Duplicate Email Check
-Error Handling using Try-Catch
-RESTful API Design
-API Testing with Postman

🛠️TECHNOLOGIES USED

-Node.js
-Express.js
-Sequelize ORM
-PostgreSQL (Supabase)
-JavaScript (ES Modules)
-Postman
-dotenv


📂PROJECT STRUCTURE


backend/
│
├── database/
│
├── feature/
│   ├── user/
│   │   ├── user.controller.js
│   │   ├── user.model.js
│   │   └── user.route.js
│   │
│   └── post/
│       ├── post.controller.js
│       ├── post.model.js
│       └── post.route.js
│
├── app.js
├── package.json
└── .env


▶️ Installation


Clone the repository

git clone <repository-url>

Navigate to the project

cd backend

Install dependencies

npm install

Create a .env file and add your database credentials.

Run the development server

npm run dev


🧪 Testing


-The APIs were tested using Postman.


-Example request:


POST /users
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 22
}


📚 What I Learned


-Building REST APIs with Express.js
-Using Sequelize ORM for database operations
-Performing CRUD operations
-Connecting PostgreSQL with Node.js
-Working with Models, Controllers, and Routes
-Request validation and error handling
-Using UUIDs as primary keys
-Testing APIs with Postman
-Organising backend projects using a modular architecture


🔮 Future Improvements

-JWT Authentication
-Password Hashing with bcrypt
-Authorization Middleware
-Pagination & Filtering
-Search Functionality
-File Uploads
-Role-Based Access Control
-API Documentation with Swagger


👩‍💻 Author


Dikshika Adhikari


Backend project developed while learning Node.js, Express.js, Sequelize, and PostgreSQL.
