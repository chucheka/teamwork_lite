"use strict";

var cov_guzuvwvbs = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\comments.js";
  var hash = "093940dcd877d1c85bb009e52ea492cb5a3ca445";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\validator\\comments.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 33
        },
        end: {
          line: 19,
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
          column: 19
        },
        end: {
          line: 6,
          column: 23
        }
      },
      "3": {
        start: {
          line: 8,
          column: 1
        },
        end: {
          line: 8,
          column: 45
        }
      },
      "4": {
        start: {
          line: 10,
          column: 1
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "5": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 45
        }
      },
      "6": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 15
        }
      },
      "7": {
        start: {
          line: 15,
          column: 1
        },
        end: {
          line: 18,
          column: 2
        }
      },
      "8": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 64
        }
      },
      "9": {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
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
            column: 33
          },
          end: {
            line: 4,
            column: 34
          }
        },
        loc: {
          start: {
            line: 4,
            column: 43
          },
          end: {
            line: 19,
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
            column: 11
          },
          end: {
            line: 8,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 8,
            column: 31
          },
          end: {
            line: 8,
            column: 38
          }
        }, {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 8,
            column: 44
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 1
          },
          end: {
            line: 13,
            column: 2
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 1
          },
          end: {
            line: 13,
            column: 2
          }
        }, {
          start: {
            line: 10,
            column: 1
          },
          end: {
            line: 13,
            column: 2
          }
        }],
        line: 10
      },
      "2": {
        loc: {
          start: {
            line: 15,
            column: 1
          },
          end: {
            line: 18,
            column: 2
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 1
          },
          end: {
            line: 18,
            column: 2
          }
        }, {
          start: {
            line: 15,
            column: 1
          },
          end: {
            line: 18,
            column: 2
          }
        }],
        line: 15
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
    hash: "093940dcd877d1c85bb009e52ea492cb5a3ca445"
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

cov_guzuvwvbs.s[0]++;

var validateEditCommentInput = function validateEditCommentInput(data) {
  cov_guzuvwvbs.f[0]++;
  var error = (cov_guzuvwvbs.s[1]++, {});

  var _ref = (cov_guzuvwvbs.s[2]++, data),
      comment = _ref.comment;

  cov_guzuvwvbs.s[3]++;
  comment = !(0, _isEmpty["default"])(comment) ? (cov_guzuvwvbs.b[0][0]++, comment) : (cov_guzuvwvbs.b[0][1]++, ' ');
  cov_guzuvwvbs.s[4]++;

  if (_validator["default"].matches(comment, /fuck|stupid|sex/gi)) {
    cov_guzuvwvbs.b[1][0]++;
    cov_guzuvwvbs.s[5]++;
    error.comment = 'Foul words are forbidden';
    cov_guzuvwvbs.s[6]++;
    return error;
  } else {
    cov_guzuvwvbs.b[1][1]++;
  }

  cov_guzuvwvbs.s[7]++;

  if (!_validator["default"].isLength(article, {
    max: 500
  })) {
    cov_guzuvwvbs.b[2][0]++;
    cov_guzuvwvbs.s[8]++;
    error.article = 'Comment must contain maximum 500 characters';
    cov_guzuvwvbs.s[9]++;
    return error;
  } else {
    cov_guzuvwvbs.b[2][1]++;
  }
};

var _default = validateEditCommentInput;
exports["default"] = _default;