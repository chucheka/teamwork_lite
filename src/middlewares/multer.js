"use strict";

var cov_3cs3p1d91 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\middlewares\\multer.js";
  var hash = "0c8f582dd026a77e5becfd18bbd011067135d0b5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\middlewares\\multer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 16
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "2": {
        start: {
          line: 7,
          column: 3
        },
        end: {
          line: 7,
          column: 49
        }
      },
      "3": {
        start: {
          line: 8,
          column: 3
        },
        end: {
          line: 8,
          column: 10
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 13
          },
          end: {
            line: 5,
            column: 14
          }
        },
        loc: {
          start: {
            line: 5,
            column: 32
          },
          end: {
            line: 11,
            column: 2
          }
        },
        line: 5
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        }, {
          start: {
            line: 6,
            column: 2
          },
          end: {
            line: 9,
            column: 3
          }
        }],
        line: 6
      }
    },
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
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0c8f582dd026a77e5becfd18bbd011067135d0b5"
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

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var uploads = (cov_3cs3p1d91.s[0]++, (0, _multer["default"])({
  storage: _multer["default"].diskStorage({}),
  fileFilter: function fileFilter(req, file, cb) {
    cov_3cs3p1d91.f[0]++;
    cov_3cs3p1d91.s[1]++;

    if (!file.mimetype.match(/gif$/i)) {
      cov_3cs3p1d91.b[0][0]++;
      cov_3cs3p1d91.s[2]++;
      cb(new Error('Only gifs are allowed'), false);
      cov_3cs3p1d91.s[3]++;
      return;
    } else {
      cov_3cs3p1d91.b[0][1]++;
    }

    cov_3cs3p1d91.s[4]++;
    cb(null, true);
  }
}));
var _default = uploads;
exports["default"] = _default;