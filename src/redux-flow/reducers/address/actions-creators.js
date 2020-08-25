import { SUCCESS, FETCHING, ERROR } from "./actions";
import getCep from "../../../services";

export const fetchAddress = cep => async (dispatch, getState) => {
  dispatch({ type: FETCHING })

  try {
    const data = await getCep(cep)
    dispatch({ type: SUCCESS, payload: data })
  } catch(e) {
    dispatch({ 
      type: ERROR,
      payload: {
        ...getState(),
        error: e.message
      }
    })
  }
}