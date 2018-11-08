function update() {
  document.getElementById('text').innerHTML = cookiecount;
  document.title = cookiecount + " Cookies";
  document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";
  document.getElementById('ammountFarms').innerHTML = "You Own " + farms + " Farms";
  document.getElementById('costFarms').innerHTML = ((farms+1) * 15) + " Cookies";
  document.getElementById('costGrandma').innerHTML = ((grandmas+1) * 30) + " Cookies"
  document.getElementById('ammountGrandma').innerHTML = "You Own " + grandmas + " Grandmas";
  document.getElementById('ammountBakery').innerHTML = "You Own " + bakeries + " Bakeries";
  document.getElementById('costBakery').innerHTML = ((bakeries+1) * 100) + " Cookies";
  document.getElementById('cookiespersecond').innerHTML = "You are gaining " + ((((autoClick)+(farms*2))+grandmas*8)+bakeries*64) + " Cookies per/s";
}
var music = "off";
var cookiecount = 0;
var autoClick = 0;
var farms = 0;
var grandmas = 0;

function timer() {
  cookiecount = cookiecount + autoClick;
  cookiecount = cookiecount + grandmas*8;
  cookiecount = cookiecount + farms*2;
  cookiecount = cookiecount + bakeries*64;
  update()

}
setInterval(timer, 1000)
