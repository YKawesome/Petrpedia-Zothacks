from sqlalchemy.orm import Session
import models
import schemas

# *** Users ***


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(name=user.name, email=user.email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# *** Stickers ***


def get_sticker(db: Session, sticker_id: int):
    return db.query(models.Sticker).filter(models.Sticker.id == sticker_id).first()


def get_stickers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Sticker).offset(skip).limit(limit).all()


def create_sticker(db: Session, sticker: schemas.Sticker, user_id: int, template_id: int):
    db_sticker = models.Sticker(**sticker.dict(), owner_id=user_id, template_id=template_id)
    db.add(db_sticker)
    db.commit()
    db.refresh(db_sticker)
    return db_sticker


# *** Drops ***


def get_drop(db: Session, drop_id: int):
    return db.query(models.Drop).filter(models.Drop.id == drop_id).first()


def get_drops(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Drop).offset(skip).limit(limit).all()


def create_drop(db: Session, drop: schemas.DropCreate):
    db_user = models.Drop(drop_location=drop.drop_location)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


# *** Templates ***


def get_templates(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.PetrTemplate).offset(skip).limit(limit).all()


def create_template(db: Session, template: schemas.PetrTemplateCreate, drop_id: int):
    db_template = models.PetrTemplate(**template.dict(), drop_id=drop_id)
    db.add(db_template)
    db.commit()
    db.refresh(db_template)
    return db_template
