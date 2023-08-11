const ProyectoModel = require('../models/proyecto.model');

const getAllProyectos = async (req, res) => {
    try {
        const [proyectos] = await ProyectoModel.getProyectos();
        res.json(proyectos)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getById = async (req, res) => {
    const { proyectoId } = req.params
    console.log(proyectoId)
    const [result] = await ProyectoModel.getByProyectoId(proyectoId)
    res.json(result[0])
}

const postNewProyecto = async (req, res) => {
    try {
        const [result] = await ProyectoModel.insertProyecto(req.body);
        const [proyectos] = await ProyectoModel.getByProyectoioId(result.insertId);
        res.json(proyectos[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const actualizaProyecto = async (req, res) => {
    try {
        const { proyectoId } = req.params
        await ProyectoModel.updateProyecto(proyectoId, req.body);
        const [proyectos] = await ProyectoModel.getByProyectoId(proyectoId)
        res.json(proyectos[0])
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const removeProyecto = async (req, res) => {
    try {
        const { proyectoId } = req.params
        const [deletedOne] = await ProyectoModel.deleteProyecto(proyectoId);
        res.json(deletedOne)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const getForMonth = async (req, res) => {
    const usuarioId = req.user.id
    try {

        const { proyectoId, mes } = req.params
        const registro = await ProyectoModel.getMonth(usuarioId, proyectoId, mes)
        res.json(registro[0])

    } catch (error) {
        res.json({ fatal: error.message })
    }

}

const getHourByProyect = async (req, res) => {
    const usuarioId = req.user.id
    const { mes } = req.params
    const allHour = await ProyectoModel.getAllHourByProyect(mes, usuarioId)
    res.json(allHour)
}
const getHorasExtra = async (req, res) => {
    const usuarioId = req.user.id
    const { mes } = req.params
    const [horasExtra] = await ProyectoModel.getHorasExtras(usuarioId, mes)
    res.json(horasExtra)
    console.log(horasExtra)
}

const getAllHoras = async (req, res) => {
    const usuarioId = req.user.id
    const { mes } = req.params
    const [allHour] = await ProyectoModel.getAllHour(mes, usuarioId)
    console.log(allHour)
    res.json(allHour)
}

module.exports = {
    getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto, getForMonth, getById, getHourByProyect, getHorasExtra, getAllHoras
}