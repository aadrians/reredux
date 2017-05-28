'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpackConfigDev = require('../webpack.config.dev.js');

var _webpackConfigDev2 = _interopRequireDefault(_webpackConfigDev);

var _open = require('open');

var _open2 = _interopRequireDefault(_open);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpackConfigDev2.default);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: _webpackConfigDev2.default.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err); //eslint-disable-line no-console
  } else {
    (0, _open2.default)('http://localhost:' + port);
  }
});