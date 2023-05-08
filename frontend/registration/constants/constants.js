const INPUT_ACTIONS = {
  POINT_INPUT: 'POINT_INPUT',
  FILE_SELECT: 'FILE_SELECT',
  SUBMIT: 'SUBMIT',
  CLEAR: 'CLEAR'
};

const HOME_POINTS_ID_PREFIX = 'home_pts';
const OTHER_POINTS_ID_PREFIX = 'other_pts';
const HOME_POINTS_TITLE = 'Home';
const OTHER_POINTS_TITLE = 'Home';
const OUTPUT_SECTION_ID = 'output-section'

const INITIAL_STATE = {
  [`${HOME_POINTS_ID_PREFIX}_1_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_1_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_1_z`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_2_z`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_3_z`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_x`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_y`]: '',
  [`${HOME_POINTS_ID_PREFIX}_4_z`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_1_z`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_2_z`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_3_z`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_x`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_y`]: '',
  [`${OTHER_POINTS_ID_PREFIX}_4_z`]: '',
  [OUTPUT_SECTION_ID]: '',
};

// const INITIAL_STATE = {
//   [`${HOME_POINTS_ID_PREFIX}_1_x`]: 472.2,
//   [`${HOME_POINTS_ID_PREFIX}_1_y`]:  -594.3,
//   [`${HOME_POINTS_ID_PREFIX}_1_z`]: 142.7,
//   [`${HOME_POINTS_ID_PREFIX}_2_x`]: 513.2,
//   [`${HOME_POINTS_ID_PREFIX}_2_y`]: -529.2,
//   [`${HOME_POINTS_ID_PREFIX}_2_z`]: 144.4,
//   [`${HOME_POINTS_ID_PREFIX}_3_x`]: 514.8,
//   [`${HOME_POINTS_ID_PREFIX}_3_y`]: -373.6,
//   [`${HOME_POINTS_ID_PREFIX}_3_z`]: 138.3,
//   [`${HOME_POINTS_ID_PREFIX}_4_x`]: 476.7,
//   [`${HOME_POINTS_ID_PREFIX}_4_y`]: -373.5,
//   [`${HOME_POINTS_ID_PREFIX}_4_z`]: 134.9,
//   [`${OTHER_POINTS_ID_PREFIX}_1_x`]: 0,
//   [`${OTHER_POINTS_ID_PREFIX}_1_y`]: 1016,
//   [`${OTHER_POINTS_ID_PREFIX}_1_z`]: -0.98,
//   [`${OTHER_POINTS_ID_PREFIX}_2_x`]: 50.8,
//   [`${OTHER_POINTS_ID_PREFIX}_2_y`]: 955.98,
//   [`${OTHER_POINTS_ID_PREFIX}_2_z`]: 1.14,
//   [`${OTHER_POINTS_ID_PREFIX}_3_x`]: 208.21,
//   [`${OTHER_POINTS_ID_PREFIX}_3_y`]: 955.77,
//   [`${OTHER_POINTS_ID_PREFIX}_3_z`]: -4.77,
//   [`${OTHER_POINTS_ID_PREFIX}_4_x`]: 208.21,
//   [`${OTHER_POINTS_ID_PREFIX}_4_y`]: 1016,
//   [`${OTHER_POINTS_ID_PREFIX}_4_z`]: -6.9,
//   [OUTPUT_SECTION_ID]: '',
// };

export {
  INPUT_ACTIONS,
  HOME_POINTS_ID_PREFIX,
  OTHER_POINTS_ID_PREFIX,
  HOME_POINTS_TITLE,
  OTHER_POINTS_TITLE,
  OUTPUT_SECTION_ID,
  INITIAL_STATE,
};