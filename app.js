// Chapter # 21-25 - Start

// Chapter # 21-25 - Task # 1

var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName + " " + lastName;

alert("Hello " + fullName);

// Chapter # 21-25 - Task # 2

var favouriteMobile = prompt("Enter your favourite mobile model");
var charsInFavMob = favouriteMobile.length;

document.write("My favourite phone is : " + favouriteMobile + "<br />Length of string is : " + charsInFavMob);

// Chapter # 21-25 - Task # 3

var countryMen = "Pakistani";
var cahrIndex = countryMen.indexOf("n");

document.write("String : " + countryMen + "<br />Index of 'n' is : " + cahrIndex);

// Chapter # 21-25 - Task # 4

var greet = "Hello World";
var cahrIndex = greet.lastIndexOf("l");

document.write("String : " + greet + "<br />Last index of 'l' is : " + cahrIndex);

// Chapter # 21-25 - Task # 5

var countryMen = "Pakistani";
var cahrAtIndex = countryMen.charAt(3);

document.write("String : " + countryMen + "<br />Character at index at 3 is : " + cahrAtIndex);

// Chapter # 21-25 - Task # 6

var firstName = prompt("Enter your First Name");
var lastName = prompt("Enter your Last Name");
var fullName = firstName.concat(" ",lastName);

alert("Hello " + fullName);

// Chapter # 21-25 - Task # 7

var city = "Hyderabad";
var replaceCity = city.replace("Hyder", "Islam");

document.write("City : " + city + "<br />After Replacement : " +replaceCity);

// Chapter # 21-25 - Task # 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replaceMessage = message.replace(/and/g, "&");

document.write("Message before Replacement : " + message + "<br />");
document.write("Message After Replacement : " + replaceMessage);

// Chapter # 21-25 - Task # 9

var numberAsString = "472";
var stringToNumber = Number(numberAsString);

document.write("Value : " + numberAsString + "<br /> Type : String <br />");
document.write("Value : " + stringToNumber + "<br /> Type : Number");

// Chapter # 21-25 - Task # 10

var name = prompt("Enter your Name");
var capsName = name.toUpperCase();

document.write("User Input : " + name + "<br />");
document.write("Upper Case : " + capsName);

// Chapter # 21-25 - Task # 11

var name = prompt("Enter your Name");

var firstCharacter = name.slice(0, 1);
var remainigCharacters = name.slice(1);

firstCharacter = firstCharacter.toUpperCase();
remainigCharacters = remainigCharacters.toLowerCase();

var titleCase = firstCharacter + remainigCharacters;

document.write("User Input : " + name + "<br />");
document.write("Title Case : " + titleCase);

// Chapter # 21-25 - Task # 12

var num = 35.36;

var numToString = num.toString();
var afterRemDec = numToString.replace(".", "");


document.write("Number : " + num + "<br />");
document.write("Result : " + afterRemDec);

// Chapter # 21-25 - Task # 13

var username = prompt("Enter Your Name");

for (var i = 0; i < username.length; i++)
{
    if (username.charAt(i) === "!" || username.charAt(i) === "." || username.charAt(i) === "," || username.charAt(i) === "@")
    {
        alert("Please enter a valid username");
    }
}

// Chapter # 21-25 - Task # 14

var a = ["cake", "apple pie", "cookie", "chips", "patties"];

var order = prompt("Welcome to ABC Bakery. What do you want to order Sir/Ma'am?");
order = order.toLowerCase();

for (var i = 0; i <= 4; i++)
{
if (order === a[i])
{
    alert(order + " is available at index " + a.indexOf(order) + " in our bakery.");
    break;
}
}
if (order !== a[i])
{
    alert("We are Sorry, " + order + " is not available in our bakery.");
}

// Chapter # 21-25 - Task # 15

var check = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var password = prompt("Enter your password. \n It should contain alphabets and numbers. \n It should not start with a number. \n It must at least 6 characters long.");
var firstChar = password.slice(0, 1);
var passLength = password.length;

for (var i = 0; i <= 9; i++ )
{
if (firstChar !== check[i] && passLength >= 6)
{
    alert("Correct Password");
    break;
}
else if (firstChar === check[i])
{
    alert("Password can not begin with a number. \nPlease enter a valid password.");
    break;
}
else if (passLength < 6)
{
    alert("Password can not less then 6 characters. \nPlease enter a valid password.");
    break;
}
}

// Chapter # 21-25 - Task # 16

var university = "University of Karachi";
var array = [];
array = university.split("");

for (var i = 0; i <= 20; i++)
{
    document.write(array[i] + "<br />");
}

// Chapter # 21-25 - Task # 17

var country = prompt("Enter your Country Name");
var lastCharOfCountry = country.charAt(country.length - 1);

document.write("User input : " + country + "<br />");
document.write("Last Character of input is : " + lastCharOfCountry);

// Chapter # 21-25 - End


// Chapter # 26-30 - Start

// Chapter # 26-30 - Task # 1

var number = +prompt("Enter a positive number in fraction");

if (number >= 0)
{
    var roundOffNumber = Math.round(number);
    var ceilNumber = Math.ceil(number);
    var floorNumber = Math.floor(number);
    
    document.write("Number : " + number + "<br />");
    document.write("Round off Value : " + roundOffNumber + "<br />");
    document.write("Ceil Value : " + ceilNumber + "<br />");
    document.write("Floor Value : " + floorNumber);
}
else
{
    alert("Please enter a positive number in fraction");
}

// Chapter # 26-30 - Task # 2

var number = +prompt("Enter a negative number in fraction");

if (number < 0)
{
    var roundOffNumber = Math.round(number);
    var ceilNumber = Math.ceil(number);
    var floorNumber = Math.floor(number);
    
    document.write("Number : " + number + "<br />");
    document.write("Round off Value : " + roundOffNumber + "<br />");
    document.write("Ceil Value : " + ceilNumber + "<br />");
    document.write("Floor Value : " + floorNumber);
    }
else
{
    alert("Please enter a negative number in fraction");
}

// Chapter # 26-30 - Task # 3

var number = +prompt("Enter a number");

var absoluteNumber = Math.abs(number);

document.write("The absolute value of " + number + " is " + absoluteNumber);

// Chapter # 26-30 - Task # 4

var diceRandom = Math.random();
var diceRandomLimit = (diceRandom * 6) + 1;
var diceNumberRoundingDown = Math.floor(diceRandomLimit);

document.write("random dice value : " + diceNumberRoundingDown);

// Chapter # 26-30 - Task # 5

var coinRandom = Math.random();
var coinRandomLimit = (coinRandom * 2) + 1;
var coinNumberRoundingDown = Math.floor(coinRandomLimit);

if (coinNumberRoundingDown == 1)
{
    document.write(coinNumberRoundingDown + "<br /> random coin value : Tails");
}
else
{
    document.write(coinNumberRoundingDown + "<br /> random coin value : Heads");
}

// Chapter # 26-30 - Task # 6

var randomNumber = Math.random();
var randomNumberLimit = (randomNumber * 100) + 1;
var randomNumberRoundingDown = Math.floor(randomNumberLimit);

document.write("Random number between 1 and 100 : " + randomNumberRoundingDown);

// Chapter # 26-30 - Task # 7

var userWeight = prompt("Enter your weight in kilograms");
var result = parseFloat(userWeight);

document.write("The weight of user is : " + result + " kilograms");

// Chapter # 26-30 - Task # 8

var randomNumber = Math.random();
var randomNumberLimit = (randomNumber * 10) + 1;
var randomNumberRoundingDown = Math.floor(randomNumberLimit);
var secretNumber = randomNumberRoundingDown;

var userguess = +prompt("Enter a number between 1 and 10");

if (userguess === secretNumber)
{
    document.write("Congratulations! your guess is correct.");
}
else
{
    document.write("Sorry! Try again.");

}

// Chapter # 26-30 - End


// Chapter # 31-34 - Start

// Chapter # 31-34 - Task # 1

var currentDateTime = new Date();

document.write(currentDateTime);

// Chapter # 31-34 - Task # 2

var months = ["January", "February", "March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"]

var currentDate = new Date();
var currentMonthInNumber = currentDate.getMonth();
var currentMonthInWords = months[currentMonthInNumber];

alert("Current Month : " + currentMonthInWords);

// Chapter # 31-34 - Task # 3

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var currentDate = new Date();
var currentDayInNumber = currentDate.getDay();
var currentDayInWords = days[currentDayInNumber];
var dayNameLength = currentDayInWords.length;

if (dayNameLength > 3)
{
    dayAbbreviation = currentDayInWords.slice(0,3);
}
alert("Today is : " + dayAbbreviation);

// Chapter # 31-34 - Task # 4

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var currentDate = new Date();
var currentDayInNumber = currentDate.getDay();
var currentDayInWords = days[currentDayInNumber];

if (currentDayInWords === "Saturday" || currentDayInWords === "Sunday")
{
    alert("It's Fun Day");
}

// Chapter # 31-34 - Task # 5

var currentDate = new Date();
var dayOfMonthInNumber = currentDate.getDate();

if (dayOfMonthInNumber < 16)
{
    alert("First fifteen days of the month");
}
else
{
    alert("Last fifteen days of the month");
}

// Chapter # 31-34 - Task # 6

var currentDate = new Date();
var milliSeconds = currentDate.getTime();
var minutes = milliSeconds / (1000 * 60);

document.write("Current Date : " + currentDate + "<br />Elapsed milliseconds since January 1, 1970 : " + milliSeconds + "<br />Elapsed minutes since January 1, 1970 : " + minutes);

// Chapter # 31-34 - Task # 7

var currentDate = new Date();
var hoursInNumber = currentDate.getHours();

if(hoursInNumber < 12)
{
    alert("It's AM");
}
else
{
    alert("It's PM");
}

// Chapter # 31-34 - End

