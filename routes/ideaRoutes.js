import express from 'express';
const router = express.Router();

// @route GET /api/ideas
// @description GET all ideas
// @access Public
router.get('/', (req, res) => {
    const ideas = [
        {id: 1, title: 'Idea 1', description: 'This is idea 1'},
        {id: 2, title: 'Idea 2', description: 'This is idea 2'},
        {id: 3, title: 'Idea 3', description: 'This is idea 3'},
    ];

    res.status(400);
    throw new Error('This is an error')

    res.json(ideas);
});

// @route POST /api/ideas
// @description Create new ideas
// @access Public
router.post('/', (req, res) => {
    const {title, description} = req.body;

    res.send(title)
})

export default router;