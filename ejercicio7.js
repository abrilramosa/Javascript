// Part 1: switch case that shows a string from a number
function getMonthString (num){
    var month;
    switch(num){
        case 1:
            month = "January";
        break;
        case 2:
            month = "February";
        break;
        case 3:
            month = "March";
        break;
        case 4:
            month = "April";
        break;
        case 5:
            month = "May";
        break;
        case 6:
            month = "June";
        break;
        case 7:
            month = "July";
        break;
        case 8:
            month = "August";
        break;
        case 9:
            month = "September";
        break;
        case 10:
            month = "October";
        break;
        case 11:
            month = "November";
        break;
        case 12:
            month = "December";
        break;
        default:
            month = "Invalid month";
    }
    return month;
}

console.log("Your month is "+getMonthString(4));

// Part 2: Switch case numer 1 to 5 as string and appear as a number

function getStringFromNumber(word){
    var number;
    switch (word){
        case "uno":
            number = 1;
        break;
        case "dos":
            number = 2;
        break;
        case "tres":
            number = 3;
        break;
        case "cuatro":
            number = 4;
        break;
        case "cinco":
            number = 5;
        break;
        default:
            number = "This expression is not accepted";
    }
    return number;
}

console.log("Your number is the number " + getStringFromNumber("uno"));