"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UnidadMedida_1 = require("./../controllers/UnidadMedida");
const express_1 = require("express");
exports.unidadesdemedida_router = express_1.Router();
exports.unidadesdemedida_router.get('/um', UnidadMedida_1.getUnidadesDeMedida);
exports.unidadesdemedida_router.post('/um', UnidadMedida_1.postUnidadesDeMedida);
exports.unidadesdemedida_router.get('/um/:nombre_unidad', UnidadMedida_1.getUnidadesDeMedidabyNombre);
