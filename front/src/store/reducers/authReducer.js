import { LOGIN } from "../actions/authActions";
import { authItems } from "../initialValues/authItems";

// const initialValue = {
//   authItems,
// };

function authReducer(state={}, { type, payload }) {
  
  switch (type) {
    case LOGIN:
      return {
        ...state,
        authItems:{
          ...payload,
          isLogin:true
        }
      };

    default:
      return { ...state };
  }
}

export default authReducer;
