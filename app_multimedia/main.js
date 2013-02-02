include("util.js");

var karotz_ip="192.168.1.74"

var buttonListener = function(event) {
  if (event == "DOUBLE") {
    exit();
  }
  else {
    var randomSound = Math.floor(Math.random() * 1000);
    var path = "http://www.universal-soundbank.com/mp3/sounds/" + randomSound +".mp3"; 

    karotz.multimedia.play(path, function(event) { 
      if (event == "TERMINATED") { 
        log("Sound terminalted. Press the button for another one.");
      }
    }); 
  }
  return true;
}

var start = function(data) {
  karotz.button.addListener(buttonListener);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});
