import {
  POST_A_FILE,
  POST_A_FILE_FUFILLED
} from './type';



export const uploadFile = file => (
  {
    type:POST_A_FILE,
    payload:file
  }
)

export const uploadFileFufilled = res => (
  {
    type:POST_A_FILE_FUFILLED,
    payload:res
  }
)
