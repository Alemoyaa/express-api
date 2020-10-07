const Sequelize = require('sequelize')

const MovieModel = require('./models/movies');
const UserModel = require('./models/users')

const sequelize = new Sequelize('mysql://root@localhost:3306/dbsequelize');

const Movie = MovieModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
.then(() => {
    console.log('Tablas sincronizadas');
})

module.exports = {
    Movie,
    User
}