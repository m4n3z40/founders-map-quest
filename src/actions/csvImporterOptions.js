export const CSV_OPTIONS_CHANGE = 'CSV_OPTIONS_CHANGE';

export function changeOptions(nextOptions) {
    return {
        type: CSV_OPTIONS_CHANGE,
        options: nextOptions
    };
}
