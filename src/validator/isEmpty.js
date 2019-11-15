"use strict";

var cov_o9h979hed = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\isEmpty.js";
  var hash = "914124f9882f7733d26a823a100df96e25554387";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\isEmpty.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 1
        },
        end: {
          line: 9,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 16
          },
          end: {
            line: 3,
            column: 17
          }
        },
        loc: {
          start: {
            line: 3,
            column: 27
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 8,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 5,
            column: 2
          },
          end: {
            line: 5,
            column: 21
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 6,
            column: 16
          }
        }, {
          start: {
            line: 7,
            column: 3
          },
          end: {
            line: 7,
            column: 28
          }
        }, {
          start: {
            line: 7,
            column: 32
          },
          end: {
            line: 7,
            column: 63
          }
        }, {
          start: {
            line: 8,
            column: 3
          },
          end: {
            line: 8,
            column: 28
          }
        }, {
          start: {
            line: 8,
            column: 32
          },
          end: {
            line: 8,
            column: 57
          }
        }],
        line: 5
      }
    },
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "914124f9882f7733d26a823a100df96e25554387"
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

cov_o9h979hed.s[0]++;

// Is empty means any of the following conditions
var isEmpty = function isEmpty(value) {
  cov_o9h979hed.f[0]++;
  cov_o9h979hed.s[1]++;
  return (cov_o9h979hed.b[0][0]++, value === undefined) || (cov_o9h979hed.b[0][1]++, value === null) || (cov_o9h979hed.b[0][2]++, _typeof(value) === 'object') && (cov_o9h979hed.b[0][3]++, Object.keys(value).length === 0) || (cov_o9h979hed.b[0][4]++, typeof value === 'string') && (cov_o9h979hed.b[0][5]++, value.trim().length === 0);
};

var _default = isEmpty;
exports["default"] = _default;