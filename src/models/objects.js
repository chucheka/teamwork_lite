"use strict";

var cov_2i0f2ubn5s = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\objects.js";
  var hash = "961cc06abdc5c6e302febf6f389ae0703578f489";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\objects.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 17,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 22
        },
        end: {
          line: 22,
          column: 1
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
    hash: "961cc06abdc5c6e302febf6f389ae0703578f489"
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
exports.gifObj = exports.articleObj = exports.user = void 0;
// QUERY VALUES
var user = (cov_2i0f2ubn5s.s[0]++, {
  firstName: 'Chike',
  lastName: 'Ucheka',
  email: 'tableuser@gmail.com',
  password: 'chike22ucheka',
  password2: 'chike22ucheka',
  gender: 'Male',
  jobRole: 'Senior Engineer',
  departmant: 'IT',
  address: 'Area M World Bank Housing Estate'
});
exports.user = user;
var articleObj = (cov_2i0f2ubn5s.s[1]++, {
  title: 'Initial article by before test script',
  article: 'Initial article by before test script',
  tag: 'politics'
});
exports.articleObj = articleObj;
var gifObj = (cov_2i0f2ubn5s.s[2]++, {
  title: 'Initial gif by before test script',
  imageUrl: '/http://cloudinary.io/images/avatar.png'
});
exports.gifObj = gifObj;