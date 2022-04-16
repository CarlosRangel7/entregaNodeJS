import express from 'express';
import controller from '../controllers/peliculas'

const router = express.Router();

router.get('/pelicula', controller.getAll);
router.post('/pelicula', controller.create);
router.patch('/pelicula/:id', controller.update);
router.delete('/pelicula/:id', controller.remove);
router.get('/pelicula/:id', controller.get);

export = router;