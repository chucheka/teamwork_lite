"use strict";

var cov_1expyy39il = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\comments\\comments.js";
  var hash = "660eb42cb214794f55006b4800be2ba078fb3083";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\comments\\comments.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 31
        }
      },
      "1": {
        start: {
          line: 10,
          column: 0
        },
        end: {
          line: 10,
          column: 82
        }
      },
      "2": {
        start: {
          line: 14,
          column: 0
        },
        end: {
          line: 14,
          column: 87
        }
      },
      "3": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 97
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "660eb42cb214794f55006b4800be2ba078fb3083"
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

var _comments = _interopRequireDefault(require("../../controller/comments/comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_1expyy39il.s[0]++, _express["default"].Router()); //@ route POST /api/v1/articles/:articleId/comment
//@ desc User can comment on an article
// @ access private

cov_1expyy39il.s[1]++;
router.patch('/comments/:commentId', _verifyToken["default"], _comments["default"].editComment); //@ route PATCH /api/v1/comments/:commentId/flag
//@ desc User can flag comment(s) has inapropriate
// @ access private

cov_1expyy39il.s[2]++;
router.patch('/comments/:commentId/flag', _verifyToken["default"], _comments["default"].flagComment); //@ route DELETE /api/v1/comments/:commentId/flag
//@ desc Admin can delete comment(s) flagged as inappropriate
//@ access private

cov_1expyy39il.s[3]++;
router["delete"]('/comments/:commentId/flag', _verifyToken["default"], _comments["default"].deleteFlaggedComment);
var _default = router;
exports["default"] = _default;