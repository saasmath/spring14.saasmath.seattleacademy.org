import urllib2
import time
import Tkinter

GlobalData = []
X = 0
Y = 0

def MouseMove(e):
	global X, Y
	X = e.x
	Y = e.y

#initializes canvas
master = Tkinter.Tk()
master.bind('<Motion>', MouseMove)
canvas = Tkinter.Canvas(master, bg="blue", height=250, width=300)
canvas.pack()

def ReadData(URL):
	try:
	    content = urllib2.urlopen(URL, timeout = .2).read()
	except:
		return "";

	return content;

def ParseData(String):
	User = []
	Data = []
	Data.append([])
	Temp = ""

	Number = 1
	First = 1

	for i in range(0, len(String)):
		if String[i] == '{':
			pass

		elif String[i] == '}':
			if First == 1:
				Data.append([])

			First = 0

			Data[Number].append(Temp)

			Temp = ""
			Number = 1


		elif String[i] == ':':
			User.append(Temp)
			Temp = ""

		elif String[i] == ',':
			if First == 1:
				Data.append([])

			Data[Number].append(Temp)
			Temp = ""
			Number += 1

		else:
			Temp += String[i]

	Data[0] = User

	return Data

def UpdateStates(User, XPosition, YPosition):
	global GlobalData

	Data = ReadData("http://saasmath.seattleacademy.org:443?user=" + User + "&data=" + str(XPosition) + "," + str(YPosition))
	if Data != "":
		GlobalData = ParseData(Data)
	else:
		print "Error"

def TimeCheck():
	Start = int(round(time.time() * 1000))

	for i in range(0, 20):
		UpdateStates("Isaac", 69, 698)

	End = int(round(time.time() * 1000))

	print((End - Start) / 20)

while 1==1:
	canvas.delete("all")
	UpdateStates("Joey", X, Y)
	print(GlobalData)

	for i in range(0, len(GlobalData[0])):
		RectangleX = int(GlobalData[1][i])
		RectangleY = int(GlobalData[2][i])
		canvas.create_rectangle(RectangleX, RectangleY, RectangleX + 20, RectangleY + 20, fill="green")
	
	canvas.pack()
	master.update()
