const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        default: "tarea",
    },
    description: {
        type: String,
        default: "No description",
    },
    date: {
        type: Date,
        default: new Date
    },
    finish: {
        type: Boolean,
        default: false
    }
});

module.exports = model("Task", taskSchema);
