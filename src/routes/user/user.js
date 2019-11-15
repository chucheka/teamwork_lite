"use strict";

var cov_3w25yj583 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\user\\user.js";
  var hash = "8fbc34f032fbc5ba244c9de4ad2bb42ec9b203fd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\user\\user.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 3,
          column: 31
        }
      },
      "1": {
        start: {
          line: 8,
          column: 0
        },
        end: {
          line: 8,
          column: 58
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 12,
          column: 50
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "8fbc34f032fbc5ba244c9de4ad2bb42ec9b203fd"
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

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../../controller/user/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_3w25yj583.s[0]++, _express["default"].Router()); //@ route POST /api/v1/auth/create-user
//@ desc creates accout for user
// @ access public

cov_3w25yj583.s[1]++;
router.post('/create-user', _user["default"].createAccount); //@ route POST /api/v1/auth/signin
//@ desc log in  user
// @ access public

cov_3w25yj583.s[2]++;
router.post('/signin', _user["default"].signInUser);
var _default = router;
exports["default"] = _default;