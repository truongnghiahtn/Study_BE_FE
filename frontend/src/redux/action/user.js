import axios from "axios";
import { service } from "../../util/server";

// load user
// withCredentials dùng để đọc được cookie
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type:  "LoadUserRequest",
        });
        const {data} = await axios.get(`${service}user/getUser`, {withCredentials:true});
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message,
        });
    }
}

// load seller
export const loadSeller = () => async (dispatch) => {
    try {
      dispatch({
        type: "LoadSellerRequest",
      });
      const { data } = await axios.get(`${service}shop/getSeller`, {
        withCredentials: true,
      });
      dispatch({
        type: "LoadSellerSuccess",
        payload: data.seller,
      });
    } catch (error) {
      dispatch({
        type: "LoadSellerFail",
        payload: error.response.data.message,
      });
    }
  };