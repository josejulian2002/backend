"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getProyectos = (req, res) => {
    sequalize_1.Proyecto.findAll().then((arregloProyectos) => {
        res.json({
            ok: true,
            content: arregloProyectos
        });
    });
};
exports.postProyecto = (req, res) => {
    let { nombre, fecha_inicio, fecha_fin, presupuesto, estado } = req.body;
    let objproyecto = {
        pro_nom: nombre,
        pro_fechin: fecha_inicio,
        pro_fechfin: fecha_fin,
        pro_est: estado,
        pro_pres: presupuesto
    };
    sequalize_1.Proyecto.build(objproyecto).save().then((proyectoCreado) => {
        res.status(201).json({
            ok: true,
            content: objproyecto
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error
        });
    });
};
exports.updateProyecto = (req, res) => {
    let { proyecto_id } = req.params;
    let { nombre, fecha_inicio, fecha_fin, presupuesto, estado } = req.body;
    let objProyecto = {
        pro_nom: nombre,
        pro_fechin: fecha_inicio,
        pro_fechfin: fecha_fin,
        pro_est: estado,
        pro_pres: presupuesto
    };
    sequalize_1.Proyecto.update(objProyecto, { where: { pro_id: proyecto_id } }).then((proyectoactualizado) => {
        console.log(proyectoactualizado);
        res.status(200).json({
            ok: true,
            content: proyectoactualizado
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error.errors
        });
    });
};
exports.deleteProyecto = (req, res) => {
    let { proyecto_id } = req.params;
    sequalize_1.Proyecto.destroy({ where: { pro_id: proyecto_id } }).then((proyectoeliminado) => {
        res.status(200).json({
            ok: true,
            content: proyectoeliminado
        });
    }).catch((error) => {
        res.status(500).json({
            ok: false,
            content: error.errors
        });
    });
};
exports.getProyectobyId = (req, res) => {
    let { proyecto_id } = req.params;
    sequalize_1.Proyecto.findByPk(proyecto_id).then((objoproyecto) => {
        if (objoproyecto) {
            res.status(200).json({
                ok: true,
                content: objoproyecto
            });
        }
        else {
            res.status(404).json({
                ok: true,
                content: "No hay proyecto con ese id"
            });
        }
    });
};
