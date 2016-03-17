export const DATA_TABLE_ROW_STATUS_CHANGED = 'DATA_TABLE_ROW_STATUS_CHANGED';
export const DATA_TABLE_ORDER_BY_CHANGED = 'DATA_TABLE_ORDER_BY_CHANGED';

export function changeRowStatus(rowIndex, disabled) {
    return {
        type: DATA_TABLE_ROW_STATUS_CHANGED,
        rowIndex,
        disabled
    };
}

export function changeOrderBy(columnName, inverted) {
    return {
        type: DATA_TABLE_ORDER_BY_CHANGED,
        columnName,
        inverted
    };
}
