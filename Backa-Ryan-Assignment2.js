
//alert("JavaScript works!");
//Ryan Backa
//10/8/2014
//SDI 14/10
//Project 2

//Global Varriables
var CondiArray = new Array(),
    calculatedArray = new Array(),
    wellOpen = true;
    condi = true,
    isItALetter = true,
    totalEntries = 0,
    customerName ="",
    preparer ="",
    printToCustomer="";


//Functions
var getCondiNum = function (enterCondi, wellOpen, CondiNumArray, entries) {
    //local variables
    var counter = 0,
        counter2 = 0;
    entries--;
 

        //nested while loop collecting condensate per hour in array
        while (enterCondi === true && wellOpen === true) {
            counter2++;
            CondiNumArray[counter] = prompt("How many total barrels of condensate were in hour " + (counter2) + "?");
            CondiNumArray[counter] = parseFloat(CondiNumArray[counter]);
            console.log("You have " + CondiNumArray[counter] + " total barrels of condensate.");
            counter++;
			if (counter <= entries){
				enterCondi = true;
			}else{
				enterCondi = false;
			}   
		}
    return CondiNumArray;
};//collecting condensate entries

var CalcCondiBbls = function (entries, CondiNumArray, calcArray) {
	//local variables
    var loopCounter;
    var mathCounter = 0;
    entries--;//to account for 0 as a number
    //for loop
    for (loopCounter = 0; loopCounter <= entries; loopCounter++) {
        //nested if statement
        if (loopCounter >= 1) {
            calcArray[loopCounter] = CondiNumArray[loopCounter] - CondiNumArray[mathCounter];
            calcArray[loopCounter] = parseFloat(calcArray[loopCounter]);
            console.log("You made " + calcArray[loopCounter] + " barrels of condensate.");
            mathCounter++;
        } else {
            calcArray[loopCounter] = CondiNumArray[loopCounter];
            console.log("You made " + calcArray[loopCounter] + " barrels of condensate.");
        }
    }
    return calcArray;
};//calculating how many bbls of condensate per hour

var logBbls = function (customer, signed, entries, totalCondi, concatStrng) {
	concatStrng = ("Dear " + customer +", we have made "+totalCondi[entries]+" barrels of condensate on your property. Thank you, " + signed+".");
	return concatStrng;
	}



//Main Code
wellOpen = confirm("Is the well open? click \"OK\" for yes");
condi = confirm("Do you have condensate numbers to enter? click \"OK\" for yes");
while (isItALetter === true) {
    totalEntries = prompt("How many entries do you have?");
    isItALetter = isNaN(totalEntries);//making sure my entry is a number
    if (isItALetter === false); {
        parseInt(totalEntries);
        console.log("You said " + totalEntries + " total entries.");
        /*    }else{
        	    console.log("please enter a number");*/
    }
}
getCondiNum(condi, wellOpen, CondiArray, totalEntries);

CalcCondiBbls(totalEntries, CondiArray, calculatedArray);
totalEntries=
customerName=prompt("What is the customers name?");
preparer=prompt("Who prepared this report?");

logBbls(customerName,preparer,totalEntries,CondiArray, printToCustomer);

console.log(printToCustomer);
