"use strict";

var cov_2n20l2wogk = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\comments.js";
  var hash = "21457f8fd11e11f7795f7ff2df4faea78208033f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\comments.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 1
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "1": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 5,
          column: 46
        }
      },
      "2": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 51
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 27
        }
      },
      "4": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 39
        }
      }
    },
    fnMap: {
      "0": {
        name: "createTable",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 26
          }
        },
        loc: {
          start: {
            line: 3,
            column: 49
          },
          end: {
            line: 10,
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
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "21457f8fd11e11f7795f7ff2df4faea78208033f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _pool = _interopRequireDefault(require("../config/pool"));

var _sql = require("./comments/sql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTable(_x, _x2) {
  return _createTable.apply(this, arguments);
}

function _createTable() {
  _createTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(queryText, tableName) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_2n20l2wogk.f[0]++;
            cov_2n20l2wogk.s[0]++;
            _context.prev = 2;
            cov_2n20l2wogk.s[1]++;
            _context.next = 6;
            return _pool["default"].query(queryText);

          case 6:
            response = _context.sent;
            cov_2n20l2wogk.s[2]++;
            console.log("".concat(tableName, " table has be created"));
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            cov_2n20l2wogk.s[3]++;
            console.log(_context.t0.stack);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));
  return _createTable.apply(this, arguments);
}

cov_2n20l2wogk.s[4]++;
createTable(_sql.commentsTable, 'Comments');