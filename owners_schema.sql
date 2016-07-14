CREATE DATABASE owner_db;

USE owner_db;

CREATE TABLE owners
(
	id int NOT NULL AUTO_INCREMENT,
	ownUser varchar(12) NOT NULL,
    ownEmail varchar(30) NOT NULL,
    ownPswd varchar(30) NOT NULL,
    ownType varchar(30) NOT NULL,
    ownBus varchar(45) NOT NULL,
    ownSize varchar(15) NOT NULL,
	PRIMARY KEY (id)
);