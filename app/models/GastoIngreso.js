"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.gastoingreso_model = (conexion) => {
    const modelo = conexion.define("GastoIngreso", {
        gasin_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        gasin_crit: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        gasin_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: "t_gastoingreso",
        timestamps: true
    });
    return modelo;
};
