const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuario.model');
const AdminModel = require('../models/admin.model');


const checkUsuarioId = async (req, res, next) => {
    const { usuarioId } = req.params;

    const [usuarios] = await Usuario.getUsers(usuarioId);

    if (usuarios.length === 0) {
        return res.send({ fatal: 'El usuario no existe' });
    }

    next();
};

const checkTokenAdmin = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Necesitas la cabecera de autorización' });
    }
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'Hola carola');
    } catch (error) {
        return res.json({ fatal: error.message });
    }

    const [admins] = await AdminModel.getByAdminId(obj.userId);
    if (admins.length === 0) {
        return res.json({ fatal: 'Administrador no encontrado' });
    }

    req.admin = admins[0];

    next();
}

const checkTokenUser = async (req, res, next) => {
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Necesitas la cabecera de autorización' });
    }
    const token = req.headers['authorization'];

    let obj;
    try {
        obj = jwt.verify(token, 'Hola carola');
    } catch (error) {
        return res.json({ fatal: error.message });
    }

    const [users] = await Usuario.getById(obj.userId);
    if (users.length === 0) {
        return res.json({ fatal: 'Usuario no encontrado' });
    }

    req.user = users[0];

    next();
}


module.exports = {
    checkTokenUser, checkTokenAdmin, checkUsuarioId
}