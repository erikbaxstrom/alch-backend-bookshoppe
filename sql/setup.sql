-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors CASCADE;

CREATE TABLE authors (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    dob DATE,
    pob VARCHAR
);

INSERT INTO 
    authors (name, dob, pob)
VALUES
-- ('Namy Name', 'YYYY-MM-DD', 'Somewhere, USA'),
('Leigh Bardugo', '1975-04-06', 'Jerusalem, Israel'),
('Julie Kagawa', '1982-10-12', 'Sacramento, CA, United States'),
('Robert C. Martin', '1952-12-04', 'United States'),
('Cathy ONeill', NULL, NULL),
('Frank Herbert', '1920-10-08', 'Tacoma, WA, United States');
