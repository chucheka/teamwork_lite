"use strict";

var cov_a40dxxby2 = function () {
  var path = "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\users\\sql.js";
  var hash = "cf32f993273f9ac6ab5b6bb3054ada6ae7f665d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\UCHEKA CHUKWUKELEUBA\\Desktop\\DevC\\teamwork_lite\\api\\models\\users\\sql.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 29
        },
        end: {
          line: 2,
          column: 65
        }
      },
      "1": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 13,
          column: 2
        }
      },
      "2": {
        start: {
          line: 15,
          column: 19
        },
        end: {
          line: 15,
          column: 157
        }
      },
      "3": {
        start: {
          line: 16,
          column: 19
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "4": {
        start: {
          line: 27,
          column: 31
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "5": {
        start: {
          line: 32,
          column: 26
        },
        end: {
          line: 32,
          column: 65
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
      "5": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "cf32f993273f9ac6ab5b6bb3054ada6ae7f665d0"
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
exports.checkEmail = exports.createUserQuery = exports.userTable = exports.dropUserTable = void 0;

var _objects = require("../objects");

var dropUserTable = (cov_a40dxxby2.s[0]++, 'DROP TABLE IF EXISTS users CASCADE');
exports.dropUserTable = dropUserTable;
var userTable = (cov_a40dxxby2.s[1]++, "CREATE TABLE users(\n    \"userId\" SERIAL PRIMARY KEY NOT NULL,\n\t\"firstName\" VARCHAR(255) NOT NULL,\n\t\"lastName\" VARCHAR(255) NOT NULL,\n\temail VARCHAR(255) NOT NULL,\n\tpassword VARCHAR(255) NOT NULL,\n\tgender VARCHAR(20) NOT NULL,\n\t\"jobRole\" VARCHAR(255) NOT NULL,\n\tdepartment VARCHAR(255) NOT NULL,\n\taddress VARCHAR(255) NOT NULL\n)");
exports.userTable = userTable;
var createUser = (cov_a40dxxby2.s[2]++, "INSERT INTO users(\"firstName\",\"lastName\",email,password,gender,\"jobRole\",department,address) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *");
var userValues = (cov_a40dxxby2.s[3]++, [_objects.user.firstName, _objects.user.lastName, _objects.user.email, _objects.user.password, _objects.user.gender, _objects.user.jobRole, _objects.user.departmant, _objects.user.address]);
var createUserQuery = (cov_a40dxxby2.s[4]++, {
  createUser: createUser,
  userValues: userValues
});
exports.createUserQuery = createUserQuery;
var checkEmail = (cov_a40dxxby2.s[5]++, "SELECT * FROM users WHERE email = $1 ");
exports.checkEmail = checkEmail;