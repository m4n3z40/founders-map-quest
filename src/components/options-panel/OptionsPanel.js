import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';
import {changeOptions} from '../../actions/csvImporterOptions';
import {arrayRowAsSelectFieldOptions} from '../../utils/csv';
import SelectField from './SelectField';

function handleChange(field, {value}) {
    this.onChange({[field]: value});
}

function mapStateToProps({importOptions, csvData: {tableData}}) {
    return {
        importOptions,
        columnsOptions: tableData ? arrayRowAsSelectFieldOptions(tableData.header) : null
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onChange(nextOptions) {
            dispatch(changeOptions(nextOptions));
        }
    };
}

function renderColumnConfigOptions(parentProps) {
    const disabled = !parentProps.columnsOptions || parentProps.columnsOptions.length === 0;

    return (
        <div>
            <SelectField
                id="sltMarkerField"
                className="col-md-8"
                label="Marker Label Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'markerLabelField')}
            />
            <SelectField
                id="sltLatitudeField"
                className="col-md-8"
                label="Latitude Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'latitudeField')}
            />
            <SelectField
                id="sltLongitudeField"
                className="col-md-8"
                label="Longitude Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'longitudeField')}
            />
            <SelectField
                id="sltCityField"
                className="col-md-8"
                label="City Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'cityField')}
            />
            <SelectField
                id="sltCountryField"
                className="col-md-8"
                label="Country Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'countryField')}
            />
            <SelectField
                id="sltStreetField"
                className="col-md-8"
                label="Street Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'streetField')}
            />
            <SelectField
                id="sltPostalCodeField"
                className="col-md-8"
                label="Postal Code Column"
                labelClassName="col-md-4"
                disabled={disabled}
                options={parentProps.columnsOptions}
                onChange={handleChange.bind(parentProps, 'postalCodeField')}
            />
        </div>
    );
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
                    value={props.importOptions.separator}
                    onChange={handleChange.bind(props, 'separator')}
                />
                {renderColumnConfigOptions(props)}
            </div>
        </div>
    );
}

OptionsPanel.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    importOptions: PropTypes.object.isRequired,
    separatorOptions: PropTypes.arrayOf(PropTypes.object),
    columnsOptions: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, mapDispatchToProps)(OptionsPanel);
