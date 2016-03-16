import React, {PropTypes} from 'react';
import cx from 'classnames';
import SelectField from './SelectField';

export default function OptionsPanel({className, title, separatorOptions, columnsOptions}) {
    return (
        <div className={cx('options-panel', className)}>
            <h3>{title}</h3>
            <div className="options-panel-fields form-horizontal">
                <SelectField
                    id="sltCsvSeparator"
                    className="col-md-8"
                    label="Separator"
                    labelClassName="col-md-4"
                    options={separatorOptions}
                />
                <SelectField
                    id="sltLatitudeField"
                    className="col-md-8"
                    label="Latitude Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltMarkerField"
                    className="col-md-8"
                    label="Marker Label Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltLatitudeField"
                    className="col-md-8"
                    label="Latitude Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltLongitudeField"
                    className="col-md-8"
                    label="Longitude Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltCityField"
                    className="col-md-8"
                    label="City Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltStreetField"
                    className="col-md-8"
                    label="Street Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
                <SelectField
                    id="sltPostalCodeField"
                    className="col-md-8"
                    label="Postal Code Column"
                    labelClassName="col-md-4"
                    options={columnsOptions}
                />
            </div>
        </div>
    );
}

OptionsPanel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    separatorOptions: PropTypes.arrayOf(PropTypes.object),
    columnsOptions: PropTypes.arrayOf(PropTypes.object)
};
