import db from '../models/index.js';

const User = db.User;

export const getAllUsersService = async () => {
    return await User.findAll();
};

export const createUser = async (userData) => {
    return await User.create(userData);
};

export const findUserByUsername = async (username) => {
    return await User.findOne({ where: { username } });
};