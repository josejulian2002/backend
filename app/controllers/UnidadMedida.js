"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getUnidadesDeMedida = (req, res) => {
    sequalize_1.UnidadMedida.findAll().then((arregloUnidadesdeMedida) => {
        res.json({
            ok: true,
            title: "unidades de medida",
            content: arregloUnidadesdeMedida
        });
    });
};
exports.postUnidadesDeMedida = (req, res) => {
    let { nombre, abr } = req.body;
    sequalize_1.UnidadMedida.build({
        um_nom: nombre,
        um_abr: abr
    }).save().then((objunidaddemedida) => {
        res.status(201).json({
            ok: true,
            content: objunidaddemedida
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
exports.getUnidadesDeMedidabyNombre = (req, res) => {
    let { nombre_unidad } = req.params;
    sequalize_1.UnidadMedida.findAll({
        where: { um_nom: nombre_unidad }
    }).then((objetounidaddemedida) => {
        console.log(objetounidaddemedida);
        if (objetounidaddemedida[0]) {
            res.status(200).json({
                ok: true,
                content: objetounidaddemedida
            });
        }
        else {
            res.status(404).json({
                ok: false,
                content: "No hay esa unidad"
            });
        }
    });
};
