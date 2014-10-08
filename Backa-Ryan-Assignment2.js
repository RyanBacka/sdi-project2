//alert("JavaScript works!");

//Ryan Backa
//10/8/2014
//SDI 14/10
//Project 2

//Global Varriables
var CondiArray = new Array();
var calculatedArray = new Array();
var condi = true;
var isItALetter = true;
var totalEntries = 0;

//Functions
var getCondiNum = function (enterCondi, CondiNumArray, entries) {
    var counter = 0,
        counter2 = 0;
    if (enterCondi === true) {
        while (counter <= entries-) {
            counter2++;
            CondiNumArray[counter] = prompt("How many total barrels of condensate were in hour " + (counter2) + "?");
            CondiNumArray[counter] = parseFloat(CondiNumArray[counter]);
            console.log("You have " + CondiNumArray[counter] + " total barrels of condensate.");
            counter++;
        }
        console.log("You have entered " + counter + " numbers.");
    } else {
        console.log("You have no new numbers to enter.");
    }
    return CondiNumArray;
};

var CalcCondiBbls = function (entries, calcArray, enteredCondiArray) {
    var loopCounter;
    for (loopCounter = 0; loopCounter <= entries; loopCounter++) {
        calcArray[loopCounter] = enteredCondiArray[loopCounter++] - enteredCondiArray[loopCounter--];

        calcArray[loopCounter] = parseInt(calcArray[loopCounter]);
        console.log("You made " + calcArray[loopCounter] + " barrels of condensate in hour " + (loopCounter++));
    }
    return calcArray;
};

//Main Code
condi = confirm("Do you have condensate numbers to enter? click OK for yes");
while (isItALetter === true) {
    totalEntries = prompt("How many entries do you have?");
    isItALetter = isNaN(totalEntries);
    if (isItALetter === false); {
        parseInt(totalEntries);
        console.log("You said " + totalEntries + " total entries.");
    }
}
getCondiNum(condi, CondiArray, totalEntries);

CalcCondiBbls(totalEntries, CondiArray, calculatedArray);


