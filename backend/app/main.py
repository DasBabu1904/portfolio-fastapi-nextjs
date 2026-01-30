from fastapi import FastAPI
import os

app = FastAPI()

# DB connection env (just for demo)
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")

@app.get("/")
def root():
    return {
        "message": "Hello from FastAPI!",
        "db_host": DB_HOST,
        "db_name": DB_NAME,
        "db_user": DB_USER
    }

# Example API route
@app.get("/api/hello")
def say_hello(name: str = "World"):
    return {"greeting": f"Hello, {name}!"}
