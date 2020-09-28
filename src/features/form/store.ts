import { KeyObject } from "crypto";
import { AnyAction, Dispatch } from "redux";

const FETCH_REQUESTED = "form/FETCH_FORM_REQUESTED";
const FETCH_FAILURED = "form/FETCH_FORM_FAILURED";
const FETCH_SUCCEEDED = "form/FETCH_FORM_SUCCEEDED";

const SET_SUBMITTED = "form/SET_SUBMITTED";

const intitialState = {
  loading: false,
  submitted: false,
  error: "",
};

export const form = (state = intitialState, { type, payload }: AnyAction) => {
  switch (type) {
    case FETCH_REQUESTED:
      return { ...state, loading: true, submitted: false };
    case FETCH_SUCCEEDED:
      return { ...state, loading: false, submitted: true };
    case FETCH_FAILURED:
      return { ...state, loading: false, error: payload, submitted: false };
    case SET_SUBMITTED:
      return { ...state, submitted: false };
    default:
      return state;
  }
};

const setLoading = () => ({
  type: FETCH_REQUESTED,
});
const setSuccess = () => ({
  type: FETCH_SUCCEEDED,
});
const setError = (payload: string) => ({
  type: FETCH_FAILURED,
  payload,
});

export const setSubmitted = () => ({ type: SET_SUBMITTED });

const fetchFakePromise = (): Promise<{ status: number }> =>
  new Promise((res) => {
    setTimeout(() => {
      res({ status: 200 });
    }, 1000);
  });

export const fetchForm = (values: { [id: string]: string }) => (dispatch: Dispatch) => {
  if (Object.values(values).every((value) => value)) {
    dispatch(setLoading());
    fetchFakePromise()
      .then((res) => {
        if (res.status === 200) {
          dispatch(setSuccess());
        }
      })
      .catch((error) => dispatch(setError(error)));
  } else {
    const keysValues = Object.keys(values).filter((key: string) => !values[key]);
    dispatch(setError(`Есть пустые поля ${keysValues.join(", ")} ${Math.random()}`));
  }
};

export const selector = (state: any) => state.form;
export const getErrorFormSelector = (state: any) => state.form.error;
