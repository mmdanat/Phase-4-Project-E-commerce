from flask import Flask, jsonify, make_response, request
from flask_migrate import Migrate
from models import db, OrderItem, User, Order, Product
from flask_restful import Api, Resource


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db) 

db.init_app(app)

api= Api(app)

@app.route('/') 
def index(): 
    return '<h1>Hello World</h1> '

class User_two(Resource):
    def get(self):
        users = User.query.all()

        print()
        user_dict = [user.to_dict(rules = ('-orders', )) for user in users]

        response = make_response(
            jsonify(user_dict),
            200
        )

        return response
    
    def post(self):
        data = request.get_json()
        try:
            new_user = User(
                name = data['name'],
                mail_address = data['mail_address'],
                email_address = data['email_address']
                )

            db.session.add(new_user)
            db.session.commit()

            response = make_response(
                jsonify(new_user.to_dict()),
                201
            )

        except ValueError:
            response = make_response(
                {"errors":["validation errors"]},
                400
            )

        return response

api.add_resource(User_two, '/users')

@app.route('/users', methods=['GET', 'PATCH', 'POST'])
def user():
    if user:
        if request.method == 'GET':
            user_dict = user.to_dict()

            response = make_response(
                jsonify(user_dict),
                200
            )

        elif request.method == 'PATCH':
            data = request.get_json()
            try:
                for key in data:
                    setattr(user, key, data[key])

                db.session.add(user)
                db.session.commit()

                response = make_response(
                    jsonify(user.to_dict(rules = ('-orders', ))),
                    202
                )

            except ValueError:

                response = make_response(
                    {"errors":["validation errors"]},
                    400
                )

        elif request.method == "POST":
            pass
            
if __name__ == '__main__':
    app.run(port=5555, debug=True)