from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["task_db"]
task_collection = db["tasks"]
