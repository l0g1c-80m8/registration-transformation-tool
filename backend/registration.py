import numpy as np

from collections import namedtuple
from constants import MODES


def _format_points(points_dict):
    return np.array(list(map(
        lambda point: np.reshape(np.array(point), (3, 1)),
        points_dict.values()
    )))


class Registration:
    # input properties
    _home_pts = None
    _other_pts = None
    # output properties
    _translation = None
    _matrix_rot = None
    _quaternion_rot = None
    _euler_rot = None
    _transformation_mat = None
    # types
    EULER_ANGLES = namedtuple('EulerAngles', ['X', 'Y', 'Z'])

    def __init__(self, home_pts, other_pts, mode=MODES.DEFERRED):
        self._home_pts = _format_points(home_pts)
        self._other_pts = _format_points(other_pts)

        # calculate registration
        if mode == MODES.FLUSH:
            self._registration()

    def registration(self):
        self.registration()

    @property
    def transformation_mat(self):
        return self._transformation_mat

    @property
    def matrix_rot(self):
        return self._matrix_rot

    @property
    def quaternion_rot(self):
        return self._quaternion_rot

    @property
    def euler_rot(self):
        return self._euler_rot

    @property
    def translation(self):
        return self._translation

    def _registration(self):
        # https://nghiaho.com/?page_id=671

        # step 1. calculate centroids
        centroid_home = np.add.reduce(self._home_pts) / len(self._home_pts)
        centroid_other = np.add.reduce(self._other_pts) / len(self._other_pts)

        # step 2. translate the points about the centroids
        home_bar = np.transpose(np.reshape(self._home_pts - centroid_home, (4, 3)))
        other_bar = np.reshape(self._other_pts - centroid_other, (4, 3))

        # step 3. construct the H matrix for decomposition
        h_mat = np.dot(home_bar, other_bar)

        # step 4. perform SVD decomposition on the H matrix
        u_mat, s_mat, v_mat = np.linalg.svd(h_mat)

        # step 5. calculate the rotation matrix
        rot = np.dot(np.transpose(v_mat), np.transpose(u_mat))
        self._matrix_rot = rot.tolist()

        # step 6. calculate the translation
        t = centroid_other - np.dot(rot, centroid_home)
        self._translation = t.tolist()

        # extra 7.1. set the rotation matrix
        # print(self._matrix_rot, type(self._matrix_rot), self._translation, type(self._translation))

        # extra 7.2. calculate quaternion rotation
        r = np.math.sqrt(1.0 + rot[0, 0] + rot[1, 1] + rot[2, 2]) * 0.5
        self._quaternion_rot = [
            (rot[2, 1] - rot[1, 2]) / (4 * r),  # i
            (rot[0, 2] - rot[2, 0]) / (4 * r),  # j
            (rot[1, 0] - rot[0, 1]) / (4 * r),  # k
            r  # real
        ]

        # extra 7.3. calculate euler angles
        beta = -np.arcsin(rot[2, 0])
        self._euler_rot = [
            np.arctan2(rot[2, 1] / np.cos(beta), rot[2, 2] / np.cos(beta)),  # alpha
            beta,  # beta
            np.arctan2(rot[1, 0] / np.cos(beta), rot[0, 0] / np.cos(beta))  # gamma
        ]



