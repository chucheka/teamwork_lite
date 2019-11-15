"use strict";

var cov_1ga82so815 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\gifs\\gifs.js";
  var hash = "245d2724ed68f61a706494dd7a84d98b3e4061c3";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\gifs\\gifs.js",
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
          column: 68
        }
      },
      "3": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 66
        }
      },
      "4": {
        start: {
          line: 22,
          column: 0
        },
        end: {
          line: 22,
          column: 76
        }
      },
      "5": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 70
        }
      },
      "6": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 80
        }
      }
    },
    fnMap: {},
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
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "245d2724ed68f61a706494dd7a84d98b3e4061c3"
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

var _gifs = _interopRequireDefault(require("../../controller/gifs/gifs"));

var _multer = _interopRequireDefault(require("../../middlewares/multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_1ga82so815.s[0]++, _express["default"].Router()); //@ route POST /api/v1/gifs
//@ desc User can post gifs
// @ access private

cov_1ga82so815.s[1]++;
router.post('/gifs', _verifyToken["default"], _multer["default"].single('image'), _gifs["default"].postGif); //@ route DELETE /api/v1/gifs/:gifId
//@ desc User can delete gif
// @ access private

cov_1ga82so815.s[2]++;
router["delete"]('/gifs/:gifId', _verifyToken["default"], _gifs["default"].deleteGif); //@ route GET /api/v1/gifs/:gifId
//@ desc User can GET gif with gifId
// @ access private

cov_1ga82so815.s[3]++;
router.get('/gifs/:gifId', _verifyToken["default"], _gifs["default"].getGifById); //@ route POST /api/v1/gifs/:gifId/comment
//@ desc User can comment on  gif with gifId
// @ access private

cov_1ga82so815.s[4]++;
router.post('/gifs/:gifId/comment', _verifyToken["default"], _gifs["default"].postComment); //@ route PATCH /api/v1/gifs/:gifId/flag
//@ desc User can flag gif(s) has inapropriate
// @ access private

cov_1ga82so815.s[5]++;
router.patch('/gifs/:gifId/flag', _verifyToken["default"], _gifs["default"].flagGif); //@ route DELETE /api/v1/gifs/:gifId/flag
//@ desc Admin can delete flagged gif
// @ access private

cov_1ga82so815.s[6]++;
router["delete"]('/gifs/:gifId/flag', _verifyToken["default"], _gifs["default"].deleteFlaggedGif);
var _default = router;
exports["default"] = _default;