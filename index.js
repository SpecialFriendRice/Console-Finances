var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099],
];


// to work with just the figures, the map function creates a new array without altering the original; this is mapping each element with index (1) into a new array

// NOTE: I seemed to be able to use the full expression finances.map(x => x[1]) in a lot of Math functions but I have declared it as a variable with a simpler name below
var profLossArr = (finances.map(x => x[1]))


//Calculations on the resulting array of figures can be done with a for loop or the reduce() method. I am using the for loop
var netProfLoss = 0;
  for (var i = 0; i < profLossArr.length; i++) {
  netProfLoss += profLossArr[i];
}


// Alternative to for loop is to use the reduce () method as below
// const netProfLoss = profLossArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);


// to "track what the total change in Profit/Losses are from month to month and then find the average", I have created a new array consisting of figures representing the difference between consecutive numbers in the previous array(s):
var monthlyChange=[];
  for (var i=1; i<profLossArr.length; i++) {
  monthlyChange.push(profLossArr[i]-profLossArr[i-1]);
}

//to total the profits/losses each month, another for loop is needed:
var totalChange = 0;
  for (var i = 0; i< monthlyChange.length; i++) {
    totalChange += monthlyChange[i];
  }

//to get the average (mean), one can divide by the length of the original array minus one or as below:
var avChange = totalChange/(monthlyChange.length);

//Math functions for finding the greatest profit/loss from the most recent array:
var maxInc = Math.max(...monthlyChange);
var maxDec = Math.min(...monthlyChange);

//get the index of each of the values in the monthlyChange array
var maxIncIndex = monthlyChange.indexOf(maxInc);
var maxDecIndex = monthlyChange.indexOf(maxDec);

//get the corresponding date from the original index, where index is one step behind, so add 1. I needed to call them x and y because it wouldn't let me use the notation with brackets
var x = (maxIncIndex+1)
var y = (maxDecIndex+1)

//call the date, profit/loss pair from finance array

var datePairMaxInc = finances[x];
var datePairMaxDec = finances[y];

// extract the date at index zero
maxIncDate = datePairMaxInc[0];
maxDecDate = datePairMaxDec[0];

/* Requested formar for results printing to console:
Financial Analysis 
----------------
Total Months: 86
Total: $38382578
Average Change: -2315.12
Greatest Increase in Profits/Losses: Feb-2012 ($1926159)
Greatest Decrease in Profits/Losses: Sep-2013 ($-2196167)
*/

console.log (`Financial Analysis \n---------------- `);
console.log("Total Months : " + finances.length);
console.log("Total: $" + netProfLoss);
console.log("Average Change: " + avChange.toFixed(2));
console.log("Greatest Increase in Profits/Losses: " + maxIncDate + " ($" + maxInc + ")");
console.log("Greatest Decrease in Profits/Losses: " + maxDecDate + " ($" + maxDec + ")");


