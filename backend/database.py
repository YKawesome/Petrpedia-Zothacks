from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
# database.py
# This file makes our database session, so
# that we have easy access to make snap edits to it
# through our methods.
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///backend.db"
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()