import os
import datetime
import ast

from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import error, login_required

#export FLASK_ENV=development --> for testing before flask run


# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///teammate.db")


@app.route("/login", methods=["GET", "POST"])
def login():
    """login"""
    #forget any user
    session.clear()
    if request.method == "POST":
        #gather info
        username = request.form.get("username")
        password = request.form.get("password")
        #ensure stuff was put in
        if not username:
            return error("Must Provide a Username", "/login")
        elif not password:
            return error("Must Provide a Password", "/login")
        #make sure valid info
        rows = db.execute("SELECT * FROM user WHERE username=:username", username=username)
        if len(rows) != 1 or not check_password_hash(rows[0]["password"], password):
            return error("Invalid Username and/or Password", "/login")
        #set user_id in session
        session["user_id"] = rows[0]["id"]
        return redirect("/")
    else:
        return render_template("login.html")

@app.route("/register", methods=["GET","POST"])
def register():
    """Register"""
    if request.method == "POST":
        #get info from form
        username = request.form.get("username")
        password = request.form.get("password")
        confirmation = request.form.get("confirmation")
        users = db.execute("SELECT username FROM user")
        #check to make sure info is correct
        if not username:
            return error("Must Provide a Username", "/register")
        elif not password:
            return error("Must Provide a Password", "/register")
        elif password != confirmation:
            return error("Passwords Do Not Match", "/register")
        for x in users:
            for y in x.values():
                if username in y:
                    return error("username already exists", "/register")
        #insert new user into table and store hashed password 
        db.execute("INSERT INTO user (username, password) VALUES (:username, :password)", username=username, password=generate_password_hash(password))
        #set the user id in session
        user_id = db.execute("SELECT id FROM user WHERE username = :username", username=username)[0]["id"]
        session["user_id"] = user_id
        return redirect("/profilePost")
    else:
        return render_template("register.html")
        
@app.route("/logout")
def logout():
    """Logout"""
    #forget user
    session.clear()
    return redirect("/")

@app.route("/")
def index():
    """index"""
    return render_template("index.html")


@app.route("/profilePost", methods=["GET","POST"])
def profilePost():
    """create profile"""
    if request.method == "POST":
        #get all info from form
        username = db.execute("SELECT username FROM user WHERE id=:user_id",user_id=session["user_id"])[0]["username"]
        name = request.form.get("name")
        bio = request.form.get("bio")
        interests1 = request.form.get("interest1")
        interests2 = request.form.get("interest2")
        interests3 = request.form.get("interest3")
        interests4 = request.form.get("interest4")
        if not interests1 or not interests2 or not interests3 or not interests4:
            return error("must provide 4 interests","/profilePost")
        interests = str(interests1)+"#"+str(interests2)+"#"+str(interests3)+"#"+str(interests4)
        skills_all = ["design","html","C","react","java","node","linux","sql","mongodb","js","jquery","Cplusplus","ruby","go","Csharp","PHP","bash","swift"]
        skills=""
        for skill in skills_all:
            if request.form.get(skill) != None:
                if skills == "":
                    skills += request.form.get(skill)
                else:
                    skills += "#" + request.form.get(skill)
        location = request.form.get("location")
        phone = request.form.get("phone")
        email = request.form.get("email")
        info = request.form.get("info")
        #make sure all filled
        if not name or not bio or skills=="" or not location or not phone or not email:
            return error("Requirements Not Satisfied", "/profilePost")
        if not info:
            db.execute("INSERT INTO profile (id, username, name, bio, interests, skills, location, phone, email, info) VALUES (:user_id, :username, :name, :bio, :interests, :skills, :location, :phone, :email, :info);", user_id=session["user_id"], username=username, name=name, bio=bio, interests=interests, skills=skills, location=location, phone=phone, email=email, info=None)
        else:
            db.execute("INSERT INTO profile (id, username, name, bio, interests, skills, location, phone, email, info) VALUES (:user_id, :username, :name, :bio, :interests, :skills, :location, :phone, :email, :info);", user_id=session["user_id"], username=username, name=name, bio=bio, interests=interests, skills=skills, location=location, phone=phone, email=email, info=info)
        return redirect("/profile")
    else:
        return render_template("profilePost.html")

@app.route("/profile", methods=["GET","POST"])
def profile():
    """Show profile"""
    if request.method == "POST":
        #MUST HAVE VALUE OF PERSON WHO WAS CLICKED ON ID (CREATE A HIDDEN INPUT?)
        #if clicked on friend profile
        person_id = request.form.get("person_id")
        row = db.execute("SELECT * FROM profile WHERE id = :user_id", user_id=person_id)
        return render_template("profile.html",row=row)
    else:
        #if going to your own profile
        row = db.execute("SELECT * FROM profile WHERE id = :user_id", user_id=session["user_id"])
        return render_template("profile.html",row=row)

@app.route("/friends")
def friends():
    """Show friends"""
    friends = []
    #check if your username is in the user1 slot
    rows = db.execute("SELECT username2 FROM friends WHERE username2 = :user", user=session["user_id"])
    for row in rows:
        friends.append(row)
    #check if your username is in the user2 slot
    rows2 = db.execute("SELECT username2 FROM friends WHERE username2 = :user", user=session["user_id"])
    for row in rows2:
        friends.append(row)
    return render_template("friends.html", friends=friends)

@app.route("/friendSomeone")
def friendSomeone():
    """Show friends"""
    #do code ...

@app.route("/browse", methods=["POST","GET"])
def browse():
    """Browse other people"""
    if request.method == "POST":
        #means something was searched
        searchVal = request.form.get("searched")
        searchArr = searchVal.split(" ")
        searchArrCopy = searchArr
        #filter out reg words from search Arr
        words = ["i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", 
        "yourself", "yourselves", "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", 
        "its", "itself", "they", "them", "their", "theirs", "themselves", "what", "which", "who", "whom", 
        "this", "that", "these", "those", "am", "is", "are", "was", "were", "be", "been", "being", "have", 
        "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", "but", "if", "or", 
        "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", 
        "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", 
        "out", "on", "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", 
        "where", "why", "how", "all", "any", "both", "each", "few", "more", "most", "other", "some", "such", 
        "no", "nor", "not", "only", "own", "same", "so", "than", "too", "very", "s", "t", "can", "will", 
        "just", "don", "should", "now"]
        #loop through all words in stop words array
        for word in words:
            #if word in the searched items
            if word in searchArr:
                #remove it from the copy
                searchArrCopy.remove(word)
        #define the reg array as the copy array that has been updates
        searchArr = searchArrCopy
        #if there are no searches return all profile
        if len(searchArr) == 0:
            return redirect("/browse")
        #if there are items in the search bar return profiles with matching word stuff
        else:
            #get peoples profile (rows) that correspond with search from profile database
            for val in searchArr:
                rows = []
                rowsTemp = db.execute(
                    "SELECT * FROM profile WHERE username LIKE ('%' || :search || '%') OR bio LIKE ('%' || :search || '%') OR skills LIKE ('%' || :search || '%') OR interestes LIKE ('%' || :search || '%') OR location LIKE ('%' || :search || '%')", search=val)
                for row in rowsTemp:
                    if row not in rows:
                        rows.append(row)
            return render_template("browse.html", rows=rows)
    else:
        #if just clicked on to browse all
        rows = db.execute("SELECT * FROM profile")
        return render_template("browse.html",rows=rows)
