'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-console*/

_fs2.default.readFile('src/index.html', 'utf8', function (err, markup) {
  if (err) {
    return console.log(err);
  }

  var $ = _cheerio2.default.load(markup);

  // since a separate spreadsheet is only utilized for the production build, need to dynamically link
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  _fs2.default.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});