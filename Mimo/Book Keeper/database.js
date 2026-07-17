const Database = require('better-sqlite3');
const db = new Database('/tmp/books.db');

db.exec(`
CREATE TABLE IF NOT EXISTS books(
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT NOT NULL,
author TEXT NOT NULL,
year INTEGER)
`);

db.exec(`
INSERT INTO books(title, author) VALUES 
('Physics', 'HC Verma'),
('Mathematics', 'RS Agarwal'),
('Metamorphosis', 'Franz Kafka')
`);

db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      book_id INTEGER NOT NULL,
      content TEXT NOT NULL,
      FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
    )
`);

db.exec(`
INSERT INTO notes(book_id, content) VALUES
(1, 'Every force has an equal and opposite reaction'),
(2, 'Every circle is an ellipse'),
(3, 'I dont know whatshappening to me')
`);

module.exports = db;

