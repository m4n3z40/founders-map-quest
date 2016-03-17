import {makeSubStateReducer} from '../utils/shared';
import {DATA_TABLE_ROW_STATUS_CHANGED, DATA_TABLE_ORDER_BY_CHANGED} from '../actions/dataTable';

function makeDataTableOptionsState(disabledRows = [], orderBy = '', orderByInverted = false) {
    return {
        disabledRows,
        orderBy,
        orderByInverted
    };
}

function handleRowStatusChange(state, action) {
    const {disabledRows} = state;
    const {rowIndex} = action;
    const nextDisabledRows = action.disabled ?
    [
        ...disabledRows,
        rowIndex
    ] :
    disabledRows.filter(idx => idx !== rowIndex);

    return makeDataTableOptionsState(nextDisabledRows, state.orderBy, state.orderByInverted);
}

function handleOrderByChange(state, action) {
    return makeDataTableOptionsState(state.disabledRows, action.columnName, action.inverted);
}

const actionHandlers = [
    [DATA_TABLE_ROW_STATUS_CHANGED, handleRowStatusChange],
    [DATA_TABLE_ORDER_BY_CHANGED, handleOrderByChange]
];

export default makeSubStateReducer(makeDataTableOptionsState(), actionHandlers);
