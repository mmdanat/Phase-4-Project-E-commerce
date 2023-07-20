from app import app
from models import db, User,Order,OrderItem,Product
from faker import Faker

fake = Faker()


if __name__ == '__main__':

    with app.app_context():

        # Clear data from tables
        User.query.delete()
        Order.query.delete()
        OrderItem.query.delete()
        Product.query.delete()

          # Seed products
        products = [
            Product (
                name= "Shower Water",
                image= "",
                price= 200.00,
                product_description = ""
            ), 
            Product (
                name= "Hose Water",
                image= "",
                price= 300.00,
                product_description = ""
            ), 
            Product (
                name= "Thirsty?",
                image= "",
                price= 300.00,
                product_description = ""
            ), 
            Product (
                name= "Pool Day",
                image= "",
                price= 300.00,
                product_description = ""
            ), 
             Product (
                name= "Thirsty Thursday",
                image= "",
                price= 300.00,
                product_description = ""
            ), 
            Product (
                name= "Thirsty Thursday",
                image= "",
                price= 300.00,
                product_description = ""
            )
        ]

        db.session.add_all(products)
        db.session.commit()
        
        
        # Seed users
        users = []
        order_items = []
        
        for i in range (5):
            fake_user = User(
                name = fake.name(),
                mail_address = fake.street_address(),
                email_address = fake.email()
            )
            db.session.add(fake_user)
            db.session.commit()

            orders = []
            orders.append(
                Order(user_id = fake_user.id)
            )
            db.session.add_all(orders)
            db.session.commit()

            for order in orders:
                product_id = products[0].id
                order_items.append(
                    OrderItem(order_id = order.id, product_id = product_id, quantity = 5) 
                )
            db.session.add_all(order_items)
            db.session.commit()

      


        

        
        


        





