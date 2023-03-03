const prisma = require('../databases');

module.exports = {
    async read(req, res) {
        const listCourses = await prisma.curso.findMany();
        res.json(listCourses)
    },

    async create(req, res) {
        
    },

    async update(req, res) {
        
    },

    async delete(req, res) {
        
    }
}