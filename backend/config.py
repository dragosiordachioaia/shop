import os

# flask
service_mode = os.environ.get('SERVICE_MODE')

if service_mode == 'prod' or service_mode == 'staging':
    DEBUG = False
    TESTING = False

elif service_mode == 'test':
    DEBUG = False
    TESTING = True

elif service_mode == 'dev' or not service_mode:
    DEBUG = True
    TESTING = False
