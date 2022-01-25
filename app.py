from flask import Flask
from flask import render_template

app = Flask(__name__)
app.debug = True

@app.route("/")
def get_index():
    return render_template("index.html")

@app.route("/intro")
def get_intro():
    return render_template("intro.html")

@app.route("/upload")
def get_upload():
    return render_template("test.html")    
    
if __name__ == '__main__':
    app.run(debug=True)