"use strict";

var cov_6lu3wrjsq = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\config\\pool.js";
  var hash = "2b9e84ef799352dac48f0fd2164772179524c58c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\config\\pool.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 0
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 1
        },
        end: {
          line: 9,
          column: 3
        }
      },
      "2": {
        start: {
          line: 11,
          column: 1
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 33,
          column: 0
        },
        end: {
          line: 33,
          column: 21
        }
      },
      "4": {
        start: {
          line: 35,
          column: 13
        },
        end: {
          line: 39,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 6,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }, {
          start: {
            line: 6,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }],
        line: 6
      },
      "1": {
        loc: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 39
          }
        }, {
          start: {
            line: 12,
            column: 43
          },
          end: {
            line: 12,
            column: 61
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
      "4": 0
    },
    f: {},
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2b9e84ef799352dac48f0fd2164772179524c58c"
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

var _pg = require("pg");

require("dotenv/config");

var connect;
cov_6lu3wrjsq.s[0]++;

if (process.env.NODE_ENV === 'test') {
  cov_6lu3wrjsq.b[0][0]++;
  cov_6lu3wrjsq.s[1]++;
  connect = {
    connectionString: process.env.TEST_DB
  };
} else {
  cov_6lu3wrjsq.b[0][1]++;
  cov_6lu3wrjsq.s[2]++;
  connect = {
    connectionString: (cov_6lu3wrjsq.b[1][0]++, process.env.PROD_DB) || (cov_6lu3wrjsq.b[1][1]++, process.env.DEV_DB)
  };
} // switch (process.env.NODE_ENV) {
// 	case 'test':
// 		connect = {
// 			connectionString: process.env.DEV_DB
// 		};
// 		break;
// 	case 'production':
// 		connect = {
// 			connectionString: process.env.PROD_DEV
// 		};
// 		break;
// 	default:
// 		connect = {
// 			connectionString: process.env.DEV_DB
// 		};
// 		break;
// }


cov_6lu3wrjsq.s[3]++;
console.log(connect);
var pool = (cov_6lu3wrjsq.s[4]++, new _pg.Pool({
  connect: connect,
  max: 10,
  idleTimeoutMillis: 30000
}));
var _default = pool;
exports["default"] = _default;