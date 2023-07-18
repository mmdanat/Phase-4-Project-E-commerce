from flask import Flask, jsonify, make_response, request, abort
from flask_migrate import Migrate
from models import db, OrderItem, User, Order, Product
from flask_restful import Api, Resource

app =Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate =Migrate(app,db) 

db.init_app(app)

api= Api(app)

@app.route('/') 
def index(): 
    return '<h1>Hello World</h1>'

class OrderItems(Resource):
    def get(self):
        order_items_list = [order_item.to_dict() for order_item in OrderItem.query.all()]

        response = make_response(
            order_items_list, 200
        )

        return response

    def post(self):
        request_json = request.get_json()

        new_order_item = OrderItem(
            quantity=request_json['quantity'], 
            order_id=request_json['order_id'], 
            product_id=request_json['product_id']
            )

        db.session.add(new_order_item)

        db.session.commit()

        response = make_response(
            new_order_item.to_dict(), 201
        )

        return response

api.add_resource(OrderItems, '/order_items')

class OrderItemsById(Resource):
    def patch(self, id):
        order_item = OrderItem.query.filter(OrderItem.id == id).first()

        if not order_item:
            abort(404, "The order item could not be found")

        request_json = request.get_json()

        for key in request:
            setattr(order_item, key, request_json[key])

        db.session.add(order_item)

        db.session.commit()

        response = make_response(
            order_item.to_dict(),
            200
        )

        return response

api.add_resource(OrderItemsById, '/order_items/<int:id>')