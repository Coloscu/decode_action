//Sat Apr 05 2025 12:28:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var _0x131408 = function () {
  var _0xa9a341 = true;
  return function (_0x656259, _0x3039ca) {
    var _0x455f73 = _0xa9a341 ? function () {
      if (_0x3039ca) {
        var _0x35bfb9 = _0x3039ca.apply(_0x656259, arguments);
        _0x3039ca = null;
        return _0x35bfb9;
      }
    } : function () {};
    _0xa9a341 = false;
    return _0x455f73;
  };
}();
var _0xc85df4 = _0x131408(this, function () {
  var _0x9d318f = function () {
    return "dev";
  };
  var _0x48119a = function () {
    return "window";
  };
  var _0x58fd19 = function () {
    var _0x358559 = new RegExp("\\w+ *\\(\\) *{\\w+ *['|\"].+['|\"];? *}");
    return !_0x358559.test(_0x9d318f.toString());
  };
  var _0x1b1ced = function () {
    var _0x1a12eb = new RegExp("(\\\\[x|u](\\w){2,4})+");
    return _0x1a12eb.test(_0x48119a.toString());
  };
  var _0x54d827 = function (_0x85260c) {
    var _0x5bf09c = 0 >> NaN;
    if (_0x85260c.indexOf("i" === _0x5bf09c)) {
      _0x21a41f(_0x85260c);
    }
  };
  var _0x21a41f = function (_0x2733a6) {
    var _0xf90627 = 3 >> NaN;
    if (_0x2733a6.indexOf("true"[3]) !== _0xf90627) {
      _0x54d827(_0x2733a6);
    }
  };
  if (!_0x58fd19()) {
    if (!_0x1b1ced()) {
      _0x54d827("indеxOf");
    } else {
      _0x54d827("indexOf");
    }
  } else {
    _0x54d827("indеxOf");
  }
});
_0xc85df4();
var _0x2c2e98 = function () {
  var _0x117987 = true;
  return function (_0x42ec26, _0x2daf73) {
    {
      var _0x52c01d = _0x117987 ? function () {
        {
          if (_0x2daf73) {
            var _0x419aeb = _0x2daf73.apply(_0x42ec26, arguments);
            _0x2daf73 = null;
            return _0x419aeb;
          }
        }
      } : function () {};
      _0x117987 = false;
      return _0x52c01d;
    }
  };
}();
var _0x22ffe8 = _0x2c2e98(this, function () {
  var _0x400737 = function () {};
  var _0x445ed2 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  if (!_0x445ed2.console) {
    {
      _0x445ed2.console = function (_0x3dc1a4) {
        var _0x12cb80 = {};
        _0x12cb80.log = _0x3dc1a4;
        _0x12cb80.warn = _0x3dc1a4;
        _0x12cb80.debug = _0x3dc1a4;
        _0x12cb80.info = _0x3dc1a4;
        _0x12cb80.error = _0x3dc1a4;
        _0x12cb80.exception = _0x3dc1a4;
        _0x12cb80.trace = _0x3dc1a4;
        return _0x12cb80;
      }(_0x400737);
    }
  } else {
    _0x445ed2.console.log = _0x400737;
    _0x445ed2.console.warn = _0x400737;
    _0x445ed2.console.debug = _0x400737;
    _0x445ed2.console.info = _0x400737;
    _0x445ed2.console.error = _0x400737;
    _0x445ed2.console.exception = _0x400737;
    _0x445ed2.console.trace = _0x400737;
  }
});
_0x22ffe8();
a_list = "abcdefghijklmnopqrstuvwxyz";
b_list = "zyxwvutsrqponmlkjihgfedcba";
function getSign(_0x3b2c5c, _0x3577b9) {
  if (_0x3577b9 === 1) {
    a = "";
    $.each(_0x3b2c5c, function (_0x16b5e9, _0x5adf2e) {
      {
        if (a !== "") {
          a = a + "&" + _0x16b5e9 + "=" + _0x5adf2e;
        } else {
          a = a + _0x16b5e9 + "=" + _0x5adf2e;
        }
      }
    });
    if (a !== "") {
      {
        a += "&sign=" + f1();
      }
    } else {
      a += "sign=" + f1();
    }
    var _0x336ca9 = new Base64();
    return _0x336ca9.encode(hex_md5(a));
  } else {
    return hex_md5(_0x3b2c5c + f1());
  }
}
function f1() {
  return String(a_list.indexOf("f") + 1) + String(a_list.indexOf("b") + 4) + f3() + "7ab544f2" + String(Math.pow(b_list.indexOf("t"), 2) + 18) + f5(f4) + String(Math.pow(Math.ceil(1258 / new Date().getTime()) * 10, 2) - 5) + "b2";
}
function f2() {
  return f3(a_list.indexOf("g"));
}
function f3() {
  return String(b_list.indexOf("y") * 8);
}
function f4() {
  return "fe4a5f64a41531b";
}
function f5(_0x1c0fb9) {
  return _0x1c0fb9();
}
function Base64() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x1f0e63) {
    var _0x3dbec8 = "";
    var _0x34a34b;
    var _0x308efc;
    var _0xd202ee;
    var _0x11e51a;
    var _0x288822;
    var _0x5901fa;
    var _0x93ea33;
    var _0x15d495 = 0;
    _0x1f0e63 = _utf8_encode(_0x1f0e63);
    while (_0x15d495 < _0x1f0e63.length) {
      _0x34a34b = _0x1f0e63.charCodeAt(_0x15d495++);
      _0x308efc = _0x1f0e63.charCodeAt(_0x15d495++);
      _0xd202ee = _0x1f0e63.charCodeAt(_0x15d495++);
      _0x11e51a = _0x34a34b >> 2;
      _0x288822 = (_0x34a34b & 3) << 4 | _0x308efc >> 4;
      _0x5901fa = (_0x308efc & 15) << 2 | _0xd202ee >> 6;
      _0x93ea33 = _0xd202ee & 63;
      if (isNaN(_0x308efc)) {
        {
          _0x5901fa = _0x93ea33 = 64;
        }
      } else {
        if (isNaN(_0xd202ee)) {
          {
            _0x93ea33 = 64;
          }
        }
      }
      _0x3dbec8 = _0x3dbec8 + _keyStr.charAt(_0x11e51a) + _keyStr.charAt(_0x288822) + _keyStr.charAt(_0x5901fa) + _keyStr.charAt(_0x93ea33);
    }
    return _0x3dbec8;
  };
  this.decode = function (_0x28208b) {
    {
      var _0x11e5ec = "";
      var _0x781b36;
      var _0x28e573;
      var _0x12b7e4;
      var _0x5a9052;
      var _0x23991d;
      var _0x5f0544;
      var _0x50e7ba;
      var _0x17c4cf = 0;
      _0x28208b = _0x28208b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x17c4cf < _0x28208b.length) {
        {
          _0x5a9052 = _keyStr.indexOf(_0x28208b.charAt(_0x17c4cf++));
          _0x23991d = _keyStr.indexOf(_0x28208b.charAt(_0x17c4cf++));
          _0x5f0544 = _keyStr.indexOf(_0x28208b.charAt(_0x17c4cf++));
          _0x50e7ba = _keyStr.indexOf(_0x28208b.charAt(_0x17c4cf++));
          _0x781b36 = _0x5a9052 << 2 | _0x23991d >> 4;
          _0x28e573 = (_0x23991d & 15) << 4 | _0x5f0544 >> 2;
          _0x12b7e4 = (_0x5f0544 & 3) << 6 | _0x50e7ba;
          _0x11e5ec = _0x11e5ec + String.fromCharCode(_0x781b36);
          if (_0x5f0544 != 64) {
            _0x11e5ec = _0x11e5ec + String.fromCharCode(_0x28e573);
          }
          if (_0x50e7ba != 64) {
            {
              _0x11e5ec = _0x11e5ec + String.fromCharCode(_0x12b7e4);
            }
          }
        }
      }
      _0x11e5ec = _utf8_decode(_0x11e5ec);
      return _0x11e5ec;
    }
  };
  _utf8_encode = function (_0x13ebb8) {
    _0x13ebb8 = _0x13ebb8.replace(/\r\n/g, "\n");
    var _0x35b4c5 = "";
    for (var _0x142ba8 = 0; _0x142ba8 < _0x13ebb8.length; _0x142ba8++) {
      var _0x5357f9 = _0x13ebb8.charCodeAt(_0x142ba8);
      if (_0x5357f9 < 128) {
        _0x35b4c5 += String.fromCharCode(_0x5357f9);
      } else {
        if (_0x5357f9 > 127 && _0x5357f9 < 2048) {
          {
            _0x35b4c5 += String.fromCharCode(_0x5357f9 >> 6 | 192);
            _0x35b4c5 += String.fromCharCode(_0x5357f9 & 63 | 128);
          }
        } else {
          {
            _0x35b4c5 += String.fromCharCode(_0x5357f9 >> 12 | 224);
            _0x35b4c5 += String.fromCharCode(_0x5357f9 >> 6 & 63 | 128);
            _0x35b4c5 += String.fromCharCode(_0x5357f9 & 63 | 128);
          }
        }
      }
    }
    return _0x35b4c5;
  };
  _utf8_decode = function (_0x416de7) {
    var _0x3bd595 = "";
    var _0x4b28a6 = 0;
    c1 = c2 = 0;
    var _0x1f84f1 = c1;
    while (_0x4b28a6 < _0x416de7.length) {
      _0x1f84f1 = _0x416de7.charCodeAt(_0x4b28a6);
      if (_0x1f84f1 < 128) {
        _0x3bd595 += String.fromCharCode(_0x1f84f1);
        _0x4b28a6++;
      } else {
        if (_0x1f84f1 > 191 && _0x1f84f1 < 224) {
          {
            c2 = _0x416de7.charCodeAt(_0x4b28a6 + 1);
            _0x3bd595 += String.fromCharCode((_0x1f84f1 & 31) << 6 | c2 & 63);
            _0x4b28a6 += 2;
          }
        } else {
          {
            c2 = _0x416de7.charCodeAt(_0x4b28a6 + 1);
            c3 = _0x416de7.charCodeAt(_0x4b28a6 + 2);
            _0x3bd595 += String.fromCharCode((_0x1f84f1 & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
            _0x4b28a6 += 3;
          }
        }
      }
    }
    return _0x3bd595;
  };
}