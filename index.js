"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const servidor_1 = require("./app/config/servidor");
let objServidor = new servidor_1.Server();
objServidor.start();
