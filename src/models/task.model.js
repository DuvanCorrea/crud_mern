const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    title: {
        type: String,
        default: "tarea",
    },
    desciption: {
        type: String,
        default: "No description",
    },
    date: {
        type: Date,
        default: new Date
    }
});

module.exports = model("Task", taskSchema);
