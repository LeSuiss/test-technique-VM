from flask import Flask
from datetime import datetime
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin
import time

app = Flask(__name__)
# app.config['SECRET_KEY'] = 'secret!'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")


@socketio.on('connect')
def on_connect():
    print('connection is requested')
    emit('is connectedaa')

def job():
    print("I'm working...")

@socketio.on('Timer')
def givingTime():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    emit('Timer', current_time )
    print(current_time)
    socketio.sleep(1)
    givingTime()
  
if __name__ == '__main__':
    socketio.run(app)
