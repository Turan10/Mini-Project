# ToDo Application

## Overview
This React-based ToDo application provides a simple and intuitive interface for managing daily tasks. Users can add, edit, and delete tasks, with each task having a description and a status indicating whether it's done.

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installing and Running
```bash
# Clone the repository
git clone [https://github.com/Turan10/Mini-Project/]


# Install dependencies
npm install

# Start the application
npm start
Usage
Add Tasks: Enter task details and click 'Create'.
Edit Tasks: Click 'Edit' on any task to modify its details.
Delete Tasks: Remove tasks from the list using the 'Delete' button.
Contributing
Contributions are welcome. Please fork the repository, make your changes, and submit a pull request.

Code Overview
App.jsx
The main component of the application. It handles the state of tasks and provides functions for loading, adding, editing, and deleting tasks. It also renders the ToDoList and ToDoForm components.

ToDoForm.jsx
Manages the form for adding and editing tasks. It allows users to enter a task description and select its status (Done or Pending). The form also handles validation to ensure no empty fields are submitted.

ToDoList.jsx
Displays the list of tasks in a table format. Each task shows an ID, description, status, and actions for editing and deleting. This component receives tasks as props from the App.jsx and utilizes callback functions for edit and delete actions.

persistance.js
Handles API interactions using Axios. It provides a function fetchData for making GET, POST, PUT, and DELETE requests to a specified URL. This utility is used for loading, adding, editing, and deleting tasks.