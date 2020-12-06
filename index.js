var fs = require('fs');


var i = 0;                  //  set your counter to 1

function myLoop() {         //  create a loop function
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
    if (i < 9999999999999999) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop
