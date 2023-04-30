from flask import *
from registration import Registration
from constants import MODES

app = Flask(__name__, static_folder="./")


@app.route("/calculate", methods=["POST"])
def calculate():
    reg = Registration(request.json['home_pts'], request.json['other_pts'], MODES.FLUSH)

    response = app.response_class(
        response=json.dumps(reg.transformation_mat),
        status=200,
        mimetype='application/json'
    )
    return response
