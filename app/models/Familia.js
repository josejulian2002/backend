"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.familia_model = (conexion) => {
    const modelo = conexion.define("familia", {
        fam_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        fam_nom: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        tableName: 't_familia',
        timestamps: true
    });
    return modelo;
};
