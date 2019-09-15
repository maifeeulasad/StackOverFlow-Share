import React from 'react';
import '../../css/bootstrap.min.css';

import '../../css/floating-labels.css';

class EmailField extends React.Component {

    state={
        valueOfEmail:''
    };


    render() {
        const {valueOfEmail}=this.props;
        return (
            <div>
                <div className="form-label-group">
                    <input type="email" defaultValue={valueOfEmail} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus onChange={this.props.onEmailChange} name="email"/>
                    <label htmlFor="inputEmail">Email address</label>
                </div>
            </div>
        );
    }
}
export default EmailField;