from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from database import Base


class Drop(Base):
    __tablename__ = "drops"
    
    id = Column(Integer, primary_key=True, index=True)
    drop_location = Column(String, index=True)
    # participants: list[str]
    # stickers: list[int]
    # date: datetime

    stickers = relationship("Sticker", back_populates="drop")


class PetrTemplate(Base):  # TODO add image, drops_in
    __tablename__ = "petr_templates"

    id = Column(Integer, primary_key=True, index=True)
    creator = Column(String, index=True)
    number_of_stickers: Column(Integer, index=True)

    stickers = relationship("Sticker", back_populates="template")


class Sticker(Base):
    __tablename__ = "stickers"

    id = Column(Integer, primary_key=True, index=True)
    current_location = Column(String, index=True)
    willing_to_trade = Column(Boolean, index=True, default=False)

    owner_id = Column(Integer, ForeignKey("users.id"))
    template_id = Column(Integer, ForeignKey("petr_templates.id"))
    drop_id = Column(Integer, ForeignKey("drops.id"))

    owner = relationship("User", back_populates="stickers")
    template = relationship("PetrTemplate", back_populates="stickers")
    drop = relationship("Drop", back_populates="stickers")


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)

    stickers = relationship("Sticker", back_populates="owner")