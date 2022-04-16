"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const peliculas_1 = __importDefault(require("../controllers/peliculas"));
const router = express_1.default.Router();
router.get('/pelicula', peliculas_1.default.getAll);
router.post('/pelicula', peliculas_1.default.create);
router.patch('/pelicula/:id', peliculas_1.default.update);
router.delete('/pelicula/:id', peliculas_1.default.remove);
router.get('/pelicula/:id', peliculas_1.default.get);
module.exports = router;
