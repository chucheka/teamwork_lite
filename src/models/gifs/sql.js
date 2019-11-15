"use strict";

var cov_rcetsoynb = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\gifs\\sql.js";
  var hash = "540ab2954fa7d6ca7691f99eeb71d1ab05f9e276";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\gifs\\sql.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 28
        },
        end: {
          line: 2,
          column: 63
        }
      },
      "1": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 9,
          column: 2
        }
      },
      "2": {
        start: {
          line: 10,
          column: 29
        },
        end: {
          line: 10,
          column: 68
        }
      },
      "3": {
        start: {
          line: 11,
          column: 29
        },
        end: {
          line: 11,
          column: 78
        }
      },
      "4": {
        start: {
          line: 12,
          column: 18
        },
        end: {
          line: 12,
          column: 80
        }
      },
      "5": {
        start: {
          line: 13,
          column: 18
        },
        end: {
          line: 13,
          column: 51
        }
      },
      "6": {
        start: {
          line: 14,
          column: 28
        },
        end: {
          line: 14,
          column: 91
        }
      },
      "7": {
        start: {
          line: 15,
          column: 36
        },
        end: {
          line: 15,
          column: 104
        }
      },
      "8": {
        start: {
          line: 16,
          column: 31
        },
        end: {
          line: 19,
          column: 1
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
    hash: "540ab2954fa7d6ca7691f99eeb71d1ab05f9e276"
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
exports.createGifsQuery = exports.deleteFlaggedGifById = exports.flagGifQuery = exports.deleteGifById = exports.searchGifById = exports.gifsTable = exports.dropGifTable = void 0;

var _objects = require("../objects");

var dropGifTable = (cov_rcetsoynb.s[0]++, 'DROP TABLE IF EXISTS gifs CASCADE');
exports.dropGifTable = dropGifTable;
var gifsTable = (cov_rcetsoynb.s[1]++, "CREATE TABLE gifs(\n    \"gifId\" SERIAL PRIMARY KEY NOT NULL,\n    \"createdOn\" TIMESTAMP WITH TIME ZONE DEFAULT NOW(),\n    \"imageUrl\" VARCHAR(255) NOT NULL,\n    title VARCHAR(255) NOT NULL,\n    flagged BOOLEAN DEFAULT false \n)");
exports.gifsTable = gifsTable;
var searchGifById = (cov_rcetsoynb.s[2]++, "SELECT * FROM gifs WHERE \"gifId\" = $1");
exports.searchGifById = searchGifById;
var deleteGifById = (cov_rcetsoynb.s[3]++, "DELETE FROM gifs WHERE \"gifId\" = $1 RETURNING *");
exports.deleteGifById = deleteGifById;
var createGif = (cov_rcetsoynb.s[4]++, "INSERT INTO gifs(title,\"imageUrl\") VALUES($1,$2) RETURNING *");
var gifValues = (cov_rcetsoynb.s[5]++, [_objects.gifObj.imageUrl, _objects.gifObj.title]);
var flagGifQuery = (cov_rcetsoynb.s[6]++, "UPDATE gifs SET flagged = true WHERE \"gifId\" = $1 RETURNING *");
exports.flagGifQuery = flagGifQuery;
var deleteFlaggedGifById = (cov_rcetsoynb.s[7]++, "DELETE FROM gifs WHERE \"gifId\" = $1 AND flagged = true RETURNING *");
exports.deleteFlaggedGifById = deleteFlaggedGifById;
var createGifsQuery = (cov_rcetsoynb.s[8]++, {
  createGif: createGif,
  gifValues: gifValues
});
exports.createGifsQuery = createGifsQuery;