export const IMPORT_CSV_START = 'IMPORT_CSV_START';
export const IMPORT_CSV_ERROR = 'IMPORT_CSV_ERROR';
export const IMPORT_CSV_SUCCESS = 'IMPORT_CSV_SUCCESS';

export function startImportingCSV() {
    return {
        type: IMPORT_CSV_START
    };
}

export function errorOnImportingCSV(error) {
    return {
        type: IMPORT_CSV_ERROR,
        error
    };
}

export function successOnImportingCSV(csv) {
    return {
        type: IMPORT_CSV_SUCCESS,
        csv
    };
}
