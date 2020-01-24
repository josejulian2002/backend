"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuarios_1 = require("./../controllers/Usuarios");
const express_1 = require("express");
exports.usuarios_router = express_1.Router();
exports.usuarios_router.get("/usuario", Usuarios_1.getUsuarios);
exports.usuarios_router.post("/usuario", Usuarios_1.registrarUsuario);
exports.usuarios_router.post("/login", Usuarios_1.Login);
