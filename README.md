# Phase-4-Project-E-commerce

# Set Up:
    
    Run in terminal:
        
        cd server
        export FLASK_APP=app.py
        export FLASK_RUN_PORT=5555
        
        flask db init
        flask db revision --autogenerate -m "Create table <table name>"
        flask db upgrade
        python seed.py
        
        python app.py

    Run front-end React:

        Run at level above server:
        npm start --prefix client