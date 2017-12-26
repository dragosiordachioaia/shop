from service import db


class BlacklistedJWT(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(250), unique=False, nullable=False)

    def __repr__(self):
        return '<Blacklisted JWT %r>' % self.token

    def as_json(self):
        return {
            "id": self.id,
            "token": self.token,
        }
