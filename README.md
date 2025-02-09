Notes App

## Overview

Notes App is a web application that allows users to register, log in, and manage notes. Users can create, edit, and delete notes. All notes are visible to all users, and each note displays the creator and the last editor.

This project primarily focuses on extracting and storing data efficiently. While the functionality is fairly simple, there are some flaws, such as notes not updating immediately after being added (requiring a refresh). However, improvements can be made in the future.

This part of the code is only the BACKEND part of the project.

Inorder to execute it you would need to go the FRONTEND part of the code.

## Features

- User registration and login
- Create, edit, and delete notes
- View all notes created by user who logs in
- Display the creator and last editor of each note

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcrypt for password hashing
- HTML, CSS, and JavaScript for the frontend

## Setup

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account or local MongoDB instance

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/black-and-white-notes-app.git
    cd black-and-white-notes-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:8000`.

## Usage

### User Registration

1. Open the application in your browser.
2. Fill in the registration form with a username and password.
3. Click the "Register" button.
4. If registration is successful, you will see a message prompting you to log in.

### User Login

1. Open the application in your browser.
2. Fill in the login form with your username and password.
3. Click the "Log in" button.
4. If login is successful, you will be redirected to the notes app.

### Managing Notes

1. After logging in, you can create a new note by filling in the title and description fields and clicking the "Add Note" button.
2. To edit a note, click the "Edit" button next to the note, update the title and description, and click "Save".
3. To delete a note, click the "×" button next to the note.

## File Structure
. ├── Model │ ├── notemodel.js │ └── usermodel.js ├── public │ ├── index.html │ └── index.js ├── .env ├── package.json └── script.js


### [usermodel.js](http://_vscodecontentref_/3)

Defines the user schema and pre-save hook to hash passwords before saving.

### [notemodel.js](http://_vscodecontentref_/4)

Defines the note schema.

### `public/index.html`

Contains the HTML structure for the registration, login, and notes app.

### `public/index.js`

Contains the client-side JavaScript for handling user registration, login, and note management.

### [script.js](http://_vscodecontentref_/5)

Contains the server-side code for handling user registration, login, and note management.

## API Endpoints

### User Registration

- **URL:** `/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }

  





