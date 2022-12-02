import { createAction } from '@reduxjs/toolkit';

const storeHelper = {
  createThunk(actionType, payloadCreator) {
    const actionPending = createAction(`${actionType}/pending`);
    const actionSuccess = createAction(`${actionType}/success`);
    const actionError = createAction(`${actionType}/error`);

    const actionCreator = (...args) => {
      return async (dispatch, getState) => {
        await payloadCreator.apply(null, [
          {
            dispatch,
            getState,
            actionPending,
            actionSuccess,
            actionError,
          },
          ...args,
        ]);
      };
    };

    return Object.assign(actionCreator, {
      pending: actionPending,
      error: actionError,
      success: actionSuccess,
    });
  },
  getStateAsArray(state) {
    return Object.values(state);
  },
};

export default storeHelper;
