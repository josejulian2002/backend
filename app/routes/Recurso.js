"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Recursos_1 = require("./../controllers/Recursos");
const utils_1 = require("../utils/utils");
const express_1 = require("express");
exports.recurso_router = express_1.Router();
exports.recurso_router.get('/recurso', utils_1.wachiman, Recursos_1.getRecursos);
