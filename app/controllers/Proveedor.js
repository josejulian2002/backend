"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getProveedores = (req, res) => {
    let { prov_id } = req.params;
    sequalize_1.Proveedor.findByPk(prov_id).then((arregloproveedores) => {
        res.json({
            ok: true,
            title: "Proveedores",
            content: arregloproveedores
        });
    });
};
exports.postProveedor = (req, res) => {
    let objProveedor = sequalize_1.Proveedor.build(req.body);
    sequalize_1.Proveedor.findAll({ where: { prov_ruc: req.body.prov_ruc } }).then((proveedores) => {
        console.log(proveedores);
        if (proveedores[0]) {
            res.status(500).json({
                ok: false,
                content: 'Ya hay ese proveedor'
            });
        }
        else {
            return objProveedor.save();
        }
    }).then((objproveedor) => {
        res.status(201).json({
            ok: true,
            content: objproveedor
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
exports.updateProveedor = (req, res) => {
    let { proveedor_id } = req.params;
    let { razon, ruc } = req.body;
    let objproveedor = {
        prov_rz: razon,
        prov_ruc: ruc
    };
    sequalize_1.Proveedor.update(objproveedor, { where: { prov_id: proveedor_id } }).then((proveedoractualizado) => {
        console.log(proveedoractualizado);
        res.status(200).json({
            ok: true,
            content: proveedoractualizado
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error.errors
        });
    });
};
