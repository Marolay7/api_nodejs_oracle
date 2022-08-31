

const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('usuario', {
        id_user: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        },
        telefono: {
            type: Sequelize.INTEGER,
            required: true,
            allowNull: false
        },
        fecha_nac: {
            type: Sequelize.DATE,
            required: true,
            allowNull: false,
        },
        descripcion: {
            type: Sequelize.STRING,
            required: true,
            len: [15, 256]
        },
        password: {
            type: Sequelize.STRING,
            required: true,
            allowNull: false,
            len: [6, 20]
        }
    }, {
        underscored: true,
        paranoid: true
    })
}