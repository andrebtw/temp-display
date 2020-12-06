var fs = require('fs');
let temps_var = [];


/*DISPLAYING MIN */


function min_temp() {         //  create a loop function
    try {
        Array.min = function(temps_var){
        return Math.min.apply( Math, temps_var);
        };
        var min_temp = Array.min(temps_var);
        console.log(min_temp);
        document.getElementById("min_temp").innerHTML = min_temp;
    } catch(e) {
        console.log('Error:', e.stack);
    }
    x++;                    //  increment the counter
    if (x < 99999999999999999999) {           //  if the counter < 10, call the loop function
      actual_temp();             //  ..  again which will trigger another
    }
}

/*DISPLAYING MAX TEMP*/

function max_temp() {         //  create a loop function
    try {
        Array.max = function(temps_var){
        return Math.max.apply( Math, temps_var);
        };
        var max_temp = Array.max(temps_var);
        console.log(max_temp);
        document.getElementById("max_temp").innerHTML = max_temp;
    } catch(e) {
        console.log('Error:', e.stack);
    }
}


/*DISPLAYING ACTUAL TEMP*/

var i = 0;                  //  set your counter to 1

function actual_temp() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    try {
        var temps = fs.readFileSync('temps.txt', 'utf8'); //reads the temps file which is updated every second by a python script
        console.log(temps); //print the txt file
        document.getElementById("actual_temp").innerHTML = temps; //put it in the html
        temps_var.push(temps); //writes the temps variable which is a number in the json variable
        console.log(temps_var);
        min_temp();
        max_temp();
    } catch(e) {
        console.log('Error:', e.stack);
    }
    i++;                    //  increment the counter
    if (i < 99999999999999999999) {           //  if the counter < 10, call the loop function
      actual_temp();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()

}
actual_temp();                   //  start the loop
