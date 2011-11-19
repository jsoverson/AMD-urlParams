require(['urlParams'],function(params){
  module("Basic Parameters");

  test("simple", 1, function() {
    params.parse('foo=bar')
    equal(params.get('foo'),'bar');
  });
  test("multiple", 2, function() {
    params.parse('foo=bar&baz=qux')
    equal(params.get('foo'),'bar');
    equal(params.get('baz'),'qux');
  });
  test("array", 1, function() {
    params.parse('foo=a&foo=b')
    deepEqual(params.get('foo'),['a','b']);
  });
  test("encoded", 3, function() {
    params.parse('?foo=a%20b&bar=a+b&baz=%26')
    equal(params.get('foo'),'a b');
    equal(params.get('bar'),'a b');
    equal(params.get('baz'),'&');
  });
  test("semi colon", 3, function() {
    params.parse('?foo=a%20b;bar=a+b;baz=%26')
    equal(params.get('foo'),'a b');
    equal(params.get('bar'),'a b');
    equal(params.get('baz'),'&');
  });

})