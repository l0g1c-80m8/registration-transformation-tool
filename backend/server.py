from flask import *
from registration import Registration
from constants import REQ_KEYS, MODES

app = Flask(__name__, static_folder="./")


@app.route("/calculate", methods=["POST"])
def calculate():
    reg = Registration(
        request.json[REQ_KEYS.HOME_FRAME_POINTS],
        request.json[REQ_KEYS.OTHER_FRAME_POINTS],
        MODES.FLUSH
    )

    response = app.response_class(
        response=json.dumps(reg.transformation_mat),
        status=200,
        mimetype='application/json'
    )
    return response
