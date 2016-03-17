import {createStore} from 'redux';
import allReducers from '../reducers/all';

export function makeSubStateReducer(initialState, actionHandlers) {
    const actionHandlerMap = new Map(actionHandlers);

    return (state = initialState, action, appState) => {
        if (actionHandlerMap.has(action.type)) {
            return actionHandlerMap.get(action.type)(state, action, appState);
        }

        return state;
    };
}

function appReducer(appState = {}, action) {
    const nextState = Object.assign({}, appState);

    for (const reducerName in allReducers) {
        if (!allReducers.hasOwnProperty(reducerName)) continue;

        const subState = appState[reducerName];

        nextState[reducerName] = allReducers[reducerName](subState, action, appState);
    }

    return nextState;
}

export function getStore(initialState) {
    return createStore(appReducer, initialState);
}
