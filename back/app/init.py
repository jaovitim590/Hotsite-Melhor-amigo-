from config import Config
from apiflask import APIFlask
from app.extensions import db
from flask_cors import CORS

def create_app():
  app = APIFlask(__name__)
  CORS(app)
  app.config.from_object(Config)
  
  db.init_app(app)
  
 # from app.routes.rota import bp
  #app.register_blueprint(bp)
  
  with app.app_context():
    db.create_all()
    
  return app