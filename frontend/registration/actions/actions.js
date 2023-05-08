import { INPUT_ACTIONS } from "@/constants/constants";

const getPageActions = (pageState, setPageState) => ({
  [INPUT_ACTIONS.SUBMIT]: () => {
    console.log('submit');
  },
  [INPUT_ACTIONS.CLEAR]: () => {
    setPageState({});
  },
  [INPUT_ACTIONS.POINT_INPUT]: id => event => {
    setPageState({
      ...pageState,
      [id]: event.target.value,
    });
  },
  [INPUT_ACTIONS.FILE_SELECT]: (id, value) => {
    setPageState({
      ...pageState,
      [id]: value
    });
  },
})

export {
  getPageActions
};
