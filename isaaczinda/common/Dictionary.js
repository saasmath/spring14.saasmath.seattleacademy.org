var Input = [];
var Output = [];

var Add = function Add(InputString, OutputString)
{
	Input.push(InputString);
	Output.push(OutputString);
}

//returns 1 is replaced, 0 if created
var Cache = function Cache(InputString, OutputString)
{
	for(i = 0; i < Input.length; i++)
	{
		if(Input[i] == InputString)
		{
			Output[i] = OutputString;
			return 1;
		}
	}

	Add(InputString, OutputString);
	return 0;
}

var Lookup = function Lookup(InputString)
{
	for(i = 0; i < Input.length; i++)
	{
		if(Input[i] == InputString)
		{
			
			return Output[i];
		}
	}

	return null;
}

//exports
exports.Cache = Cache;
exports.Add = Add;
exports.Lookup = Lookup;
exports.Input = Input;
exports.Output = Output;