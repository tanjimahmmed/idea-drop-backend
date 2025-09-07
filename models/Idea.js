import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    summary: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        default: []
    }
}, {
    timestamps: true
});

const idea = mongoose.model('Idea', ideaSchema);

export default idea;
