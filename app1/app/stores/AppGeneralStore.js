import AppDispatcher from '../AppDispatcher';
import constants from '../constants';
import {ReduceStore} from 'flux/utils';

class AppGeneralStore extends ReduceStore {
  getInitialState() {
    return {
      userInfo: {}
    };
  }
  reduce(state, action){
    switch (action.type) {
      case constants.NAVIGATION.LOGIN_SUCCESS:
        return Object.assign({}, state.userInfo, action.payload.response);
      default:
        return state;
    }
  }
}
export default new AppGeneralStore(AppDispatcher);
