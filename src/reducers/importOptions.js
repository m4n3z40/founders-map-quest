import {makeSubStateReducer} from '../utils/shared';
import {CSV_OPTIONS_CHANGE} from '../actions/csvImporterOptions';
import {CSV_SEPARATOR_COMMA} from '../utils/csv';

function makeImportOptionsState({separator = CSV_SEPARATOR_COMMA} = {}) {
    return {
        separator
    };
}

function handleOptionsChange(state, action) {
    return makeImportOptionsState(Object.assign({}, state, action.options));
}

const actionHandlers = [
    [CSV_OPTIONS_CHANGE, handleOptionsChange]
];

export default makeSubStateReducer(makeImportOptionsState(), actionHandlers);
