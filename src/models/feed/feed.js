"use strict";

var cov_28d8lq0311 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\feed\\feed.js";
  var hash = "2b6a37469d613ffe2e551ee4b55769ceaead98b4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\feed\\feed.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 30
        },
        end: {
          line: 1,
          column: 80
        }
      },
      "1": {
        start: {
          line: 2,
          column: 26
        },
        end: {
          line: 2,
          column: 72
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
    hash: "2b6a37469d613ffe2e551ee4b55769ceaead98b4"
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
exports.getAllGifs = exports.getAllArticles = void 0;
var getAllArticles = (cov_28d8lq0311.s[0]++, "SELECT * FROM articles ORDER BY \"createdOn\" DESC");
exports.getAllArticles = getAllArticles;
var getAllGifs = (cov_28d8lq0311.s[1]++, "SELECT * FROM gifs ORDER BY \"createdOn\" DESC");
exports.getAllGifs = getAllGifs;