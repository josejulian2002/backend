"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require('jsonwebtoken');
exports.verificarToken = (token) => {
    try {
        let data = jwt.verify(token, 'sapeee', { algorithm: 'RS256' });
        return data;
    }
    catch (error) {
        return null;
    }
};
exports.wachiman = (req, res, next) => {
    if (req.headers.authorization) {
        let token = req.headers.authorization.split(' ')[1];
        console.log((req.headers.authorization.split(' ')));
        let resultado = exports.verificarToken(token);
        if (resultado) {
            next();
        }
        else {
            res.status(401).json({
                ok: false,
                content: 'No esta autorizado para realizar la solicitud'
            });
        }
    }
    else {
        res.status(401).json({
            ok: false,
            content: 'Necesita una token para la solicitud'
        });
    }
};
