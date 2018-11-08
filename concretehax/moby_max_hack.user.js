// ==UserScript==
// @name         Moby Max Hack
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Hacks Moby Max
// @author       Walter Shewmake
// @match        https://www.mobymax.com/*
// @grant        none
// ==/UserScript==

var auto_login = true;

if (auto_login) {
    console.log("Checking username and password");
var UNAME =/* Username for moby max = */ "USERNAME";
var PWORD =/* Password for moby max = */ "PASSWORD";

// user login

var username = document.getElementById('UserUsername');
var password = document.getElementById('UserPassword');
var sign_in = document.getElementById('signin-btn');
    console.log("Logging in...");
username.value = UNAME;
password.value = PWORD;
sign_in.click();
} else {
 alert('Your moby max auto login is currently set to disabled.');
    console.error("Auto login disabled");
}
