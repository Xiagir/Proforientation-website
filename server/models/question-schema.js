const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question_category: String,
    question_body: String,
    question_answers: Array,
    right_answer_index: Number,
});

module.exports = mongoose.model("questions", QuestionSchema);


