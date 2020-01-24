"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getDocumentos = (req, res) => {
    let { documento_id } = req.params;
    sequalize_1.Documento.findByPk(documento_id, {
        include: [
            { model: sequalize_1.Proveedor, attributes: ['prov_rz'] }
        ]
    }).then((arreglodocumento) => {
        res.json({
            ok: true,
            title: "Documentos",
            content: arreglodocumento
        });
    });
};
exports.postDocumento = (req, res) => {
    let objdocumento = sequalize_1.Documento.build(req.body);
    sequalize_1.Proveedor.findByPk(req.body.prov_id).then((objproveedor) => {
        if (objproveedor) {
            return objdocumento.save();
        }
        else {
            res.status(500).json({
                ok: false,
                content: `El proveedor de id ${req.body.prov_id} no existe`
            });
        }
    }).then((objdocumento) => {
        if (objdocumento) {
            res.status(201).json({
                ok: true,
                content: objdocumento
            });
        }
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
