import os

SECRET_KEY = '-4jwds+-%ivjvxjdm_vw_w(ro9h1w&ebr*b8gc&n5(hw%)=dtc'

DEFAULT_TIMEZONE = 'Europe/London'

# database
SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
SQLALCHEMY_TRACK_MODIFICATIONS = False

mysql_address = os.environ.get('DB_HOST', 'localhost')
mysql_user = os.environ.get('DB_USER', 'seating')
mysql_password = os.environ.get('DB_PASS', 'seating')
mysql_database = os.environ.get('DB_NAME', 'seating')

# flask
service_mode = os.environ.get('SERVICE_MODE')
travis = os.environ.get('TRAVIS')

if service_mode == 'prod' or service_mode == 'staging':
    DEBUG = False
    TESTING = False
    SQLALCHEMY_ECHO = False

elif service_mode == 'test':
    DEBUG = False
    TESTING = True
    SQLALCHEMY_ECHO = False
    # Use local MySQL DB for testing
    mysql_address = '127.0.0.1'
    mysql_user = 'seating'
    mysql_password = 'seating'
    mysql_database = 'seating'
    if travis:
        mysql_user = 'travis'
        mysql_password = ''

elif service_mode == 'dev' or not service_mode:
    DEBUG = True
    TESTING = False
    SQLALCHEMY_ECHO = False

mysql = any([mysql_address, mysql_user, mysql_password, mysql_database])

if mysql:
    mysql_uri = 'mysql+pymysql://{user}:{password}@{address}/{database}'
    SQLALCHEMY_DATABASE_URI = mysql_uri.format(
        user=mysql_user,
        password=mysql_password,
        address=mysql_address,
        database=mysql_database,
    )
