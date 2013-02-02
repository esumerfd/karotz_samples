include("util.js");

var karotz_ip="192.168.1.74"

var buttonListener = function(event) {
  if (event == "DOUBLE") {
    exit();
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
    exit();
  }
}

var start = function(data) {
  karotz.button.addListener(buttonListener);
  setTimeout(500, startColorRange);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});
