from service.models.user import User


def authenticate(username, password):
    print('authenticate = ', username, flush=True)
    my_user = User.query.filter_by(username=username).first()
    print(my_user.as_json(), flush=True)
    print('-----', flush=True)
    if my_user and my_user.password == password:
        print('pass IS correct', flush=True)
        return my_user
    else:
        print("pass IS NOT correct", flush=True)


def identity(payload):
    print('identity() payload = ', payload, flush=True)
    my_user = User.query.filter_by(id=payload['identity']).first()
    if my_user:
        return my_user.as_json()
    # return userid_mapping.get(user_id, None)
