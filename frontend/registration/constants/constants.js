import _noop from 'lodash/noop';

import { INPUT_ACTIONS } from "@/actions/actions";

const PAGE_ACTIONS = {
  [INPUT_ACTIONS.SUBMIT]: () => {
    console.log('submit');
  },
  [INPUT_ACTIONS.CLEAR]: () => {
    console.log('clear');
  },
  [INPUT_ACTIONS.POINT_INPUT]: () => {
    _noop()
  },
  [INPUT_ACTIONS.FILE_SELECT]: id => {
    console.log(`file select ${id}`);
  },
};

export {
  PAGE_ACTIONS
};
