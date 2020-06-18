# resumer-through2

Return a through2 stream that starts out paused and resumes on the next tick,
unless somebody called `.pause()`.

This module has the same signature as
[through2](https://npmjs.org/package/through2).

[![browser support](https://ci.testling.com/substack/resumer.png)](http://ci.testling.com/substack/resumer)

# example

``` js
var resumer = require('resumer-through2');
var s = createStream();
s.pipe(process.stdout);

function createStream () {
    var stream = resumer();
    stream.push('beep boop\n');
    return stream;
}
```

```
$ node example/resume.js
beep boop
```

# methods

``` js
var resumer = require('resumer-through2')
```

## resumer(options, write, flush)

Return a new through2 stream from `options`, `write` and `end`, which default to
pass-through `.queue()` functions if not specified.

The stream starts out paused and will be resumed on the next tick unless you
call `.pause()` first.

`options`, `write` and `end` get passed directly through to
[through2](https://npmjs.org/package/through2).

# install

With [npm](https://npmjs.org) do:

```
npm install resumer-through2
```

# license

This source code is based on [resumer](https://github.com/substack/resumer) which does the same job for [through](https://npmjs.org/package/through) as this does of `through2`.

MIT
