from flask import Flask, request
from datetime import datetime
from flask_socketio import SocketIO, emit
from flask_cors import CORS, cross_origin


app = Flask(__name__)
# app.config['SECRET_KEY'] = 'secret!'
CORS(app)
socketio = SocketIO(app, cors_allowed_origins="*")
clientsListening=[]

@socketio.on('connect')
def on_connect(sid):
    print('connection is requested by', request.sid)
    global clientsListening
    clientsListening.append(request.sid)
    emit('is connected')


@socketio.on('timer')
def givingTimeEverySec():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    emit('timer', current_time )
    print(current_time)
    socketio.sleep(1)
    if request.sid in clientsListening:
      givingTimeEverySec()

@socketio.on('disconnect')
def closing_connection():
    clientsListening.remove(request.sid)
    print('closing connection')


if __name__ == '__main__':
    socketio.run(app)
