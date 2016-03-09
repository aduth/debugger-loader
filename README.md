# Debugger loader for Webpack

Load [`debug`](https://www.npmjs.com/package/debug) via Webpack loader.

Nice to use for single-line debug imports with ES6 syntax.

## Installation

`npm install debugger-loader`

## Usage

```js
import debug from 'debugger?myapp!';

debug( 'Success!' );

// Equivalent to:

var debug = require( 'debug' )( 'myapp' );

debug( 'Success!' );
```

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
