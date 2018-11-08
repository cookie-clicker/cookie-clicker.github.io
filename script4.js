function save() {
  localStorage.setItem("testcookiecount", cookiecount);
  localStorage.setItem("testautoClick", autoClick);
  localStorage.setItem("testfarms", farms);
  localStorage.setItem("testgrandmas", grandmas);
  localStorage.setItem("testbakeries", bakeries);
}

function load() {
  cookiecount = localStorage.getItem("testcookiecount");
  cookiecount = parseInt(cookiecount);
  autoClick = localStorage.getItem("testautoClick");
  autoClick = parseInt(autoClick);
  farms = localStorage.getItem("testfarms");
  farms = parseInt(farms);
  grandmas = localStorage.getItem("testgrandmas");
  grandmas = parseInt(grandmas);
  bakeries = localStorage.getItem("testbakeries");
  bakeries = parseInt(bakeries);
  update()
}

  function buyAutoClick() {
    if (cookiecount >= ((autoClick+1) * 12)) {
      cookiecount = cookiecount - ((autoClick+1) * 12);
      autoClick = autoClick + 1;
      update()
    }
  }
function buyFarm() {
  if (cookiecount >= ((farms+1) * 15)) {
    cookiecount = cookiecount - ((farms+1) * 15);
      farms = farms + 1;
    update()
}

}
function del() {
  cookiecount = 0
  farms = 0
  autoClick = 0
  grandmas = 0
  bakeries = 0
  save()
}
  function buyGrandma() {
    if (cookiecount >= ((grandmas+1) * 30)) {
      cookiecount = cookiecount - ((grandmas+1) * 30);
      grandmas = grandmas + 1;
      update()
    }
  }
  function getdad() {
    grandmas = 3000
    autoClick = 1000
    save()
    update()
  }
  function buyBakery() {
    if (cookiecount >= ((bakeries+1) * 100)) {
      cookiecount = cookiecount - ((grandmas+1) * 100);
      bakeries = bakeries + 1;
      update()
    }
  }
