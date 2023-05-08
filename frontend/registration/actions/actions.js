import _get from 'lodash/get';
import _toNumber from 'lodash/toNumber';

import { fetchTransformation } from "@/service/api";

import {
  INITIAL_STATE,
  INPUT_ACTIONS,
  HOME_POINTS_ID_PREFIX,
  OTHER_POINTS_ID_PREFIX,
  OUTPUT_SECTION_ID
} from "@/constants/constants";

const getPageActions = (pageState, setPageState) => ({
  [INPUT_ACTIONS.SUBMIT]: async () => {
    const payload = {
      [HOME_POINTS_ID_PREFIX]: {
        'pt1': [
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_0_x`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_0_y`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_0_z`, null))
        ],
        'pt2': [
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_1_x`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_1_y`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_1_z`, null))
        ],
        'pt3': [
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_2_x`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_2_y`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_2_z`, null))
        ],
        'pt4': [
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_3_x`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_3_y`, null)),
          _toNumber(_get(pageState, `${HOME_POINTS_ID_PREFIX}_4_z`, null))
        ],
      },
      [OTHER_POINTS_ID_PREFIX]: {
        'pt1': [
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_0_x`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_0_y`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_0_z`, null))
        ],
        'pt2': [
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_1_x`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_1_y`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_1_z`, null))
        ],
        'pt3': [
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_2_x`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_2_y`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_2_z`, null))
        ],
        'pt4': [
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_3_x`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_3_y`, null)),
          _toNumber(_get(pageState, `${OTHER_POINTS_ID_PREFIX}_4_z`, null))
        ],
      }
    };
    // validate that the values are correct
    const response = await fetchTransformation(payload);
    console.log(response);
    setPageState({
      ...pageState,
      [OUTPUT_SECTION_ID]: JSON.stringify(_get(response, 'data', ['no response']))
    })
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
