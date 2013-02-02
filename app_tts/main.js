include("util.js");

var karotz_ip="192.168.1.74"

var rates = ["x-slow", "slow", "medium", "fast", "x-fast"];
var rate = 90;

var pitches = ["x-low", "low", "medium", "high", "x-high"];
var pitch = 90;

var volumes = ["silent", "x-soft", "soft", "medium", "loud", "x-loud"];
var volume = 90;

var time = 0;

var strengths = ["none", "x-weak", "weak", "medium", "strong", "x-strong"];
var strength = 0;

var emotions = ["cross", "happy", "sad", "calm"];
var emotion = 0

var buttonListener = function(event) {
    if (event == "DOUBLE") {
        karotz.tts.stop();
        exit();
    }
    else {
      var message = "testing ";

      var controlStart = "<prosody";
      if (rate < rates.length) {
        controlStart += " rate='" + rates[rate] + "'";
        message += "rate " + rates[rate];
        rate++;
      }
      else if (rate < rates.length + 3) {
        controlStart += " rate='" + (rate - 5) + "'";
        message += "rate of " + rate;
        rate++;
      }
      else if (pitch < pitches.length) {
        controlStart += " pitch='" + pitches[pitch] + "'";
        message += "pitch " + pitches[pitch];
        pitch++;
      }
      else if (pitch < pitches.length + 2) {
        controlStart += " pitch='" + (pitch * 2) + "'";
        message += "pitch of " + (pitch * 2);
        pitch++;
      }
      else if (volume < volumes.length) {
        controlStart += " volume='" + volumes[volume] + "'";
        message += "volume " + volumes[volume];
        volume++;
      }
      else if (volume < volumes.length + 2) {
        controlStart += " volume='+" + (volume * 5) + "%'";
        message += "volume of + " + (volume * 5) + " %";
        volume++;
      }
      else if (time < 5) {
        message += "break time of " + ((time + 1) * 500) + " milli-seconds. Start <break time='" + ((time + 1) * 500) + "ms'/> and end";
        time++;
      }
      else if (strength < strengths.length) {
        message += "break strength " + strengths[strength] + ". Start <break strength='" + strengths[strength] + "'/> and end.";
        strength++;
      }
      else if (emotion < emotions.length) {
        message += "emotion.<voice emotion='" + emotions[emotion] + "'>I feel " + emotions[emotion] + "</voice>"
        emotion++;
      }
      else {
        message += "normal";
      }
      controlStart += ">";

      var controlEnd = "</prosody>";

      karotz.tts.start(controlStart + message + controlEnd, "en", function() {});
    }
    return true;
}

var start = function(data) {
    karotz.button.addListener(buttonListener);
}

karotz.connectAndStart(karotz_ip, 9123, start, {});

