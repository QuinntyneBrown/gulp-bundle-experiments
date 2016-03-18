import * as actions from "./copy.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeCopyReducer = (state, action) => {
    if (action instanceof actions.RemoveCopyAction)
        pluckOut({ items: state.copys, value: action.entity.id });
    return state;
}

export const addCopyReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCopyAction) {
        addOrUpdate({ items: state.copys, item: action.entity });
    }
    return state;
}

export const allCopysReducer = (state, action) => {
    if (action instanceof actions.AllCopysAction) {
        state.copys = action.entities;
    }
    return state;
}

export const setCurrentCopyReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCopyAction) {
        state.currentCopyId = action.id;
    }
    return state;
}
