import urllib2
import time

GlobalData = []
X = 0
Y = 0

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
	Data = ReadData("http://saasmath.seattleacademy.org:443?user=" + User + "&data=" + str(XPosition) + "," + str(YPosition))
	if Data != "":
		GlobalData = ParseData(Data)
		print(GlobalData)
	else:
		print "Error"


Start = int(round(time.time() * 1000))

for i in range(0, 20):
	UpdateStates("Isaac", 69, 698)

End = int(round(time.time() * 1000))

print((End - Start) / 20)