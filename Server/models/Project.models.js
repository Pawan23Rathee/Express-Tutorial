const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    project_name: { type: String, required: true },
    image: { type: String },
    video: { type: String },
    file: { type: String, required: true },
    status: { type: String, enum: ["Complete", "Pending"], required: true },
    partners: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    category: { type: String, required: true },
    tags: [{ type: String }],
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ratings: [{ user: mongoose.Schema.Types.ObjectId, rating: Number }],
    comments: [{ user: mongoose.Schema.Types.ObjectId, comment: String }],
});

module.exports = mongoose.model("Project", ProjectSchema);