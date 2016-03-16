import React, {PropTypes} from 'react';
import cx from 'classnames';

function makeOnChangeHandler(props) {
    const optionsMap = props.options.reduce((options, option) => {
        options[option.value.toString()] = option;

        return options;
    }, {});

    return e => {
        const nextValue = e.target.value;

        if (nextValue !== props.value.toString()) {
            props.onChange(optionsMap[nextValue], e);
        }
    };
}

export default function SelectField(props) {
    const sltProps = Object.assign({}, props);

    if (props.onChange) {
        sltProps.onChange = makeOnChangeHandler(props);
    }

    return (
        <div className="select-field form-group">
            <label className={cx('control-label', props.labelClassName)} htmlFor={sltProps.id}>
                {props.label}
            </label>
            <div className={sltProps.className}>
                <select {...sltProps} className="form-control">
                    {props.options.map(option => (
                        <option key={`options-${option.value}`} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

SelectField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    labelClassName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        value: PropTypes.any.isRequired
    })).isRequired,
    onChange: PropTypes.func
};
