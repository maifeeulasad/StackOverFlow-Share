import React from 'react';
import '../../css/App.css';
import '../../css/bootstrap.min.css';

class PageDetailsHeading extends React.Component {
    render(props) {
        return (
            <div>
                <div className="text-center mb-4">
                    <img className="mb-4" src="../../images/icon.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">
                        Assignment Submission System
                    </h1>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}
export default PageDetailsHeading;