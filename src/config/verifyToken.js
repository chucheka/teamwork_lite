"use strict";

var cov_1b5k2frfjt = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\config\\verifyToken.js";
  var hash = "ec8b99ec9040d01e7bb30a5690664c00e31b43cf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\config\\verifyToken.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 20
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 1
        },
        end: {
          line: 14,
          column: 2
        }
      },
      "2": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 5,
          column: 55
        }
      },
      "3": {
        start: {
          line: 6,
          column: 18
        },
        end: {
          line: 6,
          column: 62
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 21
        }
      },
      "5": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 9
        }
      },
      "6": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 13,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 46
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "ec8b99ec9040d01e7bb30a5690664c00e31b43cf"
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

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

cov_1b5k2frfjt.s[0]++;

var verifyToken =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, payload;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_1b5k2frfjt.f[0]++;
            cov_1b5k2frfjt.s[1]++;
            _context.prev = 2;
            token = (cov_1b5k2frfjt.s[2]++, req.headers.authorization.split(' ')[1]);
            cov_1b5k2frfjt.s[3]++;
            _context.next = 7;
            return _jsonwebtoken["default"].verify(token, process.env.JWT_KEY);

          case 7:
            payload = _context.sent;
            cov_1b5k2frfjt.s[4]++;
            req.user = payload;
            cov_1b5k2frfjt.s[5]++;
            next();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            cov_1b5k2frfjt.s[6]++;
            return _context.abrupt("return", res.status(403).json({
              status: 'error',
              error: 'Invalid token supplied'
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = verifyToken;
exports["default"] = _default;