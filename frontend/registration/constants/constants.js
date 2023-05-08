const INPUT_ACTIONS = {
  POINT_INPUT: 'POINT_INPUT',
  FILE_SELECT: 'FILE_SELECT',
  SUBMIT: 'SUBMIT',
  CLEAR: 'CLEAR'
};

const HOME_POINTS_ID_PREFIX = 'home_points';
const OTHER_POINTS_ID_PREFIX = 'other_points';
const HOME_POINTS_TITLE = 'Home';
const OTHER_POINTS_TITLE = 'Home';

const INITIAL_STATE = {
  [`${HOME_POINTS_ID_PREFIX}_1_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_1_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_1_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_x`]: '',
};

export {
  INPUT_ACTIONS,
  HOME_POINTS_ID_PREFIX,
  OTHER_POINTS_ID_PREFIX,
  HOME_POINTS_TITLE,
  OTHER_POINTS_TITLE,
  INITIAL_STATE,
};