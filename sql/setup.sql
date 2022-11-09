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


DROP TABLE IF EXISTS books CASCADE;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title VARCHAR NOT NULL,
    released INT NOT NULL
);

INSERT INTO 
    books (title, released)
VALUES
('Clean Code', 2008),
('Clean Architecture', 2017),
('Weapons of Math Destruction', 2016),
('Dune', 1965),
('Dune: Messiah', 1969),
('Children of Dune', 1976),
('Shadow and Bone', 2012),
('Seige and Storm', 2013),
('Ruin and Rising', 2014),
('Shadow of the Fox', 2018),
('Soul of the Sword', 2019),
('Night of the Dragon', 2020),
('Six of Crows', 2015),
('Crooked Kingdom', 2016);


DROP TABLE IF EXISTS authors_books;

CREATE TABLE authors_books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    author_id BIGINT NOT NULL,
    book_id BIGINT NOT NULL
);

INSERT INTO 
    authors_books (author_id, book_id)
VALUES 
(1, 7),
(1,8),
(1,9),
(1,13),
(1,14),
(2,10),
(2,11),
(2,12),
(3,1),
(3,2),
(4,3),
(5,4),
(5,5),
(5,6);

