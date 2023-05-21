const { getById } = require('../../models/autor.model');
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

// GET /api/clients/IDAUTOR
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const [result] = await getById(postId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un post con ese AUTOR_id' });
        }
        res.json(result);
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
});

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