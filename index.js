var fs = require('fs');
var temps_historic = require('./temps_historic.json');


/*DISPLAYING ACTUAL TEMP*/

var i = 0;                  //  set your counter to 1

function actual_temp() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    try {
        var temps_historic=[]
        var temps = fs.readFileSync('temps.txt', 'utf8');
        console.log(temps);
        document.getElementById("actual_temp").innerHTML = temps;
        temps_historic.push(temps)
    } catch(e) {
        console.log('Error:', e.stack);
    }
    i++;                    //  increment the counter
    if (i < 99999999999999999999) {           //  if the counter < 10, call the loop function
      actual_temp();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 1000)
}
actual_temp();                   //  start the loop



/*DISPLAYING MIN */

var x = 0;                  //  set your counter to 1

function min_temp() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    try {
        Array.min = function(temps_historic){
        return Math.min.apply( Math, temps_historic);
        };
        var min_temp = Array.min(temps_historic);
        console.log(min_temp);
        document.getElementById("min_temp").innerHTML = min_temp;
    } catch(e) {
        console.log('Error:', e.stack);
    }
    x++;                    //  increment the counter
    if (x < 99999999999999999999) {           //  if the counter < 10, call the loop function
      actual_temp();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 1000)
}
min_temp();


/*DISPLAYING MAX TEMP*/
