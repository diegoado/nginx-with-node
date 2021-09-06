CREATE TABLE IF NOT EXISTS people (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name CHAR(30) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=InnoDB CHARSET=utf8mb4;

INSERT INTO people (name) VALUES 
    ('Diego'), ('Wesley'), ('Maria'),
    ('Roberto'), ('Julia'), ('Karla');