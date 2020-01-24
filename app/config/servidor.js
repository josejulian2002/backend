"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recurso_1 = require("./../routes/Recurso");
const Usuarios_1 = require("./../routes/Usuarios");
const Proveedores_1 = require("./../routes/Proveedores");
const sequalize_1 = require("./sequalize");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const UnidadesDeMedida_1 = require("./../routes/UnidadesDeMedida");
const Proyecto_1 = require("../routes/Proyecto");
const Familia_1 = require("./../routes/Familia");
const Categoria_1 = require("../routes/Categoria");
const GastoIngreso_1 = require("../routes/GastoIngreso");
const Documento_1 = require("../routes/Documento");
const Imagen_1 = require("../routes/Imagen");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const apidocs_json_1 = __importDefault(require("./../Docs/apidocs.json"));
const PresupuestoProyecto_1 = require("../routes/PresupuestoProyecto");
class Server {
    constructor() {
        this.puerto = process.env.PORT || 3000;
        this.app = express_1.default();
        this.habilitarcors();
        this.configurarbodyparser();
        this.configurarRutas();
    }
    configurarbodyparser() {
        this.app.use(body_parser_1.default.json());
    }
    habilitarcors() {
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
            res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
            res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
            next();
        });
    }
    configurarRutas() {
        this.app.get("/", (req, res) => {
            res.json({
                ok: true,
                message: "El servidor esta activo"
            });
        });
        this.app.use("", Proyecto_1.proyecto_router);
        this.app.use("", UnidadesDeMedida_1.unidadesdemedida_router);
        this.app.use("", Familia_1.familia_router);
        this.app.use("", Proveedores_1.proveedor_router);
        this.app.use("", Usuarios_1.usuarios_router);
        this.app.use("", Categoria_1.categoria_router);
        this.app.use("", GastoIngreso_1.gastoingreso_router);
        this.app.use("", Documento_1.documento_router);
        this.app.use("", Imagen_1.imagen_router);
        this.app.use("", Recurso_1.recurso_router);
        this.app.use("", PresupuestoProyecto_1.presupuestopro_router);
        this.app.use('/apidocs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(apidocs_json_1.default));
    }
    start() {
        this.app.listen(this.puerto, () => {
            console.log(`Servidor corriendo en el puerto ${this.puerto}`);
            sequalize_1.conexion.sync({ force: false }).then(() => {
                console.log("==BD CREADA CON EXITO");
            }).catch((error) => {
                console.log("==ERROR AL CREAR LA BASE DE DATOS");
                console.log(error);
            });
        });
    }
}
exports.Server = Server;
