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
    city_name TEXT,
    trip_user_id INTEGER,
    from_date DATE,
    to_date DATE

);

CREATE TABLE IF NOT EXISTS summary (
    id SERIAL PRIMARY KEY,
    trips_id INTEGER,
    day TEXT,
    time TIME,
    attraction TEXT
);

CREATE TABLE IF NOT EXISTS wishlist (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    attraction_name TEXT,
    trip_id INTEGER
);

