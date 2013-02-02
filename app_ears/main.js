include("util.js");

var karotz_ip="192.168.1.74"

var exitButton = function(event) {
    if (event == "DOUBLE") {
        exit();
    }
    return true;
}

/*
 * Only appears to return START_LEFT and START_RIGHT.
 * Produces exception "TypeError: Cannot find function getNumber in object 3. (karotz.js#304)"
 */
var earsListener = function(event, step, length) {
  var type = event.type
  log("type is " + type);

  if (type == "START_LEFT")   {log("### " + type + " turning left ear on " + step + " step and in " + length + " ms.");}
  else if (type == "START_RIGHT")  {log("### " + type + " turning right ear on " + step + " step and in " + length + " ms.");}
  else if (type == "STOP_LEFT")    {log("### " + type + " just turned left ear on " + step + " step and in " + length + " ms.");}
  else if (type == "STOP_RIGHT")   {log("### " + type + " turned the right ear on " + step + " step and in" + length + " ms.");}
  else if (type == "BLOCKED_RIGHT"){log("### " + type + " blocked right ear on " + step + " step and in" + length + " ms.");}
  else if (type == "BLOCKED_LEFT") {log("### " + type + " blocked left ear on " + step + " step and in" + length + " ms.");}
  else { log("Unknown type " + type); }
}

var start = function(data) {
  karotz.button.addListener(exitButton);
  karotz.ears.addListener(earsListener);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});
