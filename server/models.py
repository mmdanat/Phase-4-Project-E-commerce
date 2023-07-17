from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



class Service(db.Model):
    __tablename__ = 'services' 

    id = db.Column(db.Integer,primary_key=True)  
    name = db.Column(db.String)
    price = db.Column(db.Float) 
    created_at = db.Column(db.DateTime,server_default =db.func.now())
    updated_at =db.Column(db.DateTime, onupdate = db.func.now())

    def __repr__(self): 
        return f'<Service Name {self.name}, Price ${self.price}>' 