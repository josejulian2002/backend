"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("../config/sequalize");
exports.getRecursos = (req, res) => {
    sequalize_1.Recurso.findAll().then((arrayrecursos) => {
        if (arrayrecursos) {
            res.status(200).json({
                ok: true,
                content: arrayrecursos
            });
        }
    });
};
