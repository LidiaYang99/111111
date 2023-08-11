const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');

const createUserToken = (user) => {
    const obj = {
        userId: user.id,
        userRol: 'user',
        exp: dayjs().add(25, 'days').unix()
    };

    return jwt.sign(obj, 'Hola carola');
};

const createAdminToken = (admin) => {
    const obj = {
        userId: admin.id,
        userRol: 'admins',
        exp: dayjs().add(25, 'days').unix()
    };

    return jwt.sign(obj, 'Hola carola');
};

module.exports = {
    createUserToken, createAdminToken
}