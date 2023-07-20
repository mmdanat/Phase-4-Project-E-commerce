from app import app
from models import db, User,Order,OrderItem,Product

if __name__ == '__main__':

    with app.app_context():

        # Clear data from tables
        User.query.delete()
        Order.query.delete()
        OrderItem.query.delete()
        Product.query.delete()

        # Seed users
        u1 = User(name = "Mary", mail_address = "123 street", email_address = 'hi@hi.com')
        u2 = User(name = "Alice", mail_address = "456 street", email_address = 'bye@bye.com')
        users = [u1,u2]

        db.session.add_all(users)
        db.session.commit()

        # Seed products
        product1 = Product(name = "Watershed", image = "image", price = 20)
        product2 = Product(name = "Hose", image = "image", price = 40)
        products = [product1,product2]

        db.session.add_all(products)
        db.session.commit()

        # Seed orders
        order1 = Order(user_id = u1.id)
        order2 = Order(user_id = u2.id)
        orders = [order1,order2]

        db.session.add_all(orders)
        db.session.commit()

        # Seed order items
        orderitem = OrderItem(order_id = order1.id, product_id = product1.id, quantity = 5)
        orderitem2 = OrderItem(order_id = order2.id, product_id = product2.id, quantity = 6)
        orderitem3 = OrderItem(order_id = order1.id, product_id = product2.id, quantity = 5)
        orderitems = [orderitem,orderitem2,orderitem3]

        db.session.add_all(orderitems)
        db.session.commit()

        

        
        


        





