import AppDispatcher from '../AppDispatcher';
import constants from '../constants'
import ApiUtils from '../api/ApiUtils';

let navActions = constants.NAVIGATION;

let GeneralActionsCreator = {

  login(user, password) {
    AppDispatcher.dispatchAsync(ApiUtils.login(user, password), {
      request: navActions.LOGIN_REQUEST,
      success: navActions.LOGIN_SUCCESS,
      failure: navActions.LOGIN_FAILURE
    });
  },
};

export default GeneralActionsCreator;
