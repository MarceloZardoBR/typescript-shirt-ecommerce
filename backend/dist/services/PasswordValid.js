"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var PasswordValid = /** @class */ (function () {
    function PasswordValid() {
    }
    PasswordValid.prototype.hashPassword = function (password) {
        var hash = bcrypt_1.default.hash(password, 10);
        return hash;
    };
    PasswordValid.prototype.verifyPassword = function (_a) {
        var password = _a.password, hash = _a.hash;
        var response = bcrypt_1.default.compare(password, hash);
        return response;
    };
    return PasswordValid;
}());
exports.default = PasswordValid;
