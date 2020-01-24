"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.proyecto_model = (conexion) => {
    const modelo = conexion.define("proyecto", {
        pro_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        pro_nom: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false
        },
        pro_fechin: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        },
        pro_fechfin: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false
        },
        pro_est: {
            type: sequelize_1.DataTypes.STRING(20),
            allowNull: false
        },
        pro_pres: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        tableName: 't_proyecto',
        timestamps: true
    });
    return modelo;
};
