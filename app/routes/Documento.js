"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Documento_1 = require("./../controllers/Documento");
const express_1 = require("express");
exports.documento_router = express_1.Router();
exports.documento_router.get("/documento/:documento_id", Documento_1.getDocumentos);
exports.documento_router.post("/documento", Documento_1.postDocumento);
