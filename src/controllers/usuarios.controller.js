const bcrypt = require('bcryptjs');
const Usuario = require("../models/usuario.model");
const { createUserToken } = require('../helpers/utils')


const getAll = async (req, res) => {
    try {
        const [usuarios] =
            await Usuario.getUser()
        res.json(usuarios)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getUser = async (req, res) => {
    try {
        const [usuarios] = await Usuario.getById(req.params.usuarioId);
        if (usuarios.lenght === 0) {
            return res.json({ fatal: 'no existe un usuario con ese id ' })
        }
        res.json(usuarios[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const createUsers = async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 8);

    try {
        const [result] = await Usuario.insert(req.body)
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const updateUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params
        await Usuario.updateUser(usuarioId, req.body);
        const [usuarios] = await Usuario.getById(usuarioId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const updateUserUsuario = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    try {
        const { usuarioId } = req.params
        await Usuario.updateUserUser(usuarioId, req.body);
        const [usuarios] = await Usuario.getById(usuarioId)
        res.json(usuarios[0])
        console.log(usuarios)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { usuarioId } = req.params
        const [deletedOne] = await Usuario.remove(usuarioId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getByDate = async (req, res) => {
    try {
        const { usuarioId, fecha } = req.params

        const [proyectos] = await Usuario.getHour(usuarioId, fecha)
        res.json(proyectos)

    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const registroHours = async (req, res) => {

    try {
        const [result] = await Usuario.registerHour(req.body)
        const [usuarios] = await Usuario.getById(result.insertId)
        res.json(usuarios[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const checkLoginUser = async (req, res) => {
    try {
        const [users] = await Usuario.getByEmailUser(req.body.email);
        if (users.length === 0) {
            return res.json({ fatal: 'error en email y/o contraseña' });
        }
        const user = users[0];
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (!iguales) {
            return res.json({ fatal: 'error en email y/o contraseña' });
        }
        res.json({
            success: 'Login correcto',
            token: createUserToken(user)
        });
    } catch (error) {
        res.json({ fatal: 'error en el email o contraseña' })
    }

}

const getProfile = async (req, res) => {
    res.json(req.user)
}


const horasDedicadas = async (req, res) => {
    try {
        const { proyectos_id, hora_entrada, hora_salida, fecha } = req.body;
        const [registros] = await Usuario.insertHour(req.user.id, proyectos_id, hora_entrada, hora_salida, fecha);
        res.json(registros);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

// test
const getHhor = async (req, res) => {
    const [data] = await Usuario.getTime(req.body)
    res.json(data[0])
}

const getWeek = async (req, res) => {

    const [time] = await Usuario.getTimeWeek(req.body)
    console.log(req.body)
    res.json(time[0])
}

module.exports = {
    getAll, getUser, createUsers, deleteUsers, updateUsuario, getByDate, registroHours, checkLoginUser, getProfile, horasDedicadas, getHhor, getWeek, updateUserUsuario
}
