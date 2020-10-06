import React , {Component} from 'react';
import {Redirect} from 'react-router-dom'
import './Home.css';

class Home extends Component {

    state =({
        loginStatus : false
    })

    checkUserToLogin = (e) => {
        e.preventDefault();
        sessionStorage.setItem('user_name',e.target.username.value);
        sessionStorage.setItem('user_mail',e.target.usermail.value);
        sessionStorage.setItem('password',e.target.password.value);
        this.setState({loginStatus:true});
    }


    render() {
        var body = null;
        if(sessionStorage.getItem('password')) {
            body = <Redirect to ='/users' />
        } else {
            body =(
                <div className="Home">
                <form onSubmit={this.checkUserToLogin}>
                    UserName : <input type="text" name='username' required/><br></br><br></br>
                    UserMail : <input type="email" name='usermail' required/><br></br><br></br>
                    Password : <input type="password" name='password' required/><br></br><br></br>
                    <button type="submit"> Login </button>
                </form>
            </div>
            )
        }
        return (
            body
        );
    }
}

export default Home;
