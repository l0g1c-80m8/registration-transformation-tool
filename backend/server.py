from flask import *
from registration import Registration

app = Flask(__name__, static_folder="./")


@app.route("/calculate", methods=["POST"])
def calculate():
    reg = Registration(request.json['home_pts'], request.json['other_pts'])

    response = app.response_class(
        response=json.dumps(reg.matrix_rot),
        status=200,
        mimetype='application/json'
    )
    return response
