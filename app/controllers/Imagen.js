"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("../config/sequalize");
var fs = require('fs');
var path_module = require('path');
exports.subirArchivo = (req, res) => {
    try {
        let ruta = req.files.imagen.path;
        console.log(req.files.imagen);
        let nombreyextension = ruta.split("\\")[1];
        sequalize_1.Imagen.build({
            doc_id: req.body.doc_id,
            ima_url: nombreyextension
        }).save().then((objimagen) => {
            res.status(200).json({
                ok: true,
                content: objimagen
            });
        });
    }
    catch (error) {
        res.status(404).json({
            ok: false,
            content: 'No se ha seleccionado ningun archivo'
        });
    }
};
exports.eliminarImagen = (req, res) => {
    let { id_img } = req.params;
    var url = "";
    sequalize_1.Imagen.findByPk(id_img).then((imagen) => {
        if (imagen) {
            url = imagen.ima_url;
            return sequalize_1.Imagen.destroy({ where: { ima_id: id_img } });
        }
        else {
            res.status(200).json({
                ok: true,
                content: 'No hay Imagen'
            });
        }
    }).then((objimagen) => {
        fs.unlink(`images/${url}`, (error) => {
            if (!error) {
                res.status(200).json({
                    ok: true,
                    content: 'Imagen eliminada con exito'
                });
            }
            else {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    content: 'Hubo error'
                });
            }
        });
    });
};
exports.getImagenById = (req, res) => {
    let { id_img } = req.params;
    sequalize_1.Imagen.findByPk(id_img).then((objimagen) => {
        console.log(objimagen);
        let imagenDefault = 'images/default.png';
        if (objimagen) {
            let ruta = `Images/${objimagen.ima_url}`;
            if (fs.existsSync(ruta)) {
                return res.sendFile(path_module.resolve(ruta));
            }
            else {
                return res.sendFile(path_module.resolve(imagenDefault));
            }
        }
        else {
            return res.sendFile(path_module.resolve(imagenDefault));
        }
    });
};
exports.updateImagenById = (req, res) => {
    let { id_img } = req.params;
    var url = "";
    sequalize_1.Imagen.findByPk(id_img).then((imagen) => {
        if (imagen) {
            url = imagen.ima_url;
            return sequalize_1.Imagen.destroy({ where: { ima_id: id_img } });
        }
        else {
            res.status(200).json({
                ok: true,
                content: 'No hay Imagen'
            });
        }
    }).then((objimagen) => {
        fs.unlink(`images/${url}`, (error) => {
            if (!error) {
                try {
                    let ruta = req.files.imagen.path;
                    console.log(req.files.imagen);
                    let nombreyextension = ruta.split("\\")[1];
                    sequalize_1.Imagen.build({
                        doc_id: req.body.doc_id,
                        ima_url: nombreyextension
                    }).save().then((objimagen) => {
                        res.status(200).json({
                            ok: true,
                            content: objimagen
                        });
                    });
                }
                catch (error) {
                    res.status(404).json({
                        ok: false,
                        content: 'No se ha seleccionado ningun archivo'
                    });
                }
            }
            else {
                console.log(error);
                res.status(500).json({
                    ok: false,
                    content: 'Hubo error'
                });
            }
        });
    });
};
