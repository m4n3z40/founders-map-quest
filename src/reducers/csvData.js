import {makeSubStateReducer} from '../utils/shared';
import {IMPORT_CSV_START, IMPORT_CSV_ERROR, IMPORT_CSV_SUCCESS} from '../actions/csvImporter';
import {CSV_OPTIONS_CHANGE} from '../actions/csvImporterOptions';
import {parseCSV} from '../utils/csv';

function makeCsvDataState(loading = false, error = null, textData = '', tableData = null) {
    return {
        loading,
        error,
        textData,
        tableData
    };
}

function handleImportCSVStart(state) {
    return makeCsvDataState(true, null, state.textData, state.tableData);
}

function handleImportCSVError(state, action) {
    return makeCsvDataState(false, action.error, state.textData, state.tableData);
}

function handleImportCSVSuccess(state, action, {importOptions}) {
    const tableData = parseCSV(action.csv, importOptions.separator);

    return makeCsvDataState(false, null, action.csv, tableData);
}

function handleImportOptionsChange(state, {options}) {
    let tableData = null;

    if (state.textData) {
        tableData = parseCSV(state.textData, options.separator);
    }

    return makeCsvDataState(false, null, state.textData, tableData);
}

const actionHandlers = [
    [IMPORT_CSV_START, handleImportCSVStart],
    [IMPORT_CSV_ERROR, handleImportCSVError],
    [IMPORT_CSV_SUCCESS, handleImportCSVSuccess],
    [CSV_OPTIONS_CHANGE, handleImportOptionsChange]
];

export default makeSubStateReducer(makeCsvDataState(), actionHandlers);
