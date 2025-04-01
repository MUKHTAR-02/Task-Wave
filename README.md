# Task-Wave

## Overview

Task-Wave is a simple and efficient task management application built using React and Redux, allowing users to manage their tasks with features like task prioritization, persistent storage, and real-time weather updates. With the integration of **localStorage**, the app ensures data persistence even after refreshing the page or logging out and logging back in.

### Features:
- **Task Management**: Add, delete, and prioritize tasks.
- **Persistent Storage**: Tasks and authentication status persist across sessions using **localStorage**.
- **Weather Integration**: Fetch and display current weather data for any city.
- **Responsive Design**: Fully responsive UI that works on all screen sizes.

---

## Features Implemented

### 1. **Task Management**
   - **Add Task**: Users can input new tasks and add them to the list.
   - **View Tasks**: Display tasks with their respective priorities.
   - **Delete Task**: Each task has a delete button that allows users to remove tasks from the list.
   - **Task Prioritization**: Tasks can be marked with one of three priorities: High, Medium, and Low. High priority tasks appear at the top of the list.

### 2. **Persistent Storage**
   - The app uses **localStorage** to store the tasks and authentication status. This allows the app to retain the data even after page reloads or after logging out and logging in again, ensuring a smooth user experience.

### 3. **Weather Integration**
   - The app includes an API integration that allows users to check the weather conditions for a specific city. The weather data is displayed alongside the task list for enhanced functionality.

---

## Tech Stack

- **Frontend**: React, Redux, TailwindCSS
- **State Management**: Redux (with Redux Toolkit)
- **API Integration**: OpenWeatherMap API (for weather data)
- **Storage**: localStorage

---

## Setup Instructions

- Follow the instructions below to set up and run the Task-Wave app locally:

### 1. Clone the Repository

```bash
git clone https://github.com/YourUsername/Task-Wave.git
cd Task-Wave
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables
- You will need an API key from OpenWeatherMap to fetch weather data.

- Go to OpenWeatherMap and sign up to get an API key.

- Create a .env file in the root directory of the project and add the following line:

```bash
REACT_APP_WEATHER_API_KEY=your-api-key-here
```
### 4. Run the App
Once everything is set up, you can run the application using:

```bash
npm start
```

## Screenshots
- Here are some screenshots of the app in action:

### Login Page
![Login Page](https://github.com/MUKHTAR-02/Task-Wave/blob/main/public/screenshots/login-page.png?raw=true)

### Task Management
![Task List](https://github.com/MUKHTAR-02/Task-Wave/blob/main/public/screenshots/task-management.png?raw=true)

### Weather Feature
![Weather Feature](https://github.com/MUKHTAR-02/Task-Wave/blob/main/public/screenshots/weather-feature.png?raw=true)

## Key Implementation Details
### Task Management
- Users can add new tasks, delete existing ones, and prioritize tasks.

- Tasks are sorted by priority, with high priority tasks appearing at the top of the list.

- Tasks are stored in localStorage to persist data across sessions.

### Weather Feature
- Users can input a city name and fetch the weather conditions using the OpenWeatherMap API.

- Weather data includes city name, temperature (in Celsius), and a weather description (e.g., sunny, cloudy).

- Error handling is implemented in case of invalid city names or API issues.

### Persistent Storage
- The app uses localStorage to store the list of tasks and the authentication status, ensuring persistence even after a page reload or logging in again.

### Responsive Design
The app is fully responsive, ensuring it looks great on mobile, tablet, and desktop devices. TailwindCSS's utility-first classes help with easy and flexible responsive design.

## Conclusion
- Task-Wave is a powerful and easy-to-use task management application with modern features like task prioritization, weather updates, and persistent storage. It's built with a clean and responsive UI and uses React and Redux for efficient state management.

- Feel free to give me feedback, I will be happy to know...