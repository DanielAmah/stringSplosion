
'strict'
	/* a String Splosion class that take a constructor parameter the class has a method manipulate()
	that manipulate a string e.g 'ab' => 'aab'
	*/
		const StringSplosion = class // a StringSplosion class declared using arrow function
		{
			constructor(string) // contructor that passing in a parameter string
			{
				this.string = string;  // a this method used to refer parameter for the current instance of the object
			}
			manipulate()    // a manipulate method called when an instance of the class is created.
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