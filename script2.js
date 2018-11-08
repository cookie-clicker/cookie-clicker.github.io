myAudio = new Audio('audio.mp3');
    myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);
    myAudio.play();
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
