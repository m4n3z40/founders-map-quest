import React, {PropTypes} from 'react';
import cx from 'classnames';

function makeOnChangeHandler(props) {
    const optionsMap = props.options.reduce((options, option) => {
        options[option.value.toString()] = option;

        return options;
    }, {});

    return e => props.onChange(optionsMap[e.target.value], e);
}

function renderOptions(options) {
    if (!options || options.length === 0) {
        return <option value="">No fields available</option>;
    }

    return options.map((option, idx) => (
        <option key={`options-${idx}-${option.value}`} value={option.value}>
            {option.text}
        </option>
    ));
}

export default function SelectField(props) {
    const sltProps = Object.assign({}, props);
    const {options} = props;

    if (options && options.length > 0 && props.onChange) {
        sltProps.onChange = makeOnChangeHandler(props);
    }

    return (
        <div className="select-field form-group">
            <label className={cx('control-label', props.labelClassName)} htmlFor={sltProps.id}>
                {props.label}
            </label>
            <div className={sltProps.className}>
                <select {...sltProps} className="form-control">
                    {renderOptions(options)}
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
    })),
    onChange: PropTypes.func
};
