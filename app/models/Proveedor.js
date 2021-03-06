"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.proveedor_model = (conexion) => {
    const modelo = conexion.define("proveedor", {
        prov_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        prov_rz: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        prov_ruc: {
            type: sequelize_1.DataTypes.STRING(11),
            allowNull: false
        }
    }, {
        tableName: 't_proveedor',
        timestamps: true
    });
    return modelo;
};
