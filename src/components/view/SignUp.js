import React from 'react';
import PageDetailsHeading from "../core/PageDetailsHeading";
import EmailField from "../core/EmailField";
import PasswordField from "../core/PasswordField";
import ButtonActor from "../core/ButtonActor";
import {sha256} from "js-sha256";

class SignUp extends React.Component{

    state={email:'',passwordHash:''};


    onEmailChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    };

    onPasswordChange = (e) =>{
        this.setState({[e.target.name]:sha256(e.target.value)});
    };



    onSignInButtonClick = (e) =>{
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/login/');
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({ email: this.state.email,passwordHash:this.state.passwordHash }));

    };

    render() {
        return(
            <div>
                <div className="row justify-content-start">
                    <form className="form-signin">
                        <PageDetailsHeading name="Please Sign-Up to continue"/>
                        <EmailField onEmailChange={this.onEmailChange}/>
                        <PasswordField onPasswordChange={this.onPasswordChange}/>
                        <ButtonActor name="Sign Up" isPrimaryButton="true" onButtonClick={this.onSignUpButtonClick}/>
                    </form>
                </div>
                <div className="row justify-content-start">
                    <form className="form-signin">
                        <ButtonActor name="Already have an account?" isPrimaryButton="false" hLink="/signin"/>
                    </form>
                </div>
            </div>

        );
    }

}

export default SignUp;