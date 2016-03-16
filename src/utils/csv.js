export const CSV_SEPARATOR_TAB = Symbol.for('csv_separator_tab');
export const CSV_SEPARATOR_SEMICOLON = Symbol.for('csv_separator_semicolon');
export const CSV_SEPARATOR_COMMA = Symbol.for('csv_separator_comma');

export const CSVSeparatorMap = new Map([
    [CSV_SEPARATOR_TAB, '\t'],
    [CSV_SEPARATOR_SEMICOLON, ';'],
    [CSV_SEPARATOR_COMMA, ',']
]);

function trim(str) {
    return str.trim();
}

export function parseCSVAsMatrix(CSV, separator = CSV_SEPARATOR_COMMA) {
    const separatorChar = CSVSeparatorMap.get(separator);

    function breakColumns(line) {
        return line.split(separatorChar).map(trim);
    }

    return trim(CSV)
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(breakColumns);
}

export function parseCSV(CSV, separator = CSV_SEPARATOR_COMMA) {
    const CSVMatrix = parseCSVAsMatrix(CSV, separator);

    return {
        header: CSVMatrix[0],
        body: CSVMatrix.slice(1)
    };
}
