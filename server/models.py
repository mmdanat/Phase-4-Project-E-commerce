from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin

from sqlalchemy.orm import validates
import time


db = SQLAlchemy()



class Product(db.Model,SerializerMixin):
    __tablename__ = 'products' 

    id = db.Column(db.Integer,primary_key=True)  
    name = db.Column(db.String)
    image = db.Column(db.String) 
    price = db.Column(db.Float)
    product_description = db.Column(db.String)

    order_items = db.relationship('OrderItem', backref = 'product')

    serialize_rules = ('-order_items.product',)


class User(db.Model,SerializerMixin):
    __tablename__ = 'users' 

    id = db.Column(db.Integer,primary_key=True)  
    name = db.Column(db.String)
    mail_address= db.Column(db.String)
    email_address = db.Column(db.String) 

    orders = db.relationship('Order', backref = 'user')

    serialize_rules = ('-orders.user',)



class Order(db.Model,SerializerMixin):
    __tablename__ = 'orders' 

    id = db.Column(db.Integer,primary_key=True)  
    created_at = db.Column(db.DateTime,server_default =db.func.now())
    updated_at =db.Column(db.DateTime, onupdate = db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    order_items = db.relationship('OrderItem',cascade = "all, delete", backref = 'order')

    serialize_rules = ('-order_items.order',)

    

class OrderItem(db.Model,SerializerMixin):
    __tablename__ = 'order_items' 

    id = db.Column(db.Integer,primary_key=True)  
    quantity = db.Column(db.Integer)

    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))

    serialize_rules = ('-product.order_items', '-order.order_items')

   