"use strict";

var cov_105pygxngj = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\comments\\sql.js";
  var hash = "0b42dafb38abe2f418045a6236acdccdde88651b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\comments\\sql.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 32
        },
        end: {
          line: 1,
          column: 71
        }
      },
      "1": {
        start: {
          line: 2,
          column: 29
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "2": {
        start: {
          line: 15,
          column: 22
        },
        end: {
          line: 15,
          column: 117
        }
      },
      "3": {
        start: {
          line: 17,
          column: 34
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "4": {
        start: {
          line: 21,
          column: 33
        },
        end: {
          line: 21,
          column: 102
        }
      },
      "5": {
        start: {
          line: 22,
          column: 35
        },
        end: {
          line: 22,
          column: 113
        }
      },
      "6": {
        start: {
          line: 23,
          column: 31
        },
        end: {
          line: 23,
          column: 105
        }
      },
      "7": {
        start: {
          line: 24,
          column: 33
        },
        end: {
          line: 24,
          column: 80
        }
      },
      "8": {
        start: {
          line: 25,
          column: 32
        },
        end: {
          line: 25,
          column: 103
        }
      },
      "9": {
        start: {
          line: 26,
          column: 33
        },
        end: {
          line: 26,
          column: 90
        }
      },
      "10": {
        start: {
          line: 27,
          column: 40
        },
        end: {
          line: 27,
          column: 116
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
      "9": 0,
      "10": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "0b42dafb38abe2f418045a6236acdccdde88651b"
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
exports.deleteFlaggedCommentById = exports.deleteCommentById = exports.flagCommentQuery = exports.searchCommentById = exports.commentsByGifId = exports.commentsByArticleId = exports.updateCommentById = exports.createCommentQuery = exports.commentsTable = exports.dropCommentTable = void 0;
var dropCommentTable = (cov_105pygxngj.s[0]++, 'DROP TABLE IF EXISTS comments CASCADE');
exports.dropCommentTable = dropCommentTable;
var commentsTable = (cov_105pygxngj.s[1]++, "CREATE TABLE comments(\n    \"authourId\" INTEGER NULL,\n   \"articleId\" INTEGER NULL,\n    \"gifId\" INTEGER NULL,\n    \"commentId\" SERIAL PRIMARY KEY NOT NULL,\n    \"createdOn\" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n    comment VARCHAR(255) NOT NULL,\n    FOREIGN KEY (\"authourId\") REFERENCES users(\"userId\") ON DELETE CASCADE,\n    FOREIGN KEY (\"articleId\") REFERENCES articles(\"articleId\") ON DELETE CASCADE,\n    FOREIGN KEY (\"gifId\") REFERENCES gifs(\"gifId\") ON DELETE CASCADE,\n    flagged BOOLEAN DEFAULT false\n)");
exports.commentsTable = commentsTable;
var createComment = (cov_105pygxngj.s[2]++, "INSERT INTO comments(\"authourId\",\"articleId\",\"gifId\",comment) VALUES($1,$2,$3,$4) RETURNING *");
var createCommentQuery = (cov_105pygxngj.s[3]++, {
  createComment: createComment
});
exports.createCommentQuery = createCommentQuery;
var updateCommentById = (cov_105pygxngj.s[4]++, "UPDATE comments SET comment = $1 WHERE \"commentId\" = $2 RETURNING *");
exports.updateCommentById = updateCommentById;
var commentsByArticleId = (cov_105pygxngj.s[5]++, "SELECT \"commentId\",comment, \"authourId\" FROM comments WHERE \"articleId\" = $1");
exports.commentsByArticleId = commentsByArticleId;
var commentsByGifId = (cov_105pygxngj.s[6]++, "SELECT \"commentId\",comment, \"authourId\" FROM comments WHERE \"gifId\" = $1");
exports.commentsByGifId = commentsByGifId;
var searchCommentById = (cov_105pygxngj.s[7]++, "SELECT * FROM comments WHERE \"commentId\" = $1");
exports.searchCommentById = searchCommentById;
var flagCommentQuery = (cov_105pygxngj.s[8]++, "UPDATE comments SET flagged = true WHERE \"commentId\" = $1 RETURNING *");
exports.flagCommentQuery = flagCommentQuery;
var deleteCommentById = (cov_105pygxngj.s[9]++, "DELETE FROM comments WHERE \"commentId\" = $1 RETURNING *");
exports.deleteCommentById = deleteCommentById;
var deleteFlaggedCommentById = (cov_105pygxngj.s[10]++, "DELETE FROM comments WHERE \"commentId\" = $1 AND flagged = true RETURNING *");
exports.deleteFlaggedCommentById = deleteFlaggedCommentById;