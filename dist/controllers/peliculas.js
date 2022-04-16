"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pelicula_1 = __importDefault(require("../models/pelicula"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield pelicula_1.default.find().exec();
    // TODO search for all vg and return
    return res.status(200).json({
        messagge: 'Get all',
        result
    });
});
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, year, duration, image, country, genre, director } = req.body;
    // TODO Validate parameters
    const pelicula = new pelicula_1.default({
        _id: new mongoose_1.default.Types.ObjectId,
        title,
        year,
        duration,
        image,
        country,
        genre,
        director
    });
    const result = yield pelicula.save();
    return res.status(201).json({
        messagge: 'Create',
        result
    });
});
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { title, year, duration, image, country, genre, director } = req.body;
    // VALIDATE 
    const result = yield pelicula_1.default.findByIdAndUpdate(id, { title, year, duration, image, country, genre, director }, { new: true });
    return res.status(200).json({
        messagge: 'Update',
        result
    });
});
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pelicula_1.default.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge: 'Remove',
        result
    });
});
const get = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    //TODO search for vg with id = id and return
    const result = yield pelicula_1.default.findById(id);
    return res.status(201).json({
        messagge: 'Get',
        result
    });
});
exports.default = { getAll, create, update, remove, get };
