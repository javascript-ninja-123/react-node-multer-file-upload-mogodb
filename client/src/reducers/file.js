import {
  POST_A_FILE,
  POST_A_FILE_FUFILLED
} from '../actions/type';


export default (state = [],action) => {
  switch(action.type){
    case POST_A_FILE:
    console.log('posting')
    case POST_A_FILE_FUFILLED:
    console.log(action.payload)
    default:
    return state;
  }
}
