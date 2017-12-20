import os

# from flask_sqlalchemy import SQLAlchemy
from service import db
from service.models.user import User

from service import app
# from backend import utils


@app.route('/')
def home():
    return "hello there, stranger!"


@app.route('/var/')
def var():
    POSTGRES_URL = os.environ.get('POSTGRES_URL', 'sucker')
    return POSTGRES_URL


@app.route('/users/', methods=["POST"])
def insert_user():
    new_user = User(username='dragos', email='xdragosy@gmail.com')
    db.session.add(new_user)
    db.session.commit()

    users = User.query.all()
    print('users = ', users, flush=True)
    return "success"
