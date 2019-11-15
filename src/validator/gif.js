"use strict";

var cov_2mddfe6ek = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\gif.js";
  var hash = "95ecd71bacb3fbbd54cc29ee5fb747f79101edc4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\gif.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 25
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 5,
          column: 15
        }
      },
      "2": {
        start: {
          line: 6,
          column: 17
        },
        end: {
          line: 6,
          column: 21
        }
      },
      "3": {
        start: {
          line: 8,
          column: 1
        },
        end: {
          line: 8,
          column: 39
        }
      },
      "4": {
        start: {
          line: 9,
          column: 1
        },
        end: {
          line: 12,
          column: 2
        }
      },
      "5": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "6": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 15
        }
      },
      "7": {
        start: {
          line: 13,
          column: 1
        },
        end: {
          line: 16,
          column: 2
        }
      },
      "8": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 63
        }
      },
      "9": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 25
          },
          end: {
            line: 4,
            column: 26
          }
        },
        loc: {
          start: {
            line: 4,
            column: 35
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 4
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 9
          },
          end: {
            line: 8,
            column: 38
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 32
          }
        }, {
          start: {
            line: 8,
            column: 35
          },
          end: {
            line: 8,
            column: 38
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 1
          },
          end: {
            line: 12,
            column: 2
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 9,
            column: 1
          },
          end: {
            line: 12,
            column: 2
          }
        }, {
          start: {
            line: 9,
            column: 1
          },
          end: {
            line: 12,
            column: 2
          }
        }],
        line: 9
      },
      "2": {
        loc: {
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 16,
            column: 2
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 16,
            column: 2
          }
        }, {
          start: {
            line: 13,
            column: 1
          },
          end: {
            line: 16,
            column: 2
          }
        }],
        line: 13
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "95ecd71bacb3fbbd54cc29ee5fb747f79101edc4"
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

var _validator = _interopRequireDefault(require("validator"));

var _isEmpty = _interopRequireDefault(require("./isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

cov_2mddfe6ek.s[0]++;

var validateGifInput = function validateGifInput(data) {
  cov_2mddfe6ek.f[0]++;
  var error = (cov_2mddfe6ek.s[1]++, {});

  var _ref = (cov_2mddfe6ek.s[2]++, data),
      title = _ref.title;

  cov_2mddfe6ek.s[3]++;
  title = !(0, _isEmpty["default"])(title) ? (cov_2mddfe6ek.b[0][0]++, title) : (cov_2mddfe6ek.b[0][1]++, ' ');
  cov_2mddfe6ek.s[4]++;

  if (_validator["default"].isEmpty(title)) {
    cov_2mddfe6ek.b[1][0]++;
    cov_2mddfe6ek.s[5]++;
    error.title = 'Title field is required';
    cov_2mddfe6ek.s[6]++;
    return error;
  } else {
    cov_2mddfe6ek.b[1][1]++;
  }

  cov_2mddfe6ek.s[7]++;

  if (!_validator["default"].isLength(title, {
    min: 1,
    max: 100
  })) {
    cov_2mddfe6ek.b[2][0]++;
    cov_2mddfe6ek.s[8]++;
    error.title = 'Title must contain maximum of 100 characters';
    cov_2mddfe6ek.s[9]++;
    return error;
  } else {
    cov_2mddfe6ek.b[2][1]++;
  }
};

var _default = validateGifInput;
exports["default"] = _default;