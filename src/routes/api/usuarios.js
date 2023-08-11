const router = require('express').Router();

const usuariosController = require('../../controllers/usuarios.controller')
const { checkTokenAdmin, checkTokenUser } = require('../../helpers/middlewares');


router.get('/', usuariosController.getAll);
router.get('/profile', checkTokenUser, usuariosController.getProfile)
router.get('/:usuarioId', /* checkUsuarioId, */ usuariosController.getUser);
router.get('/:usuarioId/:fecha', checkTokenAdmin, usuariosController.getByDate);


router.post('/', usuariosController.createUsers);
router.post('/login/user', usuariosController.checkLoginUser);
router.post('/horas', usuariosController.registroHours);
router.post('/horasdedicadas', usuariosController.horasDedicadas)
router.post('/getweek', usuariosController.getWeek)
router.post('/getTime', usuariosController.getHhor)

router.post('/profile/horasdedicadas', checkTokenUser, usuariosController.horasDedicadas)
router.put('/editar/:usuarioId', usuariosController.updateUsuario);
router.put('/editar/user/:usuarioId', usuariosController.updateUserUsuario);
router.delete('/:usuarioId', usuariosController.deleteUsers);

module.exports = router;