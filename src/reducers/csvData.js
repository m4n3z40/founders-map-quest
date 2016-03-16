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

function handleImportCSVSuccess(state, action) {
    return makeCsvDataState(false, null, parseCSV(action.csv));
}

const initialState = makeCsvDataState();

const actionHandlers = new Map([
    [IMPORT_CSV_START, handleImportCSVStart],
    [IMPORT_CSV_ERROR, handleImportCSVError],
    [IMPORT_CSV_SUCCESS, handleImportCSVSuccess]
]);

export default function csvData(state = initialState, action) {
    if (actionHandlers.has(action.type)) {
        return actionHandlers.get(action.type)(state, action);
    }

    return initialState;
}
