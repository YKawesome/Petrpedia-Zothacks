"""
app.py

This one file is all you need to start off with your FastAPI server!
"""

from typing import Optional

import uvicorn
from fastapi import FastAPI, status

from sqlalchemy import create_engine
from sqlalchemy_utils import database_exists, create_database

from pydantic import BaseModel
from PIL import Image
from datetime import datetime
# Initializing and setting configurations for your FastAPI application is one
# of the first things you should do in your code.
app = FastAPI()


# The line starting with "@" is a Python decorator. For this tutorial, you
# don't need to know exactly how they work, but if you'd like to read more on
# them, see https://peps.python.org/pep-0318/.
#
# In short, the decorator declares the function it decorates as a FastAPI route
# with the path of the provided route. This line declares that a new GET route
# called "/" so that if you access "http://localhost:5000/", the below
# dictionary will be returned as a JSON response with the status code 200.
#
# For any other routes you declare, like the `/home` route below, you can access
# them at "http://localhost:5000/home". Because of this, we'll be omitting the
# domain portion for the sake of brevity.
@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/home")
def home():
    return {"message": "This is the home page"}


# The routes that you specify can also be dynamic, which means that any path
# that follows the format `/items/[some integer]` is valid. When providing
# such path parameters, you'll need to follow this specific syntax and state
# the type of this argument.
#
# This path also includes an optional query parameter called "q". By accessing
# the URL "/items/123456?q=testparam", the JSON response:
#
# { "item_id": 123456, "q": "testparam" }
#
# will be returned. Note that if `item_id` isn't an integer, FastAPI will
# return a response containing an error statement instead of our result.
@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}


# TODO: Add POST route for demo


class PetrTemplate(BaseModel):
    dropper: str
    creator: str
    image: Image
    template_ID: int
    number_of_stickers: int
    drops_in: list['Drop']


class Drop(BaseModel):
    location: str
    drop_ID: int
    participants: list[str]
    stickers: list[int]
    date: datetime


class Sticker(BaseModel):
    drop_ID: int
    template_ID: int
    drop: int
    location: str
    willing_to_trade: bool


class User(BaseModel):
    name: str
    email: str
    sticker_list: list[str]


@app.post("/petr-templates-post")
async def create_petr_template(petr_template: PetrTemplate):
    return petr_template


@app.post("/stickers-post")
async def create_sticker(sticker: Sticker):
    return sticker


@app.post("/drops-post")
async def create_drop(drop: Drop):
    return drop


@app.post("/users-post")
async def create_user(user: User):
    return user


if __name__ == "__main__":
    engine = create_engine("sqlite:///backend.db")
    uvicorn.run("main:app", port=5000, reload=True)
