## Runner
- py -m venv env
- env\Scripts\activate
- pip install flask
- set FLASK_APP=app.py
- set FLASK_ENV=development
- flask run 

## Pushing to heroku
- pip install gunicorn
- touch Procfile (web: gunicorn app:app)
- pip freeze > requirements.txt
- heroku login
- heroku create konsulta (https://konsulta.herokuapp.com/)
- git push heroku master
