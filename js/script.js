console.log('forms and js');

//reading form data
document.getElementById('submit').addEventListener('click', function(){
    var name = document.getElementById('name').value;
    console.log(name);

    var address = document.getElementById('address').value;
    console.log(address);

    document.getElementsByTagName('div')[1].innerHTML = '<br>' +name + '<br>' + address;
});


//Performance Assessment
var topAverage = 0;
var bestPerformance = 0;// lowest when trying to find the highest
var lowAverage = 100;
var names=[];
var projectA =[];
var projectB =[];
var projectC =[];
var averagePerformance = [];

var n = parseInt(prompt('Enter the number of employees'));

document.getElementById('saveData').addEventListener('click', function(){
console.log(names.length);
     if (names.length < n){
  
    var ename = document.getElementById('ename').value;
    console.log(ename);

    var projA = parseInt(document.getElementById('projectA').value);
    console.log(projA);
    var projB = parseInt(document.getElementById('projectB').value);
    console.log(projB);
    var projC = parseInt(document.getElementById('projectC').value);
    console.log(projC);

    var average = ((projA + projB + projC)/3).toFixed(2);
    console.log(average);

    document.getElementsByTagName('div')[1].innerHTML
    += '<br>' +ename + '<br>' + projA + '<br>' + projB + '<br>' + projC  + '<br>' + average;

    document.getElementById('average').value = average;

    names.push(ename);
    projectA.push(projA);
    projectB.push(projB);
    projectC.push(projC);
    averagePerformance.push(average);
    console.log(names, projectA, projectB, projectC, averagePerformance);
  
if (average > topAverage){
    topAverage = average;
    document.getElementById('topAverage').innerHTML = ename + " is the winner";
}

if (average < bestPerformance){
    bestPerformance = average;
    document.getElementById('bestPerformance').innerHTML = ename + " has the best performance at 90%";
}


if (average < lowAverage){
    lowAverage = average;
    document.getElementById('lowAverage').innerHTML = ename + " is the LOOSER";
}



  } else {
    alert('Sorry, cannot store more employees\' details');
  }
});

document.getElementById('anotherData').addEventListener('click', function(){
    document.getElementById('ename').value = " ";// easy way to clear an strig
    document.getElementById('projectA').value = " ";
    document.getElementById('projectB').value = " ";
    document.getElementById('projectC').value = " ";
    document.getElementById('average').value = " ";

});