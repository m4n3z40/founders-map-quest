import React, {PropTypes} from 'react';

function renderValue(value) {
    if (value.startsWith('http')) {
        const ext = value.substr(value.lastIndexOf('.') + 1);

        if (ext.match(/jpg|jpeg|png|gif|svg/i)) {
            return <img src={value} alt="Row image" style={{maxWidth: 220, maxHeight: 160}} />;
        }

        return <a href={value} target="_blank">{value}</a>;
    }

    return value;
}

export default function DataTableRow(props) {
    return (
        <tr {...props}>
            {props.columns.map((colValue, colIdx) => (
                <td key={`col-${colIdx}`}>{renderValue(colValue)}</td>
            ))}
        </tr>
    );
}

DataTableRow.propTypes = {
    columns: PropTypes.array
};
