import {makeSubStateReducer} from '../utils/shared';
import {IMPORT_CSV_START, IMPORT_CSV_ERROR, IMPORT_CSV_SUCCESS} from '../actions/csvImporter';
import {parseCSV} from '../utils/csv';

function makeCsvDataState(loading = false, error = null, csvDataArray = null) {
    return {
        loading,
        error,
        csvData: csvDataArray
    };
}

function handleImportCSVStart(state) {
    return makeCsvDataState(true, null, state.csvData);
}

function handleImportCSVError(state, action) {
    return makeCsvDataState(false, action.error, state.csvData);
}

function handleImportCSVSuccess(state, action, appState) {
    const separator = appState.importOptions ? appState.importOptions.separator : undefined;

    return makeCsvDataState(false, null, parseCSV(action.csv, separator));
}

const actionHandlers = [
    [IMPORT_CSV_START, handleImportCSVStart],
    [IMPORT_CSV_ERROR, handleImportCSVError],
    [IMPORT_CSV_SUCCESS, handleImportCSVSuccess]
];

export default makeSubStateReducer(makeCsvDataState(), actionHandlers);
