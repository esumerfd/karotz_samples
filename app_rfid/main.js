include("util.js");

var karotz_ip="192.168.1.74"

var exitButton = function(event) {
    if (event == "DOUBLE") {
        exit();
    }
    return true;
}

/*
 * Data contains:
 * karotz interactive mode
 * Data: id = D0021A35038E2E2B
 * Data: direction = 1
 * Data: app = 1
 * Data: type = FLAT
 * Data: pict = 0
 * Data: color = YELLOW
 *
 * My Green Tag:
 * Data: id = D0021A3506195BA5
 * Data: direction = 1
 * Data: app = 2
 * Data: type = FLAT
 * Data: pict = 0
 * Data: color = GREEN
 */
var rfidListener = function(data) {
  for (var x in data) {
    log("Data: " + x + " = " + data[x]);
  }
}

var start = function(data) {
  karotz.button.addListener(exitButton);
  karotz.rfid.addListener(rfidListener);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});
