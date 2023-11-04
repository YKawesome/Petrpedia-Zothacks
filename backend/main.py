from typing import Optional
import uvicorn
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import crud
import models
import schemas
from database import SessionLocal, engine
from sqlalchemy import create_engine
import pybase64

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Image Decoder


def decode_image(base64string: str,  name: str):
    '''Decodes a base64string to an image "name"'''
    decoded_data = pybase64.b64decode((base64string))
    img_file = open(f'images/{name}.jpeg', 'wb')
    img_file.write(decoded_data)
    img_file.close()


# Dependency

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/home")
def home():
    return {"message": "This is the home page"}


# *** Users ***


@app.post("/users-post/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@app.get("/users-get/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users


@app.get("/users-get/{user_id}", response_model=schemas.User)
def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = crud.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return db_user


# # *** Drops ***

@app.post("/drops-post/", response_model=schemas.Drop)
def create_drop(drop: schemas.DropCreate, db: Session = Depends(get_db)):
    return crud.create_drop(db=db, drop=drop)


@app.get("/drops-get/", response_model=list[schemas.Drop])
def read_drops(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    drops = crud.get_drops(db, skip=skip, limit=limit)
    return drops


@app.get("/drops-get/{drop_id}", response_model=schemas.Drop)
def read_drop(drop_id: int, db: Session = Depends(get_db)):
    db_drop = crud.get_drop(db, drop_id=drop_id)
    if db_drop is None:
        raise HTTPException(status_code=404, detail="Drop not found")
    return db_drop


# *** Petr Templates ***


@app.post("/templates-post/", response_model=schemas.PetrTemplate)
def create_template(drop_id: int, template: schemas.PetrTemplateCreate, db: Session = Depends(get_db)):
    drop_out_of_bounds = drop_id > len(crud.get_drops(db, limit=None))
    if drop_out_of_bounds:
        raise HTTPException(status_code=400, detail="drop_id out of bounds")
    decode_image(template.image, f'{template.creator}+{template.name}')
    template.image = f'images/{template.creator}+{template.name}.jpeg'
    return crud.create_template(db=db, template=template, drop_id=drop_id)


@app.get("/templates-get/", response_model=list[schemas.PetrTemplate])
def read_templates(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    templates = crud.get_templates(db, skip=skip, limit=limit)
    return templates


@app.get("/templates-get/{template_id}", response_model=schemas.PetrTemplate)
def read_template(template_id: int, db: Session = Depends(get_db)):
    db_template = crud.get_template(db, template_id=template_id)
    if db_template is None:
        raise HTTPException(status_code=404, detail="Petr Template not found")
    return db_template


# *** Stickers ***


@app.post("/stickers-post/", response_model=schemas.Sticker)
def create_sticker(template_id: int, user_id: int, sticker: schemas.StickerCreate, db: Session = Depends(get_db)):
    template_out_of_bounds = template_id > len(crud.get_templates(db, limit=None))
    user_out_of_bounds = user_id > len(crud.get_users(db, limit=None))

    if template_out_of_bounds:
        raise HTTPException(status_code=400, detail="template_id out of bounds")
    elif user_out_of_bounds:
        raise HTTPException(status_code=400, detail="user_id out of bounds")
    return crud.create_sticker(db=db, sticker=sticker, template_id=template_id, user_id=user_id)


@app.get("/stickers-get/", response_model=list[schemas.Sticker])
def read_stickers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    stickers = crud.get_stickers(db, skip=skip, limit=limit)
    return stickers


@app.get("/stickers-get/{sticker_id}", response_model=schemas.Sticker)
def read_sticker(sticker_id: int, db: Session = Depends(get_db)):
    db_sticker = crud.get_sticker(db, sticker_id=sticker_id)
    if db_sticker is None:
        raise HTTPException(status_code=404, detail="Sticker not found")
    return db_sticker


if __name__ == "__main__":
    engine = create_engine("sqlite:///backend.db")
    uvicorn.run("main:app", port=5000, reload=True)
