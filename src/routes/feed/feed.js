"use strict";

var cov_npshqruew = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\feed\\feed.js";
  var hash = "2689f8194f12e437a19dd21bbd0e7dbbf233ae34";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\feed\\feed.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
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
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "2689f8194f12e437a19dd21bbd0e7dbbf233ae34"
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

var _verifyToken = _interopRequireDefault(require("../../config/verifyToken"));

var _feed = _interopRequireDefault(require("../../controller/feed/feed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_npshqruew.s[0]++, _express["default"].Router()); //@ route GET /api/v1/feeds
//@ desc User can GET feeds
// @ access private

cov_npshqruew.s[1]++;
router.get('/feed', _verifyToken["default"], _feed["default"].getFeeds);
var _default = router;
exports["default"] = _default;