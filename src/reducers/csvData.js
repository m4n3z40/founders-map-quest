import {makeSubStateReducer} from '../utils/shared';
import {IMPORT_CSV_START, IMPORT_CSV_ERROR, IMPORT_CSV_SUCCESS} from '../actions/csvImporter';
import {CSV_OPTIONS_CHANGE} from '../actions/csvImporterOptions';
import {parseCSV} from '../utils/csv';

function makeCsvDataState(loading = false, error = null, csvText = '', csvData = null) {
    return {
        loading,
        error,
        csvText,
        csvData
    };
}

function handleImportCSVStart(state) {
    return makeCsvDataState(true, null, state.csvText, state.csvData);
}

function handleImportCSVError(state, action) {
    return makeCsvDataState(false, action.error, state.csvText, state.csvData);
}

function handleImportCSVSuccess(state, action, {importOptions}) {
    return makeCsvDataState(false, null, action.csv, parseCSV(action.csv, importOptions.separator));
}

function handleImportOptionsChange(state, {options}) {
    return makeCsvDataState(false, null, state.csvText, parseCSV(state.csvText, options.separator));
}

const actionHandlers = [
    [IMPORT_CSV_START, handleImportCSVStart],
    [IMPORT_CSV_ERROR, handleImportCSVError],
    [IMPORT_CSV_SUCCESS, handleImportCSVSuccess],
    [CSV_OPTIONS_CHANGE, handleImportOptionsChange]
];

export default makeSubStateReducer(makeCsvDataState(), actionHandlers);
