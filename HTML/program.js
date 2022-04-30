// Number -> Any numerical value from Positive, Negative, Fractional, Decimal

// Syntax - To create a Variable (Temp Storage)
// var variable_name = value;

// variable_name -> Any valid text, it should contains a-z, A-Z, 0-9, _, $

var age = 28;
console.log(age);

//String -> Any text value which is typed inside '' or ""

var user_email = "karthick@gmail.com";
console.log(user_email);

// Boolean -> Either true or false

var result = true;
console.log(result);

var future_value;
console.log(future_value);

user_email = "kumar@yahoo.in";
console.log(user_email);

var first_name = "Karthick";
var last_name = "Kumar";
var age = 28;
var roll_no = 487655566;

// Object -> It is collection of Key and Values

// var variable_name = {
//   key1 : value,
//   key2 : value
// }

// key -> Similar to variable_name -> it should contains a-z, A-Z, 0-9, _, $
// value -> Number, String, Boolean, Object, Array, Function

var studentInfo = {
  first_name : "Karthick",
  last_name : "kumar",
  age : 28,
  roll_no : 487655566,
  future_value : undefined
};


// Object -> 4 operation = read value, insert new value, edit exisiting value, delete existing value

// To Read a Value -> object_variable_name.key;
console.log(studentInfo.first_name);
console.log(studentInfo.age);

// To Insert a new Value -> object_variable_name.newKey = value;

studentInfo.blood_group = "A +ve";

// To Edit/Updated an exisiting value -> object_variable_name.existing_key = new_value;

studentInfo.roll_no = "7WRSD544555";

// To delete a existing Record -> delete object_variable_name.key
delete studentInfo.first_name;
console.log(studentInfo)

//Array -> It is a collection of List data

// Syntax of creating an Array

// var variable_name = [ value_1, value_2, ... , Value_n ];

// value -> Number, String, Boolean, Object, Array, Function

var listOfMark = [70, 89, 45, 78, 54];

var nameList = ["karthick","karthick", "karthick","karthick", "karthick"];

var studentList = [
  { name : "Karthick", age : 24},
  {name : "Ak", age : 20},
  { name : "Yuvi", age : 25}
];

console.log(studentList);