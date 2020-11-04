import { combineReducers, createStore } from 'redux';
import login from '../redux/reducers/login';
import register from '../redux/reducers/register';


// export default function createReducer(asyncReducers) {
//     return combineReducers({
//       login,
//       register,
//       ...asyncReducers,
//     });
//   }
const reducers=combineReducers({
  login,
  register
});


export default ()=>{
  return {
    ...createStore(reducers)
  }
}