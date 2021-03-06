from datetime import timedelta
from flask import (
    render_template, jsonify, request
)
from werkzeug.routing import BaseConverter

from flask_restful import Resource, Api
from flask_jwt import JWT, jwt_required, current_identity, _jwt_required, JWTError
from service import app, db
from service.security import authenticate, identity
from service.models.user import User
from service.models.blacklisted_jwt import BlacklistedJWT

app.config['SECRET_KEY'] = 'super-secret'
app.config['JWT_DEFAULT_REALM'] = 'Login Required'
app.config['JWT_EXPIRATION_DELTA'] = timedelta(
    days=1,
    seconds=0,
    microseconds=0
)

api = Api(app)

jwt = JWT(app, authenticate, identity)


def check_login():
    is_logged_in = False
    try:
        _jwt_required(app.config['JWT_DEFAULT_REALM'])
        is_logged_in = True
    except:
        is_logged_in = False
    return is_logged_in


# class UsersResource(Resource):
#     # @jwt_required()
#     def get(self):
#         print("__________", flush=True)
#         print(request.headers, flush=True)
#         print("__________", flush=True)
#         # is_logged_in = check_login()
#         # print("is_logged_in: ", is_logged_in, flush=True)
#         # print('auth credentials =', current_identity, flush=True)
#         users = User.query.all()
#         # print('users = ', users, flush=True)
#         users_json = [user.as_json() for user in users]
#         return users_json


@app.route('/users')
def users():
    print("__________HEADERS", flush=True)
    print(request.headers, flush=True)
    print("__________JSON", flush=True)
    print(request.json, flush=True)
    print("__________", flush=True)
    # is_logged_in = check_login()
    # print("is_logged_in: ", is_logged_in, flush=True)
    # print('auth credentials =', current_identity, flush=True)
    users = User.query.all()
    # print('users = ', users, flush=True)
    users_json = [user.as_json() for user in users]
    return jsonify(users_json)


@app.route('/help')
@jwt_required()
def get_help():
    return jsonify({"help": "This is your help message. You're logged in!"})


@app.route('/user_details')
@jwt_required()
def get_user_details():
    print('auth credentials =', current_identity, flush=True)
    return jsonify({
        "username": current_identity['username'],
        "email": current_identity['email']
    })


@app.route('/logout', methods=["POST"])
def logout():
    new_token = BlacklistedJWT(
        token=request.json['token'],
    )
    db.session.add(new_token)
    db.session.commit()
    return "Success"


@app.route('/')
@app.route('/<path:path>')
def home(path=""):
    return render_template('index.html')
























#
#
#
# @app.route('/', defaults={'path': ''})
# @app.route('/<path:path>')
# def index(path):
#     return render_template('index.html')
#
#
# @app.route('/demo_content/')
# def demo_content():
#     content = {
#         "name": "Awesome App",
#     }
#     return jsonify(content)
#
#
# @app.route('/users/', methods=["POST"])
# def insert_user():
#     user_info = request.json
#
#     if not user_is_valid(user_info):
#         return jsonify("User data is not valid"), 400
#
#     new_user = User(
#         username=user_info['username'],
#         email=user_info['email']
#     )
#     db.session.add(new_user)
#     db.session.commit()
#     # users = User.query.all()
#     return "success"
#
#
# def user_is_valid(data):
#     if not any([
#         data.get('username'),
#         data.get('password'),
#         data.get('email')
#     ]):
#         return False
#     return True
