(OGBox = function (undefined) {
  var VERSION = "0.1.1";
  var _D = function(){};
  var _P = _D.prototype;

  crawlForURLCallback = function crawlForURLCallback(resultJSON) {
    console.log("crawlForURLCallback");
    console.log(resultJSON);
  }

  _D.crawlForURLCallback = crawlForURLCallback;

  _D.opengraphbox = true; // To test if library installed

  _D.crawlForURL = function (urlString) {

    var url = "//opengraphbox.appspot.com/OGTags";
    // var url = "//localhost:8080/OGTags";

    var crawlForURLCallback = _D.crawlForURLCallback;

    $.ajax({
      url : url,
      type: "get",
      async: false,
      data : {"url" : urlString},
      dataType: "jsonp",
      jsonp: "callback",
      cache: true,
      jsonpCallback:"crawlForURLCallback",
    }).done(function (data) {
        console.log("Success");
    }).fail(function (XHR, status, error) {
        console.log(error);
    });

  }

  return _D;

}());
