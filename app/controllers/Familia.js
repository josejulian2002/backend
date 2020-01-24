"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getFamilia = (req, res) => {
    sequalize_1.Familia.findAll().then((arregloFamilias) => {
        res.json({
            ok: true,
            title: "Familia",
            content: arregloFamilias
        });
    });
};
exports.postFamilia = (req, res) => {
    // let {fam_nombre}=req.body
    let familia = sequalize_1.Familia.build(req.body);
    console.log(familia);
    familia.save().then((objfamilia) => {
        if (objfamilia) {
            res.status(201).json({
                ok: true,
                content: objfamilia
            });
        }
        else {
            res.status(204).json({
                ok: false,
                content: "No se pudo crear el recurso"
            });
        }
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
