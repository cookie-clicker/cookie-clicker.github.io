var i = 0;
var id;
var teach;

var userpass = '356483';

var teacher = ['placeholder', 'GIFFORD', 'MORSE', 'FRY', 'NYBERG', 'YOUNG'];
var teachid = ['placeholder', 'P0002035', 'P0002038', 'P0002004', 'P0002059', 'P0002041'];

var teachers = {
  
  GIFFORD : 1,
  MORSE : 2,
  FRY : 3,
  NYBERG : 4,
  YOUNG : 5
  
}

var running = true;

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function showteachers() {

  console.log(teacher);

}

function showteachids() {

  console.log(teachid);

}

function getid(i) {
  
  var id;
  
  if (i) {
    
    id = teachid[i];
    
    return id;
    
  }
  
}

function getteacher(i) {
  
  var teach;
  
  if (i) {
    
    teach = teacher[i];
    
    return teach;
    
  }
  
}

function getcard(e) {
  
  var arr = [];
  
  var a = getteacher(e);
  var b = getid(e);
  var c = (b[0]) + (b[4]) + (b[5]) + (b[6]) + (b[7]);
  
  arr.push(a, b, c);

  return arr;
  
}

function help() {
  
  console.log('Type getcard([teacher id]); to get the details for a card.\nteacher ids listed below:');
  console.log(teachers);
  console.log('\nThe getcard function will return 3 values in an array. The first is the teacher name. The second is the card id that is to be typed in. And the third is the id on the bottom of the card.\nQuick Tip: you can use the getcard function as a variable as well as it logging to the console.');
  
}

console.log(getid());


