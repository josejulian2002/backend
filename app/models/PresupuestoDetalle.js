"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.presupuestproyecto_model = function (conexion) {
    var modelo = conexion.define("Documento", {
        doc_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        doc_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false
        },
        doc_total: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        doc_obs: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        doc_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: "t_documento",
        timestamps: true
    });
    return modelo;
};
