"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const verifyTokens = (req, res, next) => {
    try {
        const authorizattion = req.header('authorization');
        const token = authorizattion === null || authorizattion === void 0 ? void 0 : authorizattion.split(' ')[1];
        if (!token) {
            return res.status(400).json({ error: 'Invalid token' });
        }
        jsonwebtoken_1.default.verify(token, config_1.default.secrets.token);
        next();
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};
exports.default = { verifyTokens };
