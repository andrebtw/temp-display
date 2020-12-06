var fs = require('fs');


var i = 0;                  //  set your counter to 1

function display_temp() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    try {
        var temps_historic=[]
        var temps = fs.readFileSync('temps.txt', 'utf8');
        console.log(temps);
        temps_historic.push(temps)
    } catch(e) {
        console.log('Error:', e.stack);
    }
    i++;                    //  increment the counter
    if (i < 99999999999999999999) {           //  if the counter < 10, call the loop function
      display_temp();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 1000)
}

display_temp();                   //  start the loop
