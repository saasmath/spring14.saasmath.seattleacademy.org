from Tkinter import *
import time
import socket

#Canvas
Master = Tk()
Canvas = Canvas(Master, width=500, height=500)
MouseX = 0;
MouseY = 0;

#Socket
#TCP_IP = '10.48.102.173'
#TCP_PORT = 443
#BUFFER_SIZE = 1024
#s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#s.connect((TCP_IP, TCP_PORT))


def ClearCanvas():
    #Wipe screen
    Canvas.delete(ALL)

def Draw():
    #Draw
    Canvas.create_rectangle(200, 200, 300, 300, fill="blue")
    Canvas.create_line(250, 250, MouseX, MouseY)
    

    #Update
    Canvas.pack()
    Master.update()

def UpdateMouse():
    global MouseX
    global MouseY
    x,y = Canvas.winfo_pointerxy()
    MouseX = Canvas.canvasx(x)
    MouseY = Canvas.canvasy(y)

def UpdateTCP():
    MESSAGE = '{"Command": "Drive", "Arguments": {"Right": ' + str(100 - (MouseX - 250) / 2.5) + ', "Left":' + str(100 + (MouseX - 250) / 2.5) + '}}'

    print(MESSAGE)

    #s.send(MESSAGE)
    #data = s.recv(BUFFER_SIZE)
    #s.close()



while(1==1):
    ClearCanvas()
    Draw()
    UpdateMouse()
    UpdateTCP()
    time.sleep(.1)
    
