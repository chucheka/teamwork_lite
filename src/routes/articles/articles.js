"use strict";

var cov_idq5gdbee = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\articles\\articles.js";
  var hash = "17bc9038610dc806118e4bb406762655b478ff47";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\routes\\articles\\articles.js",
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
          column: 69
        }
      },
      "2": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 15,
          column: 81
        }
      },
      "3": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 20,
          column: 82
        }
      },
      "4": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 84
        }
      },
      "5": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 89
        }
      },
      "6": {
        start: {
          line: 35,
          column: 0
        },
        end: {
          line: 35,
          column: 86
        }
      },
      "7": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 39,
          column: 96
        }
      },
      "8": {
        start: {
          line: 43,
          column: 0
        },
        end: {
          line: 43,
          column: 76
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
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "17bc9038610dc806118e4bb406762655b478ff47"
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

var _articles = _interopRequireDefault(require("../../controller/articles/articles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (cov_idq5gdbee.s[0]++, _express["default"].Router()); //@ route POST /api/v1/articles
//@ desc User can post articles
// @ access private

cov_idq5gdbee.s[1]++;
router.post('/articles', _verifyToken["default"], _articles["default"].postArticle); //@ route PATCH /api/v1/articles/:articleId
//@ desc User can edit article
// @ access private

cov_idq5gdbee.s[2]++;
router.patch('/articles/:articleId', _verifyToken["default"], _articles["default"].editArticle); //@ route GET /api/v1/articles/:articleId
//@ desc User can get article
// @ access private

cov_idq5gdbee.s[3]++;
router.get('/articles/:articleId', _verifyToken["default"], _articles["default"].getArticleById); //@ route DELETE /api/v1/articles/:articleId
//@ desc User can delete article
// @ access private

cov_idq5gdbee.s[4]++;
router["delete"]('/articles/:articleId', _verifyToken["default"], _articles["default"].deleteArticle); //@ route POST /api/v1/articles/:articleId/comment
//@ desc User can comment on an article
// @ access private

cov_idq5gdbee.s[5]++;
router.patch('/articles/:articleId/comment', _verifyToken["default"], _articles["default"].postComment); //@ route PATCH /api/v1/articles/:articleId/flag
//@ desc User can flag article(s) has inapropriate
// @ access private

cov_idq5gdbee.s[6]++;
router.patch('/articles/:articleId/flag', _verifyToken["default"], _articles["default"].flagArticle); //@ route DELETE /api/v1/articles/:articleId/flag
//@ desc Admin can delete article(s) flagged as inappropriate
//@ access private

cov_idq5gdbee.s[7]++;
router["delete"]('/articles/:articleId/flag', _verifyToken["default"], _articles["default"].deleteFlaggedArticle); //@ route GET /api/v1/articles?tag={tagName}
//@ desc User can view all articles in a particular catergory
// @ access private

cov_idq5gdbee.s[8]++;
router.get('/articles', _verifyToken["default"], _articles["default"].getArticleByTagName);
var _default = router;
exports["default"] = _default;