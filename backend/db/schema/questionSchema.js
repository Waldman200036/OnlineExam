const mongoose= require('../common/connection');
const schema = mongoose.Schema;
var questionSchema= new schema({

    "questionId": String,
    "question": String,
    "options": [{
        "optionId": Number,
        "option": String
    }],
    "rightAns": String,
    "tags": [String],
    "difficulty": {
        "level": String,
        "weight": Number
    }
    
});

var questionModel=mongoose.model('questions',questionSchema);
module.exports=questionModel;