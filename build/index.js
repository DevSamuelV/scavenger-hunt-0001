"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var commands_1 = require("./commands/commands");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var app = express_1.default();
app.use(body_parser_1.json());
app.use(helmet_1.default());
new commands_1.Commands(app);
app.listen(3252);
//# sourceMappingURL=index.js.map