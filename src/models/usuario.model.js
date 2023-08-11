const getUser = () => {
    return db.query('select *from usuarios')
}

const getById = (usuarioId) => {
    return db.query('select *from usuarios where id=?', [usuarioId])
}

const insert = ({ nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento }) => {
    return db.query(
        'insert into usuarios (nombre, apellidos, dni, email, password, telefono, fecha_alta, estado,departamento) values (?, ?, ?, ?, ?, ?, ?, ?,?)',
        [nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento]
    );
}

const updateUser = (usuarioId, { nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento }) => {
    return db.query(
        'update usuarios set nombre=?, apellidos=?, dni=?, email=?, password=?, telefono=?, fecha_alta=?, estado=?,departamento=? where id=?',
        [nombre, apellidos, dni, email, password, telefono, fecha_alta, estado, departamento, usuarioId]
    );

}

const updateUserUser = (usuarioId, { email, password, telefono }) => {
    return db.query(
        'update usuarios set  email=?, password=?, telefono=? where id=?',
        [email, password, telefono, usuarioId]
    );

}

const remove = (usuarioId) => {
    return db.query(
        'delete from usuarios where id = ?', [usuarioId]
    )
}

// const getHour = (usuarioId, fecha) => {
//     return db.query('select up.fecha as "fecha", u.nombre, u.apellidos, p.nombre as "proyecto", sum(up.horas_dedicadas) from usuarios as u, proyectos as p, usuarios_has_proyectos as up where u.id= up.Usuarios_id and p.id=up.proyectos_id and up.Usuarios_id=? and up.fecha= ? group by p.nombre, u.nombre , u.apellidos, up.fecha', [usuarioId, fecha])
// }

const getHour = (usuarioId, fecha) => {
    return db.query('select up.fecha as "fecha", u.nombre, u.apellidos, p.nombre as "proyecto", sum(up.horas_dedicadas) as horas from usuarios as u, proyectos as p, usuarios_has_proyectos as up where u.id= up.Usuarios_id and p.id=up.proyectos_id and up.Usuarios_id=? and up.fecha= ? group by p.nombre, u.nombre , u.apellidos, up.fecha', [usuarioId, fecha])
}

const registerHour = ({ usuario_id, proyecto_id, horas_dedicadas, fecha }) => {
    return db.query('INSERT INTO mydb.Usuarios_has_proyectos (Usuarios_id, proyectos_id, horas_dedicadas, fecha) VALUES (?, ?, ?, ?)', [usuario_id, proyecto_id, horas_dedicadas, fecha]);
};

const getByEmailUser = (email) => {
    return db.query('select * from Usuarios where email = ?', [email]);
}

const insertHour = (usuarios_id, proyectos_id, hora_entrada, hora_salida, fecha) => {
    console.log('id', usuarios_id, 'proyecto_id', proyectos_id, 'entrada', hora_entrada, 'salida', hora_salida, 'fecha', fecha)

    return db.query(
        `INSERT INTO usuarios_has_proyectos (usuarios_id, proyectos_id, horas_dedicadas,  hora_entrada,hora_salida,fecha) VALUES (?, ?, ROUND((TIME_TO_SEC(?) - TIME_TO_SEC(?))/3600, 2),?,?,?)`,
        [usuarios_id, proyectos_id, hora_salida, hora_entrada, hora_entrada, hora_salida, fecha]
    )

}

const getByIdUserProyect = (usuarios_id) => {
    return db.query('select * from usuarios_has_proyectos where usuarios_id = ?', [usuarios_id])
}

const getTime = ({ usuarios_Id, fecha }) => {
    return db.query('select SUM(horas_dedicadas) as sum from usuarios_has_proyectos where Usuarios_id = ? AND fecha = ?', [usuarios_Id, fecha])
}

const getTimeWeek = ({ usuarios_id, fecha_inicio, fecha_fin }) => {
    return db.query('SELECT ROUND(SUM(horas_dedicadas))as total_horas_semana FROM usuarios_has_proyectos WHERE usuarios_id = ? AND fecha BETWEEN ? AND ?', [usuarios_id, fecha_inicio, fecha_fin])
}

module.exports = {
    getUser, getById, insert, updateUser, remove, getHour, registerHour, getByEmailUser, insertHour, getByIdUserProyect, getTime, getTimeWeek, updateUserUser
}


