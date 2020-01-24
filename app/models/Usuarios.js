"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
exports.usuario_model = (conexion) => {
    const modelo = conexion.define("usuario", {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
            allowNull: false
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        usu_nom: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_ape: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_tipo: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
    }, {
        tableName: 't_usuario',
        timestamps: true
    });
    modelo.prototype.setSaltandHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    modelo.prototype.validarPasword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    modelo.prototype.generarJWT = function () {
        let payload = {
            usu_id: this.usu_id,
            usu_nom: `${this.usu_nom} ${this.usu_ape}`
        };
        var token = jwt.sign(payload, 'sapeee', { expiresIn: '1h' }, { algorithm: 'RS256' });
        return token;
    };
    return modelo;
};
