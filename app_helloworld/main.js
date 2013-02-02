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
    //if((event == "CANCELLED") || (event == "TERMINATED")) {
        //exit();
    //}
    return true;
}

var onKarotzConnect = function(data) {
    karotz.button.addListener(buttonListener);

    setTimeout(1, quoteNow);
}

var quoteNow = function() {
    var heartQuote = http.get2("http://www.iheartquotes.com/api/v1/random");
    var quote = heartQuote.content;

    var endOfQuote = quote.indexOf("\n\n");
    quote = quote.substring(0, endOfQuote);

    karotz.tts.start(quote, "en", function() {});

    setTimeout(20000, quoteNow);
}

karotz.connectAndStart(karotz_ip, 9123, onKarotzConnect, {});
