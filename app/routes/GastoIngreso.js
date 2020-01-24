"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GastoIngreso_1 = require("./../controllers/GastoIngreso");
const express_1 = require("express");
exports.gastoingreso_router = express_1.Router();
exports.gastoingreso_router.get('/gastoingresos', GastoIngreso_1.getGastoIngreso);
exports.gastoingreso_router.post('/gastoingreso', GastoIngreso_1.postGastoIngreso);
exports.gastoingreso_router.put('/gastoingreso/:gastoingreso_id', GastoIngreso_1.updateGastoIngreso);
exports.gastoingreso_router.post('/registrar/gasto', GastoIngreso_1.registerGasto);
