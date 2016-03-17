import React, {PropTypes} from 'react';
import cx from 'classnames';

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
            {
                !props.header ?
                    <td>
                        <label>
                            <input
                                type="checkbox"
                                checked={!props.disabled}
                                onChange={props.onRowDisabledChange}
                            />
                        </label>
                    </td> :
                    <td />
            }
            {props.columns.map((colValue, colIdx) => (
                <td
                    key={`col-${colIdx}`}
                    className={cx({'text-muted': props.disabled})}
                    style={{
                        textDecoration: props.disabled ? 'line-through' : 'none',
                        fontWeight: props.header ? 'bold' : 'normal',
                        cursor: props.header ? 'pointer' : 'normal'
                    }}
                    onClick={() => props.onColumnClick && props.onColumnClick(colValue, colIdx)}
                >
                    {renderValue(colValue)}
                </td>
            ))}
        </tr>
    );
}

DataTableRow.propTypes = {
    columns: PropTypes.array,
    disabled: PropTypes.bool,
    header: PropTypes.bool,
    onRowDisabledChange: PropTypes.func,
    onColumnClick: PropTypes.func
};
