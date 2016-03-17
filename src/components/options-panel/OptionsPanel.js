import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {changeOptions} from '../../actions/csvImporterOptions';
import SelectField from './SelectField';

function handleChange(field, {value}) {
    this.onChange({[field]: value});
}

function mapDispatchToProps(dispatch) {
    return {
        onChange(nextOptions) {
            dispatch(changeOptions(nextOptions));
        }
    };
}

function OptionsPanel(props) {
    return (
        <div className={cx('options-panel', props.className)}>
            <h3>{props.title}</h3>
            <div className="options-panel-fields form-horizontal">
                <SelectField
                    id="sltCsvSeparator"
                    className="col-md-8"
                    label="Separator"
                    labelClassName="col-md-4"
                    options={props.separatorOptions}
                    onChange={handleChange.bind(props, 'separator')}
                />
                <SelectField
                    id="sltMarkerField"
                    className="col-md-8"
                    label="Marker Label Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'markerLabelField')}
                />
                <SelectField
                    id="sltLatitudeField"
                    className="col-md-8"
                    label="Latitude Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'latitudeField')}
                />
                <SelectField
                    id="sltLongitudeField"
                    className="col-md-8"
                    label="Longitude Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'longitudeField')}
                />
                <SelectField
                    id="sltCityField"
                    className="col-md-8"
                    label="City Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'cityField')}
                />
                <SelectField
                    id="sltCountryField"
                    className="col-md-8"
                    label="Country Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'countryField')}
                />
                <SelectField
                    id="sltStreetField"
                    className="col-md-8"
                    label="Street Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'streetField')}
                />
                <SelectField
                    id="sltPostalCodeField"
                    className="col-md-8"
                    label="Postal Code Column"
                    labelClassName="col-md-4"
                    options={props.columnsOptions}
                    onChange={handleChange.bind(props, 'postalCodeField')}
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

export default connect(null, mapDispatchToProps)(OptionsPanel);
