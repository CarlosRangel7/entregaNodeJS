import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config/config'
import User from '../models/user'
import mongoose from "mongoose";

const login = async(req: Request, res: Response, next: NextFunction) =>{
    const username = req.body.username;
    const password = req.body.password;

    // TODO search user in db

    const user = await User.findOne({username}).exec();
    if(!user){
        return res.status(400).json({
            error: 'Invalid password or username'
        });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        res.status(400).json({
            error: 'Invalid password or username'
        });
    }

    const token = jwt.sign({ username, id: user.id}, config.secrets.token);

    return res.status(200).json({
        message: 'Login Succesfull',
        token
    });


};


const register = async (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;
    const password = req.body.password;
    const genre = req.body.genre;

    // TODO validate username email, password lenght, caracters
    

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const userExist = await User.findOne({username}).exec();
    if(userExist){
        return res.status(400).json({
            error: 'User already exist'
        });
    }

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: passwordHash,
        genre
    });

    const result = await user.save();

    // TODO save user and pass
    return res.status(200).json({
        message: 'Register Success',
        user: {
            id: result._id,
            username: result.username,
            genre: result.genre
        }
    });
};

export default{ register, login }