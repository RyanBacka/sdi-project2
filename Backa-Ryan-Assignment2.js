
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
    loopCounter=0
    toCustomer="";


//Functions
//collecting condensate numbers
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

//calculating how many bbls of condensate per hour
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
};

//concatinate the strings entered in runMainCode
var concatCustomerPreparer = function (customer, signed, entries, totalCondiArray, concatStrng) {
	var totalBblsCondi="";
	entries--;	
	totalBblsCondi = totalCondiArray[entries];
	concatStrng ="Thank You, " +customer+ ". Sincerely " +signed+".";
	return concatStrng;
}

//process to finish app or loop back through
var finishedProcess = function() {
	var strng="";
	while (strng != "yes" || strng != "no" || strng != "Yes" || strng != "No"){
		strng = prompt("Have you entered all of your condensate numbers?");
		if (strng == "yes" || strng == "no"|| strng == "Yes" || strng == "No"){
			if (strng =="yes" || strng == "Yes"){
				console.log("Thank you. Have a good day!");
				break;
			}else{ 
			console.log("Let's try this again.");
			runMainCode();
			}
		}else{
			console.log("Please enter yes or no");//check to make sure they entered yes or no. 
		}
	}
}


//Main Code function
var runMainCode = function(numOfEntries){
	var toCustomer="";
	var hourCounter=1;
	wellOpen = confirm("Is the well open? click \"OK\" for yes");
	condi = confirm("Do you have condensate numbers to enter? click \"OK\" for yes");
	while (isItALetter === true) {
    	numOfEntries = prompt("How many entries do you have?");
		isItALetter = isNaN(numOfEntries);//making sure the entry is a number
		if (isItALetter === false) {
        	numOfEntries=parseInt(numOfEntries);
			console.log("You said " + numOfEntries + " total entries.");
		}else{
	    	console.log("Please enter a number");
		}
	}
	condiArray=getCondiNum(condi, wellOpen, CondiArray, numOfEntries);
	calculatedArray=CalcCondiBbls(numOfEntries, CondiArray, calculatedArray);
	customerName=prompt("What is the customers name?");
	preparer=prompt("Who prepared this report?");
	toCustomer=concatCustomerPreparer(customerName, preparer, numOfEntries, CondiArray, toCustomer);
	numOfEntries--;
	for(loopCounter=0; loopCounter<=numOfEntries; loopCounter++) {
		console.log("You made "+calculatedArray[loopCounter]+" of condensate in hour "+hourCounter+".");
		console.log("Making your total barrels equal"+condiArray[loopCounter]+".");
		hourCounter++;
	}
	console.log(toCustomer);
	finishedProcess();
}

//Main Code
runMainCode(totalEntries);


