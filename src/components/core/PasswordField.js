import React from 'react';
import '../../css/App.css';
import '../../css/bootstrap.min.css';

import '../../css/floating-labels.css';

class PasswordField extends React.Component {
    render() {
        return (
            <div>
                <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="passwordHash" onChange={this.props.onPasswordChange}/>
                    <label htmlFor="inputPassword">Password</label>
                </div>
            </div>
        );
    }
}
export default PasswordField;