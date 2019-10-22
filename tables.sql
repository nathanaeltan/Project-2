CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT,
    username TEXT,
    password TEXT
 
);

CREATE TABLE IF NOT EXISTS trips (
    id SERIAL PRIMARY KEY,
    trip_name TEXT,
    trip_user_id INTEGER
);

CREATE TABLE IF NOT EXISTS wishlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    attraction_id INTEGER
);

