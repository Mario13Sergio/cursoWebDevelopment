const prisma = require("../databases");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret, expiresIn } = require('../configs/auth.json');

module.exports = {
    async auth(req, res) {
        const { email, password } = req.body;
        if (!email) return res.status(400).json('Email is required');  
        if (!password) return res.status(400).json('Password is required');

<<<<<<< HEAD
        const user = await prisma.users.findUnique({where: {email}});
        if(!user) return res.status(401).json('Email or Password incorrect');

        const passwordCheck = await bcrypt.compare(password, user.password);
        if (!passwordCheck) return res.status(401).json('Email or Password incorrect');

        const token = jwt.sign({id: String(user.id)}, secret, {expiresIn});
        return res.status(200).json({
            id: user.id,
            status: "Authenticated",
            token
        }); 
=======
            const user = await prisma.users.findUnique({where: {email}});
            if (!user) return res.status(401).json('Email or Password incorrect');

            const passwordCheck = await bcrypt.compare(password, user.password);
            if(!passwordCheck) return res.status(401).json('Email or Password incorrect');

            const token = jwt.sign({id: String(user.id)}, secret, {expiresIn});
            return res.json({id: user.id, status: "Authenticated", token});
        } catch (error) {
            return console.error(error.message);
        }
>>>>>>> 90d839ba12f0077e813b0478e6720f67decdb9fa
    }
}