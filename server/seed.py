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
                image= "https://assets.wfcdn.com/im/01748880/resize-h445%5Ecompr-r85/3357/33579467/7+Color+LED+1.7+GPM+Shower+Head.jpg",
                price= 200.00,
                product_description = "This purchase gets you 30 minutes of high water pressure for use in one of your showers, or 30 minutes of low water pressure for use in two of your showers."
            ), 
            Product (
                name= "Hose Water",
                # image= "https://www.highpressure-hose.com/high-pressure-hose/high-pressure-garden-hose.jpg",
                image="https://media.istockphoto.com/id/149079165/photo/water-coming-out-of-garden-hose.jpg?s=170667a&w=0&k=20&c=QIKvbhqj1gksevqihSFJeK5YF6_SZsv6wql1WZ03GGQ=",
                price= 300.00,
                product_description = "Trying to grow your own garden? Pay only $315 for 45 minutes of hose water to water your crops."
            ), 
            Product (
                name= "Laundry Day",
                image= "https://kitchenaid-h.assetsadobe.com/is/image/content/dam/business-unit/maytag/en-us/marketing-content/site-assets/page-content/oc-articles/how-many-gallons-of-water-do-washing-machines-use-/Image_2_Mobile.png?fmt=png-alpha&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0&scl=1&constrain=fit,1",
                price= 365.00,
                product_description = "Is it that dreaded laundry day again? You can buy water for two full laundry loads of water for only $365! Like to separate your whites, colors, and black? for the same price you can do 5 small loads of laundry!"
            ), 
            Product (
                name= "Pool Day",
                image= "https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=",
                price= 555.00,
                product_description = "Stay cool in the sweltering summer heat for the small price of $550 to enjoy your backyard pool!"
            ), 
             Product (
                name= "Thirsty Thursday",
                image= "https://api.hub.jhu.edu/factory/sites/default/files/styles/soft_crop_1300/public/ww-hydration-hub.jpg",
                price= 75.00,
                product_description = "Stay hydrated folks. This purchase includes 30 gallons of drinking water."
            ), 
            Product (
                name= "Dishwasher Water",
                image= "https://applianceexpresstx.com/wp-content/uploads/2019/08/P170116_1z.jpeg",
                price= 480.00,
                product_description = "Running short on time and want to use your dishwasher instead of hand washing your dishes? Now you can do 2 loads for the small price of $480."
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
                product2_id = products[1].id
                order_items.append(
                    OrderItem(order_id = order.id, product_id = product_id, quantity = 1),
                )
                order_items.append(
                    OrderItem(order_id = order.id, product_id = product2_id, quantity = 1)
                )
            db.session.add_all(order_items)
            db.session.commit()

      


        

        
        


        





