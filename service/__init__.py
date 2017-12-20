from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.url_map.strict_slashes = False
app.config.from_object('service.config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

import service.views # noqa
import service.models # noqa
