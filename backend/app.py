from flask import Flask
from flask import request

app = Flask(__name__)

def make_magic(img):
    return {'class': 'sunflower', 'accuracy': 95}

@app.post("/")
def get_class():
    print(request.files)
    img = ''
    make_magic(img)
    return "<p>Hello, World!</p>"
