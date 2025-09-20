from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId

from models import Task
from database import task_collection

app = FastAPI()

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "FastAPI backend is working!"}

@app.get("/tasks")
def get_tasks():
    tasks = []
    for task in task_collection.find():
        tasks.append({
            "id": str(task["_id"]),
            "title": task["title"],
            "description": task["description"]
        })
    return tasks

@app.post("/tasks")
def add_task(task: Task):
    new_task = {
        "title": task.title,
        "description": task.description
    }
    result = task_collection.insert_one(new_task)
    return {"id": str(result.inserted_id)}

@app.delete("/tasks/{task_id}")
def delete_task(task_id: str):
    result = task_collection.delete_one({"_id": ObjectId(task_id)})
    if result.deleted_count == 1:
        return {"message": "Task deleted"}
    raise HTTPException(status_code=404, detail="Task not found")

