from flask import *
from registration import Registration
from constants import APP_NAME, REQ_KEYS, MODES

app = Flask(APP_NAME, static_folder="./")


@app.route("/calculate", methods=["POST"])
def calculate():
    reg = Registration(
        request.json[REQ_KEYS.HOME_FRAME_POINTS],
        request.json[REQ_KEYS.OTHER_FRAME_POINTS],
        MODES.FLUSH
    )

    response = app.response_class(
        response=json.dumps(reg.transformations),
        status=200,
        mimetype='application/json'
    )
    return response
