import express from 'express';
const router = express.Router();
import Idea from '../models/Idea.js';
import mongoose from 'mongoose';

// @route GET /api/ideas
// @description GET all ideas
// @access Public
router.get('/', async (req, res, next) => {
    try {
        const ideas = await Idea.find();
        res.json(ideas);
    }catch(error){
        console.log(err);
        next(err);
    }
});

// @route GET /api/ideas/:id
// @description GET single idea
// @access Public
router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            res.status(400);
            throw new Error('Idea Not Found');
        }
        
        const idea = await Idea.findById(req.params.id);

        if(!idea){
            res.status(400);
            throw new Error('Idea Not Found');
        }
        res.json(idea);
    }catch(error){
        console.log(err);
        next(err);
    }
});

// @route POST /api/ideas
// @description Create new ideas
// @access Public
router.post('/', (req, res) => {
    const {title, description} = req.body;

    res.send(title)
})

export default router;