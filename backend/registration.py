import numpy as np


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

    def __init__(self, home_pts, other_pts):
        self._home_pts = _format_points(home_pts)
        self._other_pts = _format_points(other_pts)

        # calculate registration
        self._registration()

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
        self._matrix_rot = np.dot(np.transpose(v_mat), np.transpose(u_mat))

        # step 6. calculate the translation
        self._translation = centroid_other - np.dot(self._matrix_rot, centroid_home)

        # step 7. calculate quaternion rotation
        r = np.math.sqrt(1.0 + self._matrix_rot[0, 0] + self._matrix_rot[1, 1] + self._matrix_rot[2, 2]) * 0.5
        self._quaternion_rot = [
            (self._matrix_rot[2, 1] - self._matrix_rot[1, 2]) / (4 * r),  # i
            (self._matrix_rot[0, 2] - self._matrix_rot[2, 0]) / (4 * r),  # j
            (self._matrix_rot[1, 0] - self._matrix_rot[0, 1]) / (4 * r),  # k
            r  # real
        ]



