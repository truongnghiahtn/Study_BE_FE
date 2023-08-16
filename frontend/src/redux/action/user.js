import axios from "axios";
import { service } from "../../util/server";

// load user
export const loadUser = () => async(dispatch) => {
    try {
        dispatch({
            type:  "LoadUserRequest",
        });
        const {data} = await axios.get(`${service}user/getUser`, {withCredentials:true});
        console.log(data);
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