import React from 'react';
import {ButtonElm} from '../../components/Controls/Button/Button';
import History from '../../routes/History';
class Login extends React.Component {

    handleLogin = () => {
        localStorage.setItem('token','token');
        History.push('/')
    }

    render(){
        return(
            <div className="container my-5">
                <h1>Login Page</h1>
                <ButtonElm text='Login' handleClick={this.handleLogin}/>
            </div>
        )
    }
}


export default Login;