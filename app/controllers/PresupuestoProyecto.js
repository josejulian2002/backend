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
let crearvariospresupestos = (arrPress) => __awaiter(void 0, void 0, void 0, function* () {
    const t = yield sequalize_1.conexion.transaction();
    try {
        arrPress.forEach((pres) => __awaiter(void 0, void 0, void 0, function* () {
            yield sequalize_1.PresupuestoProyecto.create(pres);
        }));
        let rpta = yield t.commit();
        return true;
    }
    catch (error) {
        console.log("Error en la transaccion");
        console.log(error);
        t.rollback();
        throw error;
    }
});
exports.postPresupuesto = (req, res) => {
    crearvariospresupestos(req.body).then((rpta) => {
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
exports.getPresupuestoById = (req, res) => {
    sequalize_1.PresupuestoProyecto.findAll({ where: { pro_id: req.params.pro_id }, include: [{ model: sequalize_1.Recurso, attributes: ['rec_nom'] }, { model: sequalize_1.UnidadMedida, attributes: ['um_nom'] }] }).then((rpta) => {
        res.json({
            ok: true,
            content: rpta
        });
    }).catch((error) => {
        res.json({
            ok: false,
            content: error
        });
    });
};
