**Student Task Tracker** is a simple full-stack web application designed to help students manage their academic tasks efficiently. It allows users to add and view tasks in real time through a clean and responsive interface.

---

## 🚀 Features

- ✅ Add new student tasks with title and description  
- 📋 View a list of all added tasks  
- ⚡ Real-time API interaction using `fetch`  
- 💾 Stores data in MongoDB through FastAPI  
- 🎨 Responsive frontend built with HTML, CSS, and JavaScript  

---

## 🛠️ Tech Stack

### 🔹 Frontend:
- HTML  
- CSS  
- JavaScript (vanilla)  
- Fetch API for REST communication  

### 🔹 Backend:
- FastAPI (Python)  
- Uvicorn (ASGI server)  

### 🔹 Database:
- MongoDB (local or MongoDB Atlas)

---

## 📂 Folder Structure

student-task-tracker/
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── backend/
│ ├── main.py
│ └── requirements.txt
│
├── .gitignore
└── README.md

---

## ▶️ Getting Started

### ✅ Prerequisites

- Python 3.x  
- MongoDB installed (or MongoDB Atlas)  
- Git  
- Any browser (Chrome, Edge, etc.)

---

### 🔧 Backend Setup

1. Open terminal and go to your backend folder:
```bash
cd backend
Create and activate virtual environment:

python -m venv venv
.\venv\Scripts\activate  # Windows


Install required libraries:

pip install -r requirements.txt


Run the backend server:

uvicorn main:app --reload

🌐 Frontend Setup

Navigate to the frontend/ folder:

cd frontend


Open index.html in your browser (Right-click > Open with browser)

The frontend will now communicate with your FastAPI backend.

📡 API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Add a new task
📌 Future Improvements

 Add task deletion/editing

 Add user login and registration

 Store task completion status

 Deploy using Render or Railway

🙋‍♀️ Author

Nithika – Junior Full Stack Developer 💻
Building real-world apps with clean code and clear goals.

🏷️ Keywords

FastAPI MongoDB HTML CSS JavaScript CRUD Student Project Task Tracker Full Stack App REST API
