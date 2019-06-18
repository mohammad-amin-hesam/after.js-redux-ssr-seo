import axios from "axios";

export const FETCH_TEST = "fetch_test";
export const fetchTest = () => async dispatch => {
  const res = await axios.post("http://server1.onmiz.org:8080/login", {
    mobile: "guest",
    code: "+98",
    password: "1"
  });
  const _res = await axios.request(
    "http://server1.onmiz.org:8080/services/5b8510d7e138230181c194b6",
    {
      method: "get",
      params: {
        token: res.data.token
      }
    }
  );

  dispatch({
    type: FETCH_TEST,
    payload: _res.data.data.item
  });
};
