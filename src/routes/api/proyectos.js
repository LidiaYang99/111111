const { getAllProyectos, postNewProyecto, actualizaProyecto, removeProyecto, getForMonth, getById, getHourByProyect, getHorasExtra } = require('../../controllers/proyectos.controller');
const { checkTokenUser } = require('../../helpers/middlewares');


const router = require('express').Router();

router.get('/horasporproyecto/:mes', checkTokenUser, getHourByProyect)
router.get('/', getAllProyectos)
router.get('/:proyectoId/:mes', checkTokenUser, getForMonth)
router.post('/', postNewProyecto)
router.put('/editar/:proyectoId', actualizaProyecto)
router.delete('/:proyectoId', removeProyecto);
router.get('/obtener/proyecto/:proyectoId', getById)
router.get('/obtener/horasextra/:mes', checkTokenUser, getHorasExtra)





module.exports = router;