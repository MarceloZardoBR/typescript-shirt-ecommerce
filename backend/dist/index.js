"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Routes_1 = __importDefault(require("./Routes"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.listen(3333);
app.use(cors_1.default());
app.use(express_1.default.json());
mongoose_1.default.connect('mongodb+srv://mzardo:mzardo@cluster0-lmor3.mongodb.net/tshirt-store?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(Routes_1.default);
