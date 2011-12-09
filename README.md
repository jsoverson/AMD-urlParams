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

##License

Licensed under the MIT License

Copyright (c) 2011 Jarrod Overson

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
SOFTWARE.
