"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
var UserController_1 = __importDefault(require("./controllers/UserController"));
routes.get('/', function (req, res) {
    return res.send('Hello World');
});
routes.post('/user/create', UserController_1.default.createUser);
routes.post('/user/auth', UserController_1.default.authUser);
exports.default = routes;
