# urlParams.js

##AMD style URL Parameter module

This is a very basic url parameter parsing module for use with AMD loaders like [require.js](http://requirejs.org/) and [curl.js](https://github.com/unscriptable/curl).

##Usage

For an intro to AMD style loader, please visit your loader's documentation. I have only used require.js and find it to fit
my needs, so if you are starting fresh go visit their [Getting Started Guide](http://requirejs.org/docs/start.html)

Once you have a project set up, download the urlParams.js file and put it into your scripts directory. Include and use it like this:

    // Assuming a query string on a url like http://domain.com/?id=42&username=Joe
    require(['urlParams'],function(params) {
      params.get('id');       // 42
      params.get('username'); // Joe

    })

You can parse arbitrary query strings via

    params.parse(string);
    params.get(keyFromThatString);

##Bugs

There will absolutely be bugs. This is the simplest implementation I could muster for a personal project and I wrote it
in this generic manner just in case anyone else might need it. Please feel free to fork and submit pull requests with
appropriate tests written.

