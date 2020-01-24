"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.unidadmedida_model = (conexion) => {
    const modelo = conexion.define("unidadmodelo", {
        um_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        um_nom: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        },
        um_abr: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 't_unidadmedida',
        timestamps: true
    });
    return modelo;
};
