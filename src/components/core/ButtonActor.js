import React from 'react';
import '../../css/bootstrap.min.css';
import {Link} from 'react-router-dom'

class ButtonActor extends React.Component {
    isPrimaryButton;
    hLink;


    render() {
        if(this.props.isPrimaryButton==="true")
        {
            return (
                <div>
                    <Link to={this.props.hLink}>
                        <button className="btn btn-lg btn-primary btn-block btn-animated" type="submit" onClick={this.props.onButtonClick}>
                            {this.props.name}
                        </button>
                    </Link>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <Link to={this.props.hLink}>
                        <button className="btn btn-sm btn-secondary btn-block btn-animated" type="submit" onClick={this.onButtonClick}>
                            {this.props.name}
                        </button>
                    </Link>
                </div>
            );
        }
    }
}
export default ButtonActor;