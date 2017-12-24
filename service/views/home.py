from flask import (
    render_template, jsonify, request
)

from service import app, db
from service.models.user import User


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


@app.route('/demo_content/')
def demo_content():
    content = {
        "name": "Awesome App",
    }
    return jsonify(content)


@app.route('/users/', methods=["POST"])
def insert_user():
    user_info = request.json

    if not user_is_valid(user_info):
        return jsonify("User data is not valid"), 400

    new_user = User(
        username=user_info['username'],
        email=user_info['email']
    )
    db.session.add(new_user)
    db.session.commit()
    # users = User.query.all()
    return "success"


def user_is_valid(data):
    if not any([
        data.get('username'),
        data.get('password'),
        data.get('email')
    ]):
        return False
    return True
