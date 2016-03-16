import React, {PropTypes} from 'react';

export default function DataTableHeader(props) {
    return (
        <thead {...props}>
            {props.children}
        </thead>
    );
}

DataTableHeader.propTypes = {
    children: PropTypes.node
};
