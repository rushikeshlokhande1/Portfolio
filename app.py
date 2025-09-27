from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/resume')
def resume():
    return send_from_directory('static', 'Rushikesh_lokhande_Final_Resume.pdf')

@app.route('/certificates/<filename>')
def certificates(filename):
    return send_from_directory('static/certificates', filename)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))  # use PORT from environment
    app.run(host="0.0.0.0", port=port)


