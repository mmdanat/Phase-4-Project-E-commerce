from flask import Flask,jsonify,make_response,request
from flask_migrate import Migrate
from models import db,OrderItem,User,Order,Product
from flask_restful import Api, Resource


app =Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate =Migrate(app,db) 

db.init_app(app)

api= Api(app)

@app.route('/') 
def index(): 
    return '<h1>Hello World</h1> '