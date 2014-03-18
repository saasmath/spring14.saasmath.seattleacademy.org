import Tkinter

X = 0
Y = 0

def MouseMove(e):
	X = e.x
	Y = e.y

master = Tkinter.Tk()
master.bind('<Motion>', MouseMove)
canvas = Tkinter.Canvas(master, bg="blue", height=250, width=300)
canvas.pack()

while(1 == 1):
	canvas.create_rectangle(10, 50, 10, 10, fill="green")
	master.mainloop()
