import React from 'react';
import './login.css';
export class Login extends React.Component{

    constructor(props){
       super(props);
    }

    componentWillMount(){


    }

    loginUser(){

        if(!this.refs.username.value || !this.refs.password.value){

            alert('kindly fill  the valid credentials..');

        }

        else{
        fetch('http://localhost:1234/fetchUser', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
           body: JSON.stringify({

            username: this.refs.username.value,
            password: this.refs.password.value
           }),
            credentials: "include", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            
        }).then(data=>data.json()).then(data=>{
            console.log('user received is', data);
            if(data.status=="invalid"){
            alert('invalid user creentials ..kindly check your credentials and try again..');
            }

            else{

                localStorage.setItem('sessionId',data.sessionId);
                this.props.history.push('/test');

            }
        }).catch(err=>alert("no network available", err));
    }

}

    render(){

         return (
             <div id="LoginForm">
            <div className="container">
<h1 className="form-heading">login Form</h1>
<div className="login-form">
<div className="main-div">
    <div className="panel">
   <h2>Student Login Page !</h2>
   <p>Please enter your username and password</p>
   </div>
    <form id="Login">

        <div className="form-group">


            <input type="text" className="form-control" id="inputEmail" placeholder="Username" ref="username"/>

        </div>

        <div className="form-group">

            <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref="password"/>

        </div>
        
        <button type="button" className="btn btn-primary" onClick={this.loginUser.bind(this)}>Login</button>

    </form>
    </div>

</div></div></div>
         )
    }
}