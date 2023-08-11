const getAdmin = () => {
    return db.query('select * from administradores')
};

const getByAdminId = (adminId) => {
    return db.query('select * from administradores where id = ?', [adminId])
};

const getByEmail = (email) => {
    return db.query('select * from administradores where email = ?', [email]);
}

const insertAdmin = ({ nombre, apellidos, email, password }) => {
    return db.query(
        'insert into administradores (nombre, apellidos, email, password) values (?, ?, ?,?)', [nombre, apellidos, email, password]
    )
}

const updateById = (adminId, { nombre, apellidos, email, password }) => {
    return db.query(
        'update administradores set nombre = ?, apellidos = ?, email = ?, password = ? where id = ?', [nombre, apellidos, email, password, adminId]
    )
}

const deleteAdmin = (adminId) => {
    return db.query(
        'delete from administradores where id = ?', [adminId]
    )
}

module.exports = {
    getAdmin, getByAdminId, getByEmail, insertAdmin, updateById, deleteAdmin
}