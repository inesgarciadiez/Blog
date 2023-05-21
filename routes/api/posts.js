const { getByAutorId } = require('../../models/post.model');
const { getAll, create, getById } = require('../../models/post.model');

const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        const [posts] = await getAll();
        res.json(posts);
    }
    catch (error) {
        res.status(500).json({ fatal: error.message });
    }
});

// GET /api/posts/IDPOST
router.get('/:postId', async (req, res) => {
    const { postId } = req.params;

    try {
        const [result] = await getByAutorId(postId);
        if (result.length === 0) {
            return res.json({ fatal: 'No existe un post con ese AUTOR_id' });
        }
        res.json(result);
    }
    catch (error) {
        res.json({ fatal: error.message });
    }
});

// GET /api/clients/IDAUTOR
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
});
router.post('/', async (req, res) => {
    const [result] = await create(req.body);
});

module.exports = router;