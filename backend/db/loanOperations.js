const Users=require('./schema/userSchema');
const uniqueString=require('unique-string');
const Questions=require('./schema/questionSchema');
var loanOperations= {

    getQuestions(request,response){

        Questions.find({},(err,content)=>{

            if(err){
                console.log('error in finding ques...');
                response.json({
                    status: 404,
                    error: err,
                    responseText: 'error in finding ques...'
                });
            }

            else if(content && content.length>0){
                console.log('questions found ', content);
                
                response.json({
                   content,
                   
                });
                
            }

            else{
                response.json({
                    
                    responseText: 'some other error occured in finding questions'
                })

            }
        })
        
    },
    
    fetchUser(userObject,request,response){
        console.log('userObject received...', userObject);
        Users.find({"username": userObject.username, "password": userObject.password},(err,content)=>{

            if(err){
                console.log('error in logging the user...');
                response.json({
                    status: 404,
                    error: err,
                    responseText: 'error in logging the user...'
                });
            }

            else if(content && content.length>0){
                console.log('user found ', content);
                request.session.username=content[0].username;
                request.session.save(err=>{

                    if(err){
                        console.log('error saving the session...');
                        response.json({
                            error: err,
                            responseText: 'error saving the session',
                            status: 500
                        });
                    }
    
                    else {
    
                        console.log('session saved successfully..');
                        
                    console.log('session created');
                    console.log('request.session ', request.session);
              
                        response.json({
                            content: content,
                            sessionId: request.sessionID,
                            
                        });
                    }
                });
            }

            else{
                response.json({
                    status: "invalid",
                    responseText: 'some other error occured in loggin in the user'
                })
            }
        })
    }
}

module.exports=loanOperations;