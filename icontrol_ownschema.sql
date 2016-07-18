CREATE DATABASE icontrol_db;

USE icontrol_db;

CREATE TABLE owners
(
	id int NOT NULL AUTO_INCREMENT,
	ownUser varchar(12) NOT NULL,
    ownEmail varchar(30) NOT NULL,
    ownPswd varchar(30) NOT NULL,
	PRIMARY KEY (id)
);