"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequalize_1 = require("./../config/sequalize");
exports.getUsuarios = (req, res) => {
    sequalize_1.Usuario.findAll().then((arregloUsuarios) => {
        res.json({
            ok: true,
            title: "usuarios",
            content: arregloUsuarios
        });
    });
};
exports.registrarUsuario = (req, res) => {
    sequalize_1.Usuario.findAll({
        where: { usu_email: req.body.usu_email }
    }).then((usuarios) => {
        if (usuarios[0]) {
            res.status(500).json({
                ok: false,
                content: `El usuario con email ${req.body.usu_email} ya existe`
            });
        }
        else {
            let objUsuario = sequalize_1.Usuario.build(req.body);
            objUsuario.setSaltandHash(req.body.password);
            console.log(req.body.password);
            objUsuario.save().then((usuariocreado) => {
                res.status(201).json({
                    ok: true,
                    content: `Usuario ${usuariocreado.usu_email} creado con exito`
                });
            });
        }
    });
};
exports.Login = (req, res) => {
    let { correo, password } = req.body;
    sequalize_1.Usuario.findOne({
        where: {
            usu_email: correo
        }
    }).then((objetousuario) => {
        if (objetousuario) {
            let validacion = objetousuario.validarPasword(password);
            if (validacion) {
                let token = objetousuario.generarJWT();
                res.status(200).json({
                    ok: true,
                    token,
                    content: 'Usuario correctamente logueado'
                });
            }
            else {
                res.status(500).json({
                    ok: true,
                    content: 'Usuario o contraseña incorrectos'
                });
            }
        }
        else {
            res.status(404).json({
                ok: true,
                content: 'Usuario o contraseña incorrectos'
            });
        }
    });
};
