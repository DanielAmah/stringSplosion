'strict'

	const StringSplosion = class 
	{
		constructor(string)
		{
			this.string = string;
		}
		manipulate()
		{
		  const string_array = [];
		  for(let counter = 1; counter <= this.string.length; counter++){
			let subString = this.string.substr(0, counter);
			string_array.push(subString);
		  }
		  return string_array.join('');
		}
		
	}
	
	module.exports = StringSplosion;