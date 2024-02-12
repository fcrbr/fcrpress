const sequelize = require("sequelize");

const connection = new sequelize('fcrpress', 'root', '123456', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307,
    timezone: "-03:00",
    sync: { alter: false }
});

module.exports = connection;