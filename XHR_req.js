var XHR_req = function(url, callback) {
  console.log('rawXHR running!');
  var request = new XMLHttpRequest();
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = request.responseText;
      if(typeof data !== 'object'){
        data = JSON.parse(request.responseText);
      }
      callback(data);
    } else {
      console.log('Server reached but an internal error occured!');
    }
  };
  request.open('GET', url);
  request.onerror = function () {
    console.log("** An error occurred during the transaction");
  };
  request.send();
};
