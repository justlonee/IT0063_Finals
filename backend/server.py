from flask import Flask, request, jsonify
import json
import os

gizmoApp = Flask(__name__)
USER_ACCOUNTS = "users.json"
