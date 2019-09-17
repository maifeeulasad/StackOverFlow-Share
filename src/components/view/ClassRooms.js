import React from 'react';
import {Link} from 'react-router-dom';


class ClassRooms extends React.Component{

    render() {

        const elements = ['one', 'two', 'three','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd','asd'];

        const items = [];

        for (const [index, value] of elements.entries()) {
            items.push(
                <Link to={'/class/'.concat(value)}>
                    <li key={index}>{"Class-room - ".concat(value)}</li>
                </Link>
            )
        }

        return (
            <div>

                <h1>Assignment Submission System</h1>
                <h6 className="mt-4">All enrolled class-rooms : </h6>
                    {items}

            </div>
        );
    }

}

export default ClassRooms;
