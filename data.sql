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

CREATE TABLE projects
(
    id INTEGER,
    title TEXT,
    url TEXT,
    desc TEXT,
    users TEXT
);


SELECT * FROM friends;

DELETE FROM friends WHERE username1=3;

SELECT * FROM profile;


DROP TABLE projects;

DROP TABLE friends;

DROP TABLE profile;

DROP TABLE user;