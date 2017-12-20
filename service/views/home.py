from flask import (
    render_template, jsonify
)

from service import app, db
from service.models.user import User


@app.route('/')
def index():
    # return "Hello there, you"
    return render_template('index.html')


@app.route('/demo_content/')
def demo_content():
    content = {
        "name": "Awesome App",
    }
    return jsonify(content)


@app.route('/users/', methods=["POST"])
def insert_user():
    new_user = User(username='dragos', email='xdragosy@gmail.com')
    db.session.add(new_user)
    db.session.commit()
    # users = User.query.all()
    return "success"
