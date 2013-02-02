include("util.js");

var karotz_ip="192.168.1.74"

var test = 2;

var buttonListener = function(event) {
  if (event == "DOUBLE") {
    exit();
  }
  else {
    if (test == 0) setTimeout(500, startColorRange);
    else if (test == 1) setTimeout(500, startColorFade);
    else if (test == 2) setTimeout(500, startColorPulse);
    else { log("nothing to do"); }
    test++;
  }
  return true;
}

var color = 0;

var startColorRange = function() {
  var colorRGB = color.toString(16).toUpperCase();

  while (colorRGB.length < 6) {
    colorRGB = "0" + colorRGB;
  }

  log("Color: " + colorRGB + " decimal " + color);
  karotz.led.light(colorRGB);

  if (color < 255) color += 50;
  else if (color < 65535) color += 10000;
  else if (color < 16777215) color += 5000000;

  if (color < 16777215) {
    setTimeout(500, startColorRange);
  }
  else {
    log("Colors complete");
  }
}

var startColorFade = function() {
  karotz.led.light("000000");
  karotz.led.fade("FFFFFF", 5000, function() {
    log("Fad finished");
  });
}

var startColorPulse = function() {
  karotz.led.pulse("0000FF", 1000, -1);
}

var start = function(data) {
  karotz.button.addListener(buttonListener);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});
