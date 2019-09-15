import React from 'react';
import PageDetailsHeading from '../core/PageDetailsHeading';
import EmailField from '../core/EmailField';
import PasswordField from '../core/PasswordField';
import ButtonActor from '../core/ButtonActor';
import {sha256} from 'js-sha256';


class SignIn extends React.Component{

    state={email:'',passwordHash:''};


    onEmailChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    };

    onPasswordChange = (e) =>{
        this.setState({[e.target.name]:sha256(e.target.value)});
    };



    onSignInButtonClick = (e) =>{
        let that=this;
        if(this.state.email==='' || this.state.passwordHash==='')
            return;
        var request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(request.responseText);
                if(request.responseText==="true")
                {
                    that.props.history.push('/home');
                }
                else if(request.responseText==="false")
                {
                    that.props.history.push("/wrong_password");
                }
            }
            else if(this.status!==200)
            {
                console.log(this.status);
                that.props.history.push("/bad_request/".concat(this.status));
            }
        };
        request.open('GET', 'http://localhost:8080/login/'+this.state.email+'/'+this.state.passwordHash, true);
        request.send();

    };

    render() {
        return(
            <div>
                <div className="row justify-content-start">
                    <form className="form-signin">
                        <PageDetailsHeading name="Please Sign-In to continue"/>
                        <EmailField onEmailChange={this.onEmailChange}/>
                        <PasswordField onPasswordChange={this.onPasswordChange}/>
                        <ButtonActor name="Sign In" isPrimaryButton="true" onButtonClick={this.onSignInButtonClick}/>
                    </form>
                </div>
                <div className="row justify-content-start">
                    <form className="form-signin">
                        <ButtonActor name="Don't Have An Account?" isPrimaryButton="false" hLink="/signup"/>
                    </form>
                </div>
            </div>

        );
    }

}

export default SignIn;