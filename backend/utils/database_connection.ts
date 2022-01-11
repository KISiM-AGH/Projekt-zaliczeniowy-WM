const { Sequelize } = require('sequelize')


const sequelize = new Sequelize('gamedatabase', 'gamedatabase', '', {
    host: 'localhost',
    dialect: 'mariadb'
})
sequelize.sync()
export default sequelize
