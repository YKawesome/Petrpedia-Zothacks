from pydantic import BaseModel

# *** Stickers ***


class StickerBase(BaseModel):
    current_location: str
    willing_to_trade: bool


class StickerCreate(StickerBase):
    pass


class Sticker(StickerBase):
    id: int
    owner_id: int
    template_id: int

    class Config:
        from_attributes = True


# *** Petr Templates ***


class PetrTemplateBase(BaseModel):
    name: str
    creator: str
    number_of_stickers: int
    image: str


class PetrTemplateCreate(PetrTemplateBase):
    pass


class PetrTemplate(PetrTemplateBase):
    id: int
    drop_id: int
    stickers: list['Sticker']

    class Config:
        from_attributes = True


# *** Drops ***


class DropBase(BaseModel):
    drop_location: str


class DropCreate(DropBase):
    pass


class Drop(DropBase):
    id: int
    stickers: list['PetrTemplate'] = []

    class Config:
        from_attributes = True




# *** Users ***


class UserBase(BaseModel):
    name: str
    email: str


class UserCreate(UserBase):
    pass


class User(UserBase):
    id: int
    stickers: list['Sticker'] = []

    class Config:
        from_attributes = True
