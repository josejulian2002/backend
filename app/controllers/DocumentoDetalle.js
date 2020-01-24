"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.postDocumentoDetalle = (req, res) => {
    sequalize_1.DocumentoDetalle.build(req.body).save().then((documentodetcreado) => {
        res.status(201).json({
            ok: true,
            content: documentodetcreado
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
