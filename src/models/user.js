import {createModel} from '@rematch/core'; 

export const user = createModel()({
  state: {
    userDetails: null,
  },
  reducers: {
    setUserDetail(state, userDetails) {
      return {...state, userDetails: userDetails};
    },
  },

  effects: dispatch => ({
    
  }),
});
