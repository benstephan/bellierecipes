import React from 'react';
import axios from 'axios';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            login: ''
        };
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handlePasswordInput(e) {
        this.setState({ password: e.target.value });
    }
    handleUserInput(e) {
        this.setState({ login: e.target.value });
    }
    
    handleSubmit(e){
        e.preventDefault();
       

        const loginObject = {
            username: '',
            password: this.state.password,
            email: '',
            login: this.state.login
        }
        
       
            axios.get('http://localhost:4000/login', loginObject)
            .then((res) => {
                res.data.some(user => {
                    if(loginObject.login === user.login){
                        if(loginObject.password === user.password){
                            localStorage.setItem('loggedin', true);
                            localStorage.setItem('name', user.username);
                            localStorage.setItem('loggedin', user.email);
                            localStorage.setItem('loggedin', user.login);
                         
                            return true;
                        }else{
                            console.log('did not match');
                        }
                    }else{
                        console.log("no user");
                    }
                })
            }).catch((error) => {
                console.log('Axios Error: ', error)
            });       


        
    }
    
    render(){

        return (
            <div className="login-form small-container">
                <form>
                    <fieldset>
                        <label>User Name</label>
                        <input 
                            type="text" 
                            className="form-input" 
                            onChange={this.handleUserInput}
                            value={this.state.login}/>
                    </fieldset>
                    <fieldset>
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-input" 
                            onChange={this.handlePasswordInput}
                            value={this.state.password}  />
                    </fieldset>
                    <button type="submit" onClick={this.handleSubmit.bind(this)} className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default LoginForm