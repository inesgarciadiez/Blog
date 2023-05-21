const { getByAutorId } = require('../../models/post.model');
const { getAll, create } = require('../../models/autor.model');

const router = require('express').Router();

// GET
router.get('/', async (req, res) => {
    try {
        const [result] = await getAll();
        res.json(result);
    }
    catch (error) {
        res.status(503).json({ fatal: error.message });
    }
});

/* // GET /api/clients/IDAUTOR
router.get('/:autorId', async (req, res) => {
    try {
        const [autores] = await getAll();
        for (let autor of autores) {
            const [posts] = await getByAutorId(autor.id);
            autor.posts = posts;
        }
        res.json(autores);
    } catch (error) {

    }
}); */

// POST
router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;