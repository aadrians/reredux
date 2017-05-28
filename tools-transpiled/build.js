'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../webpack.config.prod');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = 'production'; // this assures the Babel dev config (for hot reloading) does not apply

// allowing console calls below since this is a build file
/*eslint-disable no-console*/
console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

(0, _webpack2.default)(_webpackConfig2.default).run(function (err, stats) {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  var jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(function (error) {
      return console.log(error.red);
    });
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings'.bold.yellow);
    jsonStats.warnings.map(function (warning) {
      return console.log(warning.yellow);
    });
  }

  console.log('Webpack stats: ' + stats);

  // if we got this far, the build succeeded
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});