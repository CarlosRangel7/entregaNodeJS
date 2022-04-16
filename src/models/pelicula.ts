import { Schema } from "mongoose";
import mongoose from "mongoose";
import { IPelicula } from "./interfaces/pelicula";

const PeliculaSchema: Schema = new Schema({
    title: {type: String, required: true},
    year: {type: Number, required: true},
    duration: {type: Number, required: true},
    image: {type: String, required: true},
    country: {type: String, required: true},
    genre: {type: String, required: true},
    director: {type: String, required: true}
}, {
    timestamps: true
})

export default mongoose.model<IPelicula>('Pelicula', PeliculaSchema);