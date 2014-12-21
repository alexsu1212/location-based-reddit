var actions = require('../actions/ActionLib');

var timerTickLength = 1000 * 60 * 5; //1秒 X 60 X 分鐘
//var timerTickLength = 5000; //testing

$(document).ready(function () {
    setTimeout("timer()", 0);
});

function timer() {
    getLocation();
    setTimeout("timer()", timerTickLength);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert("Latitude: " + position.coords.latitude +
        "\nLongitude: " + position.coords.longitude);

    var posi = {
        position.coords.latitude, position.coords.longitude
    };

    actions.load(posi);
}