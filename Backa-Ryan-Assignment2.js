//alert("JavaScript works!");

//Ryan Backa
//10/8/2014
//SDI 14/10
//Project 2

//Global Varriables
var CondiArray = new Array();
	calculatedArray = new Array();
	condi=true;
	isItALetter=true;
	totalEntries=0;
	
//Functions
var getCondiNum = function(enterCondi,CondiNumArray[],entries){
	var counter=0;
	if (enterCondi===true){
		while (counter!==entries){
			CondiNumArray[counter]=prompt("How many total barrels of condensate were in hour " + (counter++) + "?");
			If (isNan(CondiNumArray[counter])===false){
				CondiNumArray[counter]=pareseInt(CondiNumArray[counter]);
				console.log("You made " + CondiNumArray[counter] + " this hour.");
				counter++;
			}else{
				console.log("Please enter a number!");	
			};
		};
		console.log("You have entered " + counter + " numbers.");
	}else{
		console.log("You have no new numbers to enter.");
	};
	return CondiNumArray;
};
 
var CalcCondiBbls = function(entries, calcArray[], enteredCondiArray[]){
	var loopCounter;
	for (loopCounter = 0; loopCounter <= entries; loopCounter++){
		calcArray[loopCounter] = enteredCondiArray[loopCounter++] - enteredCondiArray[loopCounter];
		calcArray[loopCounter] = parseInt(calcArray[loopCounter]);
		console.log("You made " + calcArray[loopCounter] + " barrels of condensate in hour "+(loopCounter++));
	};
	return calcArray;
};

//Main Code
condi=confirm("Do you have condensate numbers to enter? click OK for yes");
while (isItALetter===true){
	totalEntries=prompt("How many entries do you have?");
	if (isNan(totalEntries)=false){
		parseInt(totalEntries);
		isItALetter = false;
	}else{
		console.log("Please enter a number!");
	};
};
getCondiNum(condi,CondiArray,totalEntries);
CondiArray[]=CondiNumArray[];
CalcCondiBbls(totalEntries,CondiArray[],calculateArray[]);
calculatedArray[]=calcArray[];


