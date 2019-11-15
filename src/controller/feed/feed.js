"use strict";

var cov_1h1fv8tmx8 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\controller\\feed\\feed.js";
  var hash = "9c10a893c3535545091a769638fbe518fc5cfc81";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\controller\\feed\\feed.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "1": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 50
        }
      },
      "2": {
        start: {
          line: 7,
          column: 14
        },
        end: {
          line: 7,
          column: 42
        }
      },
      "3": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "4": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 61
        }
      },
      "5": {
        start: {
          line: 12,
          column: 3
        },
        end: {
          line: 22,
          column: 4
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 16,
          column: 7
        }
      },
      "7": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 21,
          column: 7
        }
      },
      "8": {
        start: {
          line: 24,
          column: 3
        },
        end: {
          line: 24,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 1
          },
          end: {
            line: 4,
            column: 2
          }
        },
        loc: {
          start: {
            line: 4,
            column: 39
          },
          end: {
            line: 26,
            column: 2
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 56
          },
          end: {
            line: 8,
            column: 57
          }
        },
        loc: {
          start: {
            line: 8,
            column: 66
          },
          end: {
            line: 10,
            column: 4
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 3
          },
          end: {
            line: 22,
            column: 4
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 3
          },
          end: {
            line: 22,
            column: 4
          }
        }, {
          start: {
            line: 12,
            column: 3
          },
          end: {
            line: 22,
            column: 4
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "9c10a893c3535545091a769638fbe518fc5cfc81"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pool = _interopRequireDefault(require("../../config/pool"));

var _feed = require("../../models/feed/feed");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var feedController =
/*#__PURE__*/
function () {
  function feedController() {
    _classCallCheck(this, feedController);
  }

  _createClass(feedController, null, [{
    key: "getFeeds",
    value: function () {
      var _getFeeds = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(req, res, next) {
        var articles, gifs, feed;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_1h1fv8tmx8.f[0]++;
                cov_1h1fv8tmx8.s[0]++;
                _context.prev = 2;
                cov_1h1fv8tmx8.s[1]++;
                _context.next = 6;
                return _pool["default"].query(_feed.getAllArticles);

              case 6:
                articles = _context.sent;
                cov_1h1fv8tmx8.s[2]++;
                _context.next = 10;
                return _pool["default"].query(_feed.getAllGifs);

              case 10:
                gifs = _context.sent;
                feed = (cov_1h1fv8tmx8.s[3]++, [].concat(_toConsumableArray(articles.rows), _toConsumableArray(gifs.rows)).sort(function (a, b) {
                  cov_1h1fv8tmx8.f[1]++;
                  cov_1h1fv8tmx8.s[4]++;
                  return Date.parse(b.createdOn) - Date.parse(a.createdOn);
                }));
                cov_1h1fv8tmx8.s[5]++;

                if (!(feed.length > 0)) {
                  _context.next = 19;
                  break;
                }

                cov_1h1fv8tmx8.b[0][0]++;
                cov_1h1fv8tmx8.s[6]++;
                return _context.abrupt("return", res.status(200).json({
                  status: 'success',
                  data: feed
                }));

              case 19:
                cov_1h1fv8tmx8.b[0][1]++;
                cov_1h1fv8tmx8.s[7]++;
                return _context.abrupt("return", res.status(404).json({
                  status: 'error',
                  error: 'There are no posted articles or gifs'
                }));

              case 22:
                _context.next = 28;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context["catch"](2);
                cov_1h1fv8tmx8.s[8]++;
                console.log(_context.t0);

              case 28:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 24]]);
      }));

      function getFeeds(_x, _x2, _x3) {
        return _getFeeds.apply(this, arguments);
      }

      return getFeeds;
    }()
  }]);

  return feedController;
}();

var _default = feedController;
exports["default"] = _default;