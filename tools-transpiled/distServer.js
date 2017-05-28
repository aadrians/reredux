'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-console*/
var port = 3000;
var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_express2.default.static('dist'));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../dist/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    (0, _open2.default)('http://localhost:' + port);
  }
});