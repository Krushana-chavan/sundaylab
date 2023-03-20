import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
// import { storeData_LC } from "../../components/LocalStorage";
import * as types from "./actionTypes";
const token=localStorage.getItem("token")
export const GetAllPost= (e) => (dispatch) => {
  // dispatch({ type: SIGNUP_LOODING_REQUEST });
  return axios
    .get(`https://sundaylabinsta.onrender.com/post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log(response,"reee")
      return dispatch({
        type:types.GET_USER_POST,
        payload: response.data,
      });
    })
    .catch(function (error) {
      const { response } = error;
   
    
    });
};

export const CreateUserPost=(data)=>async(dispatch)=>{
  dispatch({type:types.POST_USERPOST_REQUEST});
  // const res=await fetch("https://sundaylabinsta.onrender.com/post/createpost",{
  //   method:"POST",
  //   headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body:data
  // })
  // const dat=await res.json()
  // console.log(dat)
  return axios.post(`https://sundaylabinsta.onrender.com/post/createpost`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res)=>{
    console.log(res)
  }).catch(err=>console.log(err))
}