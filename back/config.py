import os

class Config:
  SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL")
  SQLALCHEMY_TRACK_MODIFICATIONS = False
  GEOCODE = "https://geocoding-api.open-meteo.com/v1/search"
  WEATHER = "https://api.open-meteo.com/v1/forecast"