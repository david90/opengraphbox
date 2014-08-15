(OGBox = function (undefined) {
  var VERSION = "0.1.1";
  var _D = function(){};
  var _P = _D.prototype;

  function success (data) {
    console.log(data);
  }

  _D.opengraphbox = true; // To test if library installed

  _D.crawlForURL = function (urlString) {

    var data = {'url' : urlString};
    var url = "//opengraphbox.appspot.com/OGTags";
    $.ajax({
      dataType: "json",
      url: url,
      data : data,
      success: success
    });
  }

  return _D;

}());
