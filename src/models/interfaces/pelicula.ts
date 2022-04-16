import { Document } from 'mongoose';

export interface IPelicula extends Document{
    title: string,
    year: number,
    duration: number,
    image: string,
    country: string,
    genre: string,
    director: string
}