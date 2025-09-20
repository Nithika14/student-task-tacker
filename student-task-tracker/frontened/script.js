const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

// API base URL
const API_URL = "http://127.0.0.1:8000";

// Load tasks when page loads
window.onload = () => {
  loadTasks();
};

// Submit form to add new task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title || !description) {
    alert("Please enter both title and description!");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });

    if (!response.ok) throw new Error("Failed to add task");

    taskForm.reset();
    loadTasks();
  } catch (error) {
    console.error(error);
    alert("Error adding task");
  }
});

// Fetch and display all tasks
async function loadTasks() {
  taskList.innerHTML = "";

  try {
    const response = await fetch(`${API_URL}/tasks`);
    const tasks = await response.json();

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${task.title}</strong><br/>
        <span>${task.description}</span>
        <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
      `;
      taskList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    alert("Error loading tasks");
  }
}

// Delete task
async function deleteTask(taskId) {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE"
    });

    if (!response.ok) throw new Error("Failed to delete task");

    loadTasks();
  } catch (error) {
    console.error(error);
    alert("Error deleting task");
  }
}
fetch('http://127.0.0.1:8000/tasks')
  .then(response => response.json())
  .then(data => console.log(data))
fetch('http://127.0.0.1:8000/tasks')
  .then(res => res.json())
  .then(data => {
    console.log("Tasks from backend:", data);
    // You can loop and display them in HTML
  })
  .catch(err => {
    console.error("Error fetching tasks:", err);
  });

