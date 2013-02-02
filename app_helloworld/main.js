include("util.js");

var karotz_ip="192.168.1.74"

var buttonListener = function(event) {
    if (event == "DOUBLE") {
        karotz.tts.stop();
        exit();
    }
    return true;
}

var exitFunction = function(event) {
    if((event == "CANCELLED") || (event == "TERMINATED")) {
        exit();
    }
    return true;
}

var onKarotzConnect = function(data) {
    karotz.button.addListener(buttonListener);
    karotz.tts.start("Hello World ! My name is Mia !", "en", exitFunction);
}

karotz.connectAndStart(karotz_ip, 9123, onKarotzConnect, {});
