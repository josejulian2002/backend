"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Proveedor_1 = require("./../controllers/Proveedor");
const express_1 = require("express");
exports.proveedor_router = express_1.Router();
exports.proveedor_router.get('/prov/:prov_id', Proveedor_1.getProveedores);
exports.proveedor_router.post('/prov', Proveedor_1.postProveedor);
exports.proveedor_router.put('/prov/:proveedor_id', Proveedor_1.updateProveedor);
