"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PresupuestoProyecto_1 = require("./../controllers/PresupuestoProyecto");
const utils_1 = require("../utils/utils");
const express_1 = require("express");
exports.presupuestopro_router = express_1.Router();
exports.presupuestopro_router.post('/presupuestos', utils_1.wachiman, PresupuestoProyecto_1.postPresupuesto);
exports.presupuestopro_router.get('/presupuestos/proyecto/:pro_id', PresupuestoProyecto_1.getPresupuestoById);
