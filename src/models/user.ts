import mongoose from 'mongoose';
import { Schema } from 'mongoose';
import IUser from './interfaces/user';

const UserSchema: Schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    genre: {type: String, required: false}
}, {
    timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);