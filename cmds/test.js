"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = exports.threadAdminRequired = exports.adminRequired = exports.name = void 0;
const axios_1 = __importDefault(require("axios"));
const axios = require("axios")
const cheerio_1 = __importDefault(require("cheerio"));
exports.name = "test";
exports.adminRequired = false;
exports.threadAdminRequired = false;
exports.location = __filename;
async function default_1({ event, api }) {
  var log = await axios.get("https://covid19.gov.vn/")
  console.log(log)
}
exports.default = default_1;