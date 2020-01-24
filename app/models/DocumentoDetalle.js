"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.documentodetalle_model = (conexion) => {
    const modelo = conexion.define("DocumentoDetalle", {
        docd_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        docd_cant: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_total: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_punit: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_fecha: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: "t_documentodetalle",
        timestamps: true
    });
    return modelo;
};
