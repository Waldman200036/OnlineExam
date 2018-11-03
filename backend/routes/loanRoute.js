const express=require('express');
var loanRoute= express.Router();
const cors=require('cors');
const loanOperations=require('../db/loanOperations');
const sessionChecker=require('../utils/middlewares/sessionChecker');

//testing if backend is working
loanRoute.get('/',(request,response)=>{
    response.json({
        message: "working smooth"
    });
});

loanRoute.post('/fetchUser', (request,response)=>{
    let userObject=request.body;
    loanOperations.fetchUser(userObject,request,response);
});

loanRoute.post('/getQuestions', sessionChecker,(request,response)=>{
loanOperations.getQuestions(request,response);
});

module.exports=loanRoute;