import { NextFunction, Request, Response } from "express";
import Pelicula from '../models/pelicula';
import mongoose from 'mongoose';

const getAll = async(req: Request, res: Response, next: NextFunction) => {

    const result = await Pelicula.find().exec();

    // TODO search for all vg and return
    return res.status(200).json({
        messagge : 'Get all',
        result
    });
};

const create = async(req: Request, res: Response, next: NextFunction) => {
    const { title, year, duration, image, country, genre, director } = req.body;

    // TODO Validate parameters

    const pelicula = new Pelicula({
        _id : new mongoose.Types.ObjectId,
        title,
        year,
        duration,
        image,
        country,
        genre,
        director
    });

    const result = await pelicula.save();

    return res.status(201).json({
        messagge : 'Create',
        result
    });
};

const update = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const { title, year, duration, image, country, genre, director } = req.body;

    // VALIDATE 
    const result = await Pelicula.findByIdAndUpdate(id, {title, year, duration, image, country, genre, director}, { new: true});

    return res.status(200).json({
        messagge : 'Update',
        result
    });
};

const remove = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const result = await Pelicula.findByIdAndDelete(id);
    // TODO: search for vg by id = id, delete from db
    return res.status(200).json({
        messagge : 'Remove',
        result
    });
};

const get = async(req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    //TODO search for vg with id = id and return

    const result = await Pelicula.findById(id);

    return res.status(201).json({
        messagge : 'Get',
        result
    });
};

export default { getAll, create, update, remove, get}