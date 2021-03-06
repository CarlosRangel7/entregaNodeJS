"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = __importDefault(require("mongoose"));
const PeliculaSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    duration: { type: Number, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    genre: { type: String, required: true },
    director: { type: String, required: true }
}, {
    timestamps: true
});
exports.default = mongoose_2.default.model('Pelicula', PeliculaSchema);
