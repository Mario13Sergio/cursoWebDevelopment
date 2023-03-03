const { Router } = require('express');
const router = Router();
const controllers = require('../controllers');

router.get('/cursos', controllers.read);
router.post('/cursos', controllers.create);
router.put('/cursos/:id', controllers.update);
router.delete('/cursos/:id', controllers.delete);

module.exports = router;