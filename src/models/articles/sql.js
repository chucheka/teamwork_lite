"use strict";

var cov_2mhytao8o5 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\articles\\sql.js";
  var hash = "df13111b4871fc6e074706934c514b6eb17bc560";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\articles\\sql.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 32
        },
        end: {
          line: 3,
          column: 71
        }
      },
      "1": {
        start: {
          line: 4,
          column: 29
        },
        end: {
          line: 11,
          column: 2
        }
      },
      "2": {
        start: {
          line: 13,
          column: 22
        },
        end: {
          line: 13,
          column: 92
        }
      },
      "3": {
        start: {
          line: 14,
          column: 22
        },
        end: {
          line: 14,
          column: 78
        }
      },
      "4": {
        start: {
          line: 16,
          column: 34
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "5": {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 21,
          column: 80
        }
      },
      "6": {
        start: {
          line: 23,
          column: 33
        },
        end: {
          line: 23,
          column: 122
        }
      },
      "7": {
        start: {
          line: 25,
          column: 33
        },
        end: {
          line: 25,
          column: 90
        }
      },
      "8": {
        start: {
          line: 26,
          column: 40
        },
        end: {
          line: 26,
          column: 116
        }
      },
      "9": {
        start: {
          line: 27,
          column: 32
        },
        end: {
          line: 27,
          column: 103
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
      "8": 0,
      "9": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "df13111b4871fc6e074706934c514b6eb17bc560"
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
exports.flagArticleQuery = exports.deleteFlaggedArticleById = exports.deleteArticleById = exports.updateArticleById = exports.searchArticleById = exports.createArticleQuery = exports.articlesTable = exports.dropArticleTable = void 0;

var _objects = require("../objects");

var dropArticleTable = (cov_2mhytao8o5.s[0]++, 'DROP TABLE IF EXISTS articles CASCADE');
exports.dropArticleTable = dropArticleTable;
var articlesTable = (cov_2mhytao8o5.s[1]++, "CREATE TABLE articles(\n    \"articleId\" SERIAL PRIMARY KEY NOT NULL,\n   \"createdOn\" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n    article VARCHAR(255) NOT NULL,\n    title VARCHAR(255) NOT NULL,\n    flagged BOOLEAN DEFAULT false,\n    tag VARCHAR(30) NULL\n)");
exports.articlesTable = articlesTable;
var createArticle = (cov_2mhytao8o5.s[2]++, "INSERT INTO articles(article,title,tag) VALUES($1,$2,$3) RETURNING *");
var articleValues = (cov_2mhytao8o5.s[3]++, [_objects.articleObj.article, _objects.articleObj.title, _objects.articleObj.tag]);
var createArticleQuery = (cov_2mhytao8o5.s[4]++, {
  createArticle: createArticle,
  articleValues: articleValues
});
exports.createArticleQuery = createArticleQuery;
var searchArticleById = (cov_2mhytao8o5.s[5]++, "SELECT * FROM articles WHERE \"articleId\" = $1");
exports.searchArticleById = searchArticleById;
var updateArticleById = (cov_2mhytao8o5.s[6]++, "UPDATE articles SET article = $1,title = $2,tag = $3 WHERE \"articleId\" = $4 RETURNING *");
exports.updateArticleById = updateArticleById;
var deleteArticleById = (cov_2mhytao8o5.s[7]++, "DELETE FROM articles WHERE \"articleId\" = $1 RETURNING *");
exports.deleteArticleById = deleteArticleById;
var deleteFlaggedArticleById = (cov_2mhytao8o5.s[8]++, "DELETE FROM articles WHERE \"articleId\" = $1 AND flagged = true RETURNING *");
exports.deleteFlaggedArticleById = deleteFlaggedArticleById;
var flagArticleQuery = (cov_2mhytao8o5.s[9]++, "UPDATE articles SET flagged = true WHERE \"articleId\" = $1 RETURNING *");
exports.flagArticleQuery = flagArticleQuery;