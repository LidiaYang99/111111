const { getAllAdmin, actualizaAdmin, removeAdmin, create, checkLogin, getProfile } = require('../../controllers/admins.controller');
const { checkTokenAdmin } = require('../../helpers/middlewares');

const router = require('express').Router();

router.get('/', getAllAdmin);
router.get('/profile', checkTokenAdmin, getProfile)
router.post('/registro', create);
router.post('/login', checkLogin);
router.put('/:adminId', actualizaAdmin);
router.delete('/:adminId', removeAdmin);



module.exports = router;