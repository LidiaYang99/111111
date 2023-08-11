const router = require('express').Router();

router.use('/admins', require('./api/admins'));
router.use('/usuarios', require('./api/usuarios'));
router.use('/proyectos', require('./api/proyectos'));



module.exports = router;