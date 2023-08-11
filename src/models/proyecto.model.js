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
        'select up.horas_dedicadas, up.fecha, p.nombre from mydb.usuarios_has_proyectos as up, proyectos as p where p.id=up.proyectos_id and usuarios_id=? and proyectos_id=? and month(fecha)=? ', [usuarioId, proyectoId, mes]
    )
}

const getAllHourByProyect = (mes, usuarioId) => {
    return db.query('select proyectos_id, sum(horas_dedicadas) as total_horas_dedicadas from usuarios_has_proyectos where month(fecha)=? and usuarios_id=? group by proyectos_id;', [mes, usuarioId])
}
const getHorasExtras = (usuarioId, mes) => {
    return db.query('select p.nombre as nombre_proyecto, sum(case when horas_dedicadas > 8 then horas_dedicadas - 8 end) as horas_extra_total from usuarios_has_proyectos up join proyectos p on up.proyectos_id = p.id where usuarios_id = ? and month(fecha)=? group by p.nombre', [usuarioId, mes,])
}

/* const getAllHour = (mes, usuarioId) => {
    return db.query('SELECT SUM(horas_dedicadas) AS total_horas_dedicadas FROM usuarios_has_proyectos where month(fecha)=? and usuarios_id=?', [mes, usuarioId])
}
 */
module.exports = {
    getProyectos, getByProyectoId, insertProyecto, updateProyecto, deleteProyecto, getMonth, getAllHourByProyect, getHorasExtras,/*  getAllHour
*/} 