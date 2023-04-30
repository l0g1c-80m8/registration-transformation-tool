from argparse import Namespace

MODES = Namespace(
    FLUSH='FLUSH',
    DEFERRED='DEFERRED'
)

REQ_KEYS = Namespace(
    HOME_FRAME_POINTS='home_pts',
    OTHER_FRAME_POINTS='other_pts'
)

RESP_KEYS = Namespace(
    ROTATION_MATRIX='rotation_matrix',
    TRANSLATION='translation',
    TRANSFORMATION_MATRIX='transformation_matrix',
    QUATERNION_ROTATION='quaternion_rotation',
    EULER_ROTATION='euler_rotation'
)
