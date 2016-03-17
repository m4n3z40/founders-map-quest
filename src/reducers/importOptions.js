import {makeSubStateReducer} from '../utils/shared';
import {CSV_OPTIONS_CHANGE} from '../actions/csvImporterOptions';
import {CSV_SEPARATOR_COMMA} from '../utils/csv';

function makeImportOptionsState(fromState = {}) {
    return {
        separator: fromState.separator || CSV_SEPARATOR_COMMA,
        markerLabelField: fromState.markerLabelField,
        latitudeField: fromState.latitudeField,
        longitudeField: fromState.longitudeField,
        cityField: fromState.cityField,
        countryField: fromState.countryField,
        streetField: fromState.streetField,
        postalCodeField: fromState.postalCodeField
    };
}

function handleOptionsChange(state, action) {
    return makeImportOptionsState(Object.assign(
        {separator: CSV_SEPARATOR_COMMA},
        state,
        action.options
    ));
}

const actionHandlers = [
    [CSV_OPTIONS_CHANGE, handleOptionsChange]
];

export default makeSubStateReducer(makeImportOptionsState(), actionHandlers);
