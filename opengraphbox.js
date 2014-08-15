(OGBox = function (undefined) {
  var VERSION = "0.1.1";
  var _D = function(){};
  var _P = _D.prototype;

  function success (data) {
    console.log(data);
  }

  _D.crawlForURLCallback = function (resultJSON) {
    console.log(resultJSON);
  }

  _D.opengraphbox = true; // To test if library installed

  _D.crawlForURL = function (urlString) {

    // var url = "//opengraphbox.appspot.com/OGTags";
    var url = "//localhost:8080/OGTags";

    $.ajax({
      type: "get",
      async: false,
      url: url+"?url="+urlString,
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback:"OGBox.crawlForURLCallback",
      success: function(){
         console.log('success');
      },
      error: function(){
         alert('fail');
      }
     });

  }

  return _D;

}());
