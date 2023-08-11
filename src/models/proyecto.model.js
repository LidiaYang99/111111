const { getHorasExtra } = require("../controllers/proyectos.controller")

const getProyectos = () => {
    return db.query('select * from proyectos')
}

const getByProyectoId = (proyectoId) => {
    return db.query('select * from proyectos where id = ?', [proyectoId])
}

const insertProyecto = ({ nombre, descripcion }) => {
    return db.query(
        'insert into proyectos (nombre, descripcion) values (?, ?)', [nombre, descripcion]
    )
}

const updateProyecto = (proyectoId, { nombre, descripcion }) => {
    return db.query(
        'update proyectos set nombre=?, descripcion=? where id=? ', [nombre, descripcion, proyectoId]
    )
}

const deleteProyecto = (proyectoId) => {
    return db.query(
        'delete from proyectos where id = ?', [proyectoId]
    )
}

const getMonth = (usuarioId, proyectoId, mes) => {
    return db.query(
        'select up.horas_dedicadas, up.fecha, p.nombre from mydb.usuarios_has_proyectos as up, proyectos as p  where p.id=up.proyectos_id and Usuarios_id=? and proyectos_id=? and month(fecha)=? ', [usuarioId, proyectoId, mes]
    )
}

const getAllHourByProyect = (mes, usuarioId) => {
    return db.query('SELECT proyectos_id, SUM(horas_dedicadas) AS total_horas_dedicadas FROM usuarios_has_proyectos where month(fecha)=? and usuarios_id=? GROUP BY proyectos_id;', [mes, usuarioId])
}
const getHorasExtras = (usuarioId, mes) => {
    return db.query('SELECT  p.nombre AS nombre_proyecto, SUM(CASE WHEN horas_dedicadas > 8 THEN horas_dedicadas - 8 END) AS horas_extra_total  FROM usuarios_has_proyectos up JOIN proyectos p ON up.proyectos_id = p.id WHERE Usuarios_id = ? and month(fecha)=? GROUP BY p.nombre', [usuarioId, mes,])
}

/* const getAllHour = (mes, usuarioId) => {
    return db.query('SELECT SUM(horas_dedicadas) AS total_horas_dedicadas FROM usuarios_has_proyectos where month(fecha)=? and usuarios_id=?', [mes, usuarioId])
}
 */
module.exports = {
    getProyectos, getByProyectoId, insertProyecto, updateProyecto, deleteProyecto, getMonth, getAllHourByProyect, getHorasExtras,/*  getAllHour
*/} 