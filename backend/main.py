from flask import *
from flask_cors import cross_origin
from registration import Registration

from constants import APP_NAME, MODES, REQ_KEYS

app = Flask(APP_NAME, static_folder="./")


@app.route("/calculate", methods=["POST"])
@cross_origin()
def calculate():
    reg = Registration(
        request.json[REQ_KEYS.HOME_FRAME_POINTS],
        request.json[REQ_KEYS.OTHER_FRAME_POINTS],
        MODES.FLUSH
    )

    try:
        response = app.response_class(
            response=json.dumps(reg.transformations),
            status=200,
            mimetype='application/json'
        )
    except Exception as e:
        response = app.response_class(status=500)

    return response
