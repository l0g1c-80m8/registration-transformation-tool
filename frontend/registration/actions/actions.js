import { INITIAL_STATE, INPUT_ACTIONS } from "@/constants/constants";

const getPageActions = (pageState, setPageState) => ({
  [INPUT_ACTIONS.SUBMIT]: () => {
    // read state to get all points
    // validate that the values are correct
    // send a post request to be
    // set the state for output section
    console.log('submit', pageState);
  },
  [INPUT_ACTIONS.CLEAR]: () => {
    // set all keys to empty string values
    setPageState({ ...INITIAL_STATE });
  },
  [INPUT_ACTIONS.POINT_INPUT]: id => event => {
    setPageState({
      ...pageState,
      [id]: event.target.value,
    });
  },
  [INPUT_ACTIONS.FILE_SELECT]: id => event => {
    setPageState({
      ...pageState,
      [id]: event.target.value,
    });
  },
})

export {
  getPageActions
};
