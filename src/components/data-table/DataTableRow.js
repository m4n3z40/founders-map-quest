import React, {PropTypes} from 'react';

export default function DataTableRow(props) {
    return (
        <tr {...props}>
            {props.columns.map((colValue, colIdx) => (
                <td key={`col-${colIdx}`}>{colValue}</td>
            ))}
        </tr>
    );
}

DataTableRow.propTypes = {
    columns: PropTypes.array
};
