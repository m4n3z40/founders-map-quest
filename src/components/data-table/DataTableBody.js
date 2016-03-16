import React, {PropTypes} from 'react';

export default function DataTableBody(props) {
    return (
        <tbody {...props}>
            {props.children}
        </tbody>
    );
}

DataTableBody.propTypes = {
    children: PropTypes.node
};
