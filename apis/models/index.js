import Sequelize from 'sequelize';
import dbConfig from '../config/db.config.js';
import UserModel from './User.js';
import WorkoutModel from './Workout.js';

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        },
    }
);

const User = UserModel(sequelize, Sequelize);
const Workout = WorkoutModel(sequelize, Sequelize);

User.hasMany(Workout, { foreignKey: 'userId', as: 'workouts' });
Workout.belongsTo(User, { foreignKey: 'userId', as: 'user' });

const db = {
    sequelize,
    Sequelize,
    User,
    Workout,
};

export default db;