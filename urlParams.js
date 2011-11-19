define(function(){
  var cache = null;
  var self = {
    get : get,
    parse : parse,
  };

  return self;

  function get(name) {
    if (!cache) self.parse();
    return cache[name];
  }

  function parse(string) {
    string = string || window.location.search;
    if (string.substring(0,1) === '?') string = string.substring(1);
    string = string.replace(/\+/,' ');

    var regex = /([^&;=]+)=?([^&;]*)/g;

    var match,params = {};

    while (match = regex.exec(string)) {
      var name  = decodeURIComponent(match[1]),
          value = decodeURIComponent(match[2]);
      params[name] = params[name] === undefined ? value : (params[name] instanceof Array ? params[name].push(value) : params[name] = [params[name],value]);
    }
    return cache = params;
  }
})