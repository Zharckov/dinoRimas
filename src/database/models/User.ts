import { IUser } from '../../types';
import mongoose from '../database';

const UserSchema = new mongoose.Schema({
    steamId: { type: String, required: true },
    name: { type: String, required: true },
    realName: { type: String, required: true },
    profile: { type: String, required: true },
    avatar: {
        small: { type: String, required: true },
        medium: { type: String, required: true },
        large: { type: String, required: true }
    }
});

export default mongoose.model<IUser>('User', UserSchema, 'users');