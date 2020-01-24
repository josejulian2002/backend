"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
let gastoRegistrar = (objdoc, objgasto, arrdocdet) => __awaiter(void 0, void 0, void 0, function* () {
    const t = yield sequalize_1.conexion.transaction();
    try {
        let documentoCreado = yield sequalize_1.Documento.create(objdoc, { transaction: t });
        let doc_id = documentoCreado.doc_id;
        objgasto.doc_id = doc_id;
        let gastoingreso = yield sequalize_1.GastoIngreso.create(objgasto, { transaction: t });
        arrdocdet.forEach(docdet => {
            docdet.doc_id = doc_id;
            yield sequalize_1.DocumentoDetalle.create(docdet, { transaction: t });
        });
        return true;
    }
    catch (error) {
        console.log("Error en la transaccion");
        console.log(error);
        t.rollback();
        throw error;
    }
});
exports.registerGasto = (req, res) => {
    let { objdoc, objgast, arrdocdet } = req.body;
    gastoRegistrar(objdoc, objgast, arrdocdet).then((rpta) => {
        res.json({
            ok: true,
            content: "Presupuesto creados exitosamente"
        });
        console.log("THEN");
    }).catch((error) => {
        console.log("Error en la transaccion");
        res.json({
            ok: false,
            content: error,
        });
    });
};
exports.getGastoIngreso = (req, res) => {
    sequalize_1.GastoIngreso.findAll({
        include: [
            { model: sequalize_1.Documento, attributes: ['doc_total'] }
        ]
    }).then((arreglogastoingreso) => {
        res.json({
            ok: true,
            title: "Gasto Ingreso",
            content: arreglogastoingreso
        });
    });
};
exports.postGastoIngreso = (req, res) => {
    let objgastoingreso = sequalize_1.GastoIngreso.build(req.body);
    sequalize_1.Usuario.findByPk(req.body.usu_id).then((objusuario) => {
        if (objusuario) {
            return sequalize_1.Documento.findByPk(req.body.doc_id);
        }
        else {
            res.status(500).json({
                ok: false,
                content: `El usuario de id ${req.body.usu_id} no existe`
            });
        }
    }).then((objdocumento) => {
        if (objdocumento) {
            return objgastoingreso.save();
        }
        else {
            res.status(500).json({
                ok: false,
                content: `El documento de id ${req.body.doc_id} no existe`
            });
        }
    }).then((objgastoingreso) => {
        if (objgastoingreso) {
            res.status(201).json({
                ok: true,
                content: objgastoingreso
            });
        }
        else {
            res.status(500).json({
                ok: false,
                content: "Error"
            });
        }
    });
};
exports.updateGastoIngreso = (req, res) => {
    let { gastoingreso_id } = req.params;
    sequalize_1.Usuario.findByPk(req.body.usu_id).then((objusuario) => {
        if (objusuario) {
            return sequalize_1.Documento.findByPk(req.body.doc_id);
        }
        else {
            res.status(500).json({
                ok: false,
                content: `El usuario de id ${req.body.usu_id} no existe`
            });
        }
    }).then((objdocumento) => {
        if (objdocumento) {
            return sequalize_1.GastoIngreso.update(req.body, { where: { gasin_id: gastoingreso_id } });
        }
        else {
            res.status(500).json({
                ok: false,
                content: `El documento de id ${req.body.doc_id} no existe`
            });
        }
    }).then((gastoingresoactualizado) => {
        console.log(gastoingresoactualizado);
        res.status(200).json({
            ok: true,
            content: gastoingresoactualizado
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
