const { Router } = require('express');
const router = Router();
<<<<<<< HEAD

const userControllers = require('../controllers/users.js');
=======
const userControllers = require('../controllers/users');
const loginControllers = require('../controllers/auth');
const authMiddleware = require('../middlewares/auth');
const prisma = require('../databases');

>>>>>>> 90d839ba12f0077e813b0478e6720f67decdb9fa
router.get('/users', userControllers.read);
router.post('/users', userControllers.create);
router.put('/users/:id', userControllers.update);
router.delete('/users/:id', userControllers.delete);

router.post('/login', loginControllers.auth);

<<<<<<< HEAD
=======
router.get('/system', authMiddleware, async (req, res) => {
    const id = req.userID;
    const user = await prisma.users.findUnique({where: {id: Number(id)}});
    return res.json({system: true, id, email: user.email, status: "authorized"});
});

>>>>>>> 90d839ba12f0077e813b0478e6720f67decdb9fa
module.exports = router;