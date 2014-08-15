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

    var url = "//opengraphbox.appspot.com/OGTags";
    // var url = "//localhost:8080/OGTags";

    $.ajax({
      url : url,
      type: "get",
      async: false,
      data : {"url" : urlString},
      dataType: "jsonp",
      jsonp: "callback",
      jsonpCallback:"OGBox.crawlForURLCallback",
      success: function(json){
        console.log(json);
        console.log('success');
      },
      error: function(){
         alert('fail');
      }
     });

  }

  return _D;

}());
