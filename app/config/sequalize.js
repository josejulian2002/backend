"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PresupuestoProyecto_1 = require("./../models/PresupuestoProyecto");
const GastoIngreso_1 = require("./../models/GastoIngreso");
const Imagen_1 = require("./../models/Imagen");
const DocumentoDetalle_1 = require("./../models/DocumentoDetalle");
const Documento_1 = require("./../models/Documento");
const Recurso_1 = require("./../models/Recurso");
const Categoria_1 = require("./../models/Categoria");
const Usuarios_1 = require("./../models/Usuarios");
const sequelize_1 = require("sequelize");
const UnidadDeMedida_1 = require("./../models/UnidadDeMedida");
const Proyecto_1 = require("../models/Proyecto");
const Familia_1 = require("../models/Familia");
const Proveedor_1 = require("./../models/Proveedor");
exports.conexion = new sequelize_1.Sequelize(' bNNnC3W1Pr', ' bNNnC3W1Pr', 'RFyjgSCLPi', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    // logging:console.log,
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typerCst: true
    },
    timezone: '-05:00'
});
exports.Proyecto = Proyecto_1.proyecto_model(exports.conexion);
exports.UnidadMedida = UnidadDeMedida_1.unidadmedida_model(exports.conexion);
exports.Familia = Familia_1.familia_model(exports.conexion);
exports.Proveedor = Proveedor_1.proveedor_model(exports.conexion);
exports.Usuario = Usuarios_1.usuario_model(exports.conexion);
exports.Categoria = Categoria_1.categoria_model(exports.conexion);
exports.Recurso = Recurso_1.recurso_model(exports.conexion);
exports.Documento = Documento_1.document_model(exports.conexion);
exports.DocumentoDetalle = DocumentoDetalle_1.documentodetalle_model(exports.conexion);
exports.Imagen = Imagen_1.imagen_model(exports.conexion);
exports.GastoIngreso = GastoIngreso_1.gastoingreso_model(exports.conexion);
exports.PresupuestoProyecto = PresupuestoProyecto_1.presupuestproyecto_model(exports.conexion);
exports.Familia.hasMany(exports.Categoria, { foreignKey: "fam_id" });
exports.Categoria.belongsTo(exports.Familia, { foreignKey: "fam_id" });
exports.Categoria.hasMany(exports.Recurso, { foreignKey: "cat_id" });
exports.Recurso.belongsTo(exports.Categoria, { foreignKey: "cat_id" });
exports.Recurso.hasMany(exports.PresupuestoProyecto, { foreignKey: "rec_id" });
exports.PresupuestoProyecto.belongsTo(exports.Recurso, { foreignKey: "rec_id" });
exports.UnidadMedida.hasMany(exports.PresupuestoProyecto, { foreignKey: "um_id" });
exports.PresupuestoProyecto.belongsTo(exports.UnidadMedida, { foreignKey: "um_id" });
exports.Proyecto.hasMany(exports.PresupuestoProyecto, { foreignKey: "pro_id" });
exports.PresupuestoProyecto.belongsTo(exports.Proyecto, { foreignKey: "pro_id" });
exports.PresupuestoProyecto.hasMany(exports.DocumentoDetalle, { foreignKey: "pp_id" });
exports.DocumentoDetalle.belongsTo(exports.PresupuestoProyecto, { foreignKey: "pp_id" });
exports.Documento.hasMany(exports.DocumentoDetalle, { foreignKey: "doc_id" });
exports.DocumentoDetalle.belongsTo(exports.Documento, { foreignKey: "doc_id" });
exports.Documento.hasMany(exports.Imagen, { foreignKey: "doc_id" });
exports.Imagen.belongsTo(exports.Documento, { foreignKey: "doc_id" });
exports.Proveedor.hasMany(exports.Documento, { foreignKey: "prov_id" });
exports.Documento.belongsTo(exports.Proveedor, { foreignKey: "prov_id" });
exports.Usuario.hasMany(exports.GastoIngreso, { foreignKey: "usu_id" });
exports.GastoIngreso.belongsTo(exports.Usuario, { foreignKey: "usu_id" });
exports.Documento.hasMany(exports.GastoIngreso, { foreignKey: "doc_id" });
exports.GastoIngreso.belongsTo(exports.Documento, { foreignKey: "doc_id" });
exports.Proyecto.hasMany(exports.GastoIngreso, { foreignKey: "pro_id" });
exports.GastoIngreso.belongsTo(exports.Proyecto, { foreignKey: "pro_id" });
