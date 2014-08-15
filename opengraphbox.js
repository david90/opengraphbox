(OGBox = function (undefined) {
  var VERSION = "0.1.1";
  var _D = function(){};
  var _P = _D.prototype;

  function success (data) {
    console.log(data);
  }

  _D.crawlForURLCallback = function (resultJSON) {

  }

  _D.opengraphbox = true; // To test if library installed

  _D.crawlForURL = function (urlString) {

    var url = "//opengraphbox.appspot.com/OGTags";

    $.ajax({
      type: "get",
      async: false,
      url: "//opengraphbox.appspot.com/OGTags?url="+urlString,
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback:"crawlForURLCallback",
      success: function(json){
         console.log(json);
      },
      error: function(){
         alert('fail');
      }
     });

  }

  return _D;

}());
