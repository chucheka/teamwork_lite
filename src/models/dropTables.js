"use strict";

var cov_2kjpbe7r59 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\dropTables.js";
  var hash = "40711d413ffadb36ba570f00f9099027b426d7d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\dropTables.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 1
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "1": {
        start: {
          line: 9,
          column: 19
        },
        end: {
          line: 9,
          column: 46
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 51
        }
      },
      "3": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 27
        }
      },
      "4": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 33
        }
      },
      "5": {
        start: {
          line: 16,
          column: 0
        },
        end: {
          line: 16,
          column: 40
        }
      },
      "6": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 32
        }
      },
      "7": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "dropTable",
        decl: {
          start: {
            line: 7,
            column: 15
          },
          end: {
            line: 7,
            column: 24
          }
        },
        loc: {
          start: {
            line: 7,
            column: 47
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 7
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
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "40711d413ffadb36ba570f00f9099027b426d7d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

var _pool = _interopRequireDefault(require("../config/pool"));

var _sql = require("./users/sql");

var _sql2 = require("./articles/sql");

var _sql3 = require("./gifs/sql");

var _sql4 = require("./comments/sql");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function dropTable(_x, _x2) {
  return _dropTable.apply(this, arguments);
}

function _dropTable() {
  _dropTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(queryText, tableName) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_2kjpbe7r59.f[0]++;
            cov_2kjpbe7r59.s[0]++;
            _context.prev = 2;
            cov_2kjpbe7r59.s[1]++;
            _context.next = 6;
            return _pool["default"].query(queryText);

          case 6:
            response = _context.sent;
            cov_2kjpbe7r59.s[2]++;
            console.log("".concat(tableName, " table has be dropped"));
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            cov_2kjpbe7r59.s[3]++;
            console.log(_context.t0.stack);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));
  return _dropTable.apply(this, arguments);
}

cov_2kjpbe7r59.s[4]++;
dropTable(_sql.dropUserTable, 'User');
cov_2kjpbe7r59.s[5]++;
dropTable(_sql2.dropArticleTable, 'Articles');
cov_2kjpbe7r59.s[6]++;
dropTable(_sql3.dropGifTable, 'Gifs');
cov_2kjpbe7r59.s[7]++;
dropTable(_sql4.dropCommentTable, 'Comments');