from flask import Flask
from flask import request
from flask_cors import CORS
from PIL import Image
from classifier import Classifier

cls = Classifier('model.trc')

app = Flask(__name__)

CORS(app)

def make_magic(img):
    return {'class': 'sunflower', 'accuracy': 95}

@app.post("/")
def handle_post():
    if 'file' not in request.files:
        return {'status': True, 'message': 'Error',  'payload': response_model}

    file = request.files['file']
    file = Image.open(file)

    response_model = make_magic(file)
    return {'status': True, 'message': 'OK',  'payload': response_model}

@app.get("/")
def handle_get():
    return 'La mejor línea de código es la que no existe. -Elon Musk'
    