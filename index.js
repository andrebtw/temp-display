var fs = require('fs');
let temps_var = [];




/*DISPLAYING MIN */

var x = 0;                  //  set  counter to 1

function min_temp() {         //  create a loop function
    try {
        Array.min = function(temps_var){
        return Math.min.apply( Math, temps_var);
        };
        var min_temp = Array.min(temps_var);
        console.log(min_temp);
        document.getElementById("min_temp").innerHTML = min_temp.toString().slice(0,4)+"°C";
    } catch(e) {
        console.log('Error:', e.stack);
    }                     //  ..  setTimeout()
}


/*DISPLAYING MAX TEMP*/


var z = 0;                  //  set your counter to 1

function max_temp() {         //  create a loop function
    try {
        Array.max = function(temps_var){
        return Math.max.apply( Math, temps_var);
        };
        var max_temp = Array.max(temps_var);
        console.log(max_temp);
        document.getElementById("max_temp").innerHTML = max_temp.toString().slice(0,4)+"°C";
    } catch(e) {
        console.log('Error:', e.stack);
    }                   //  ..  setTimeout()
}




/*DISPLAYING ACTUAL TEMP*/

var i = 0;

function actual_temp() {
  setTimeout(function() {
    try {
        var temps = fs.readFileSync('temps.txt', 'utf8');
        console.log(temps);
        document.getElementById("actual_temp").innerHTML = temps.toString().slice(0,4)+"°C";
        temps_var.push(temps);
        console.log(temps_var);
        min_temp();
        max_temp();
    } catch(e) {
        console.log('Error:', e.stack);
    }
    i++;
    if (i < 99999999999999999999) {
      actual_temp();
    }
  }, 2500)
}
actual_temp();
