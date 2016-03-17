export const CSV_SEPARATOR_TAB = '\t';
export const CSV_SEPARATOR_SEMICOLON = ';';
export const CSV_SEPARATOR_COMMA = ',';

export const CSVSeparatorList = [
    CSV_SEPARATOR_TAB,
    CSV_SEPARATOR_SEMICOLON,
    CSV_SEPARATOR_COMMA
];

export const CSVSeparatorNameMap = new Map([
    [CSV_SEPARATOR_TAB, 'tab'],
    [CSV_SEPARATOR_SEMICOLON, 'semicolon'],
    [CSV_SEPARATOR_COMMA, 'comma']
]);

export function getSeparatorsAsSelectFieldOptions() {
    return CSVSeparatorList.map(separator => ({
        value: separator,
        text: CSVSeparatorNameMap.get(separator)
    }));
}

function trim(str) {
    return str.trim();
}

export function parseCSVAsMatrix(CSV, separator = CSV_SEPARATOR_COMMA) {
    function breakColumns(line) {
        return line.split(separator).map(trim);
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
