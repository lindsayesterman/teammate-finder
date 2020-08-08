CREATE TABLE user
(
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
);

CREATE TABLE profile
(
    id INTEGER,
    username TEXT,
    name TEXT,
    bio TEXT,
    interests TEXT,
    skills TEXT,
    location TEXT,
    phone TEXT,
    email TEXT,
    info TEXT
);

CREATE TABLE friends
(
    username1 TEXT,
    username2 TEXT
);
