import React from 'react';
import {Link} from 'react-router-dom';


class Assignments extends React.Component{

    render() {

        const elements = ['one', 'two', 'three','asd'];

        const items = [];

        for (const [index, value] of elements.entries()) {
            items.push(
                <Link to={'/class/'.concat(value)}>
                    <li key={index}>{"Assignment - ".concat(value)}</li>
                </Link>
            )
        }

        return (
            <div>


                <h1>Assignment Submission System</h1>


                <h6 className="mt-4">Assignments to-do : </h6>

                {items}

            </div>
        );
    }

}

export default Assignments;