"use strict";

var cov_ilxwucp0l = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\index.js";
  var hash = "40a4bb94ebaf1eab58d19cb99417c50da1f64fa9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 1
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "1": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 46
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 51
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 27
        }
      },
      "4": {
        start: {
          line: 23,
          column: 0
        },
        end: {
          line: 23,
          column: 31
        }
      },
      "5": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 39
        }
      },
      "6": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 31
        }
      }
    },
    fnMap: {
      "0": {
        name: "createTable",
        decl: {
          start: {
            line: 6,
            column: 15
          },
          end: {
            line: 6,
            column: 26
          }
        },
        loc: {
          start: {
            line: 6,
            column: 49
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 6
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
    hash: "40a4bb94ebaf1eab58d19cb99417c50da1f64fa9"
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createTable(_x, _x2) {
  return _createTable.apply(this, arguments);
} // async function queryRunner(queryText, queryValue) {
// 	try {
// 		const result = await pool.query(queryText, queryValue);
// 	} catch (error) {
// 		console.log(error.stack);
// 	}
// }


function _createTable() {
  _createTable = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(queryText, tableName) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            cov_ilxwucp0l.f[0]++;
            cov_ilxwucp0l.s[0]++;
            _context.prev = 2;
            cov_ilxwucp0l.s[1]++;
            _context.next = 6;
            return _pool["default"].query(queryText);

          case 6:
            response = _context.sent;
            cov_ilxwucp0l.s[2]++;
            console.log("".concat(tableName, " table has be created"));
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            cov_ilxwucp0l.s[3]++;
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

cov_ilxwucp0l.s[4]++;
createTable(_sql.userTable, 'User');
cov_ilxwucp0l.s[5]++;
createTable(_sql2.articlesTable, 'Articles');
cov_ilxwucp0l.s[6]++;
createTable(_sql3.gifsTable, 'Gifs');