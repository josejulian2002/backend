"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.postCategoria = (req, res) => {
    let objcategoria = sequalize_1.Categoria.build(req.body);
    // console.log(categoria);
    sequalize_1.Familia.findByPk(req.body.fam_id).then((objfamilia) => {
        if (objfamilia) {
            return objcategoria.save();
        }
        else {
            res.status(500).json({
                ok: false,
                content: `La familia de id ${req.body.fam_id} no existe`
            });
        }
    }).then((objcategoria) => {
        if (objcategoria) {
            res.status(201).json({
                ok: true,
                content: objcategoria
            });
        }
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
exports.getCategorias = (req, res) => {
    sequalize_1.Categoria.findAll({
        include: [
            { model: sequalize_1.Familia },
            { model: sequalize_1.Recurso }
        ]
    }).then((objCategoria) => {
        res.status(200).json({
            ok: true,
            content: objCategoria
        });
    });
};
