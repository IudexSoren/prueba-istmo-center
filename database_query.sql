-- DATABASE
CREATE DATABASE istmo;

USE istmo;


-- TABLES

CREATE TABLE IF NOT EXISTS address (
	zipcode varchar(9) NOT NULL,
    street varchar(200) NOT NULL,
    suite varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    PRIMARY KEY (zipcode),
    UNIQUE(zipcode)
);

CREATE TABLE IF NOT EXISTS `user` (
	id int auto_increment NOT NULL,
    name varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    address varchar(9) NOT NULL,
    phone varchar(100) NOT NULL,
    website varchar(1000),
    PRIMARY KEY (id),
    FOREIGN KEY (address) REFERENCES address (zipcode)
);

CREATE TABLE IF NOT EXISTS company (
	id int auto_increment NOT NULL,
    name varchar(50) NOT NULL,
    catchphrase varchar(200) NOT NULL,
    bs varchar(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS company_user (
    idcompany int NOT NULL,
    iduser int NOT NULL,
	PRIMARY KEY (idcompany, iduser),
    FOREIGN KEY (idcompany) REFERENCES company (id),
    FOREIGN KEY (iduser) REFERENCES `user` (id)
);


-- STORED PROCEDURES

DELIMITER //
CREATE PROCEDURE `SP_ReadCompanyUsers`(
	idcompany int
)
BEGIN
	SELECT u.id, u.name, u.username, u.email, u.address, u.phone, u.website 
    FROM `user` u INNER JOIN company_user cu ON u.id = cu.iduser
    WHERE cu.idcompany = idcompany;
END //

DELIMITER //
CREATE PROCEDURE `SP_ReadCompanies`()
BEGIN
	SELECT id, name, catchphrase, bs
    FROM company;
END //

DELIMITER //
CREATE PROCEDURE `SP_ReadAddress`(
	zipcode varchar(9)
)
BEGIN
	SELECT a.zipcode, a.street, a.suite, a.city
    FROM address a
    WHERE a.zipcode = zipcode;
END //


-- INSERTS

-- Address
INSERT INTO address (zipcode, street, suite, city) 
VALUES ('929983874', 'Kulas Light', 'Apt. 556', 'Gwenborough');
INSERT INTO address (zipcode, street, suite, city) 
VALUES ('405667778', 'Victor Plains', 'Suite 879', 'Wisokyburgh');
INSERT INTO address (zipcode, street, suite, city) 
VALUES ('998035694', '9400 Glacier Hwy', 'Suite 1', 'Juneau');
INSERT INTO address (zipcode, street, suite, city) 
VALUES ('607942383', '600 E. Northern Lights BLVD. #E', 'Sears Mall', 'Anchorage');
INSERT INTO address (zipcode, street, suite, city) 
VALUES ('844305421', '4419 Rangeline RD', 'STE D', 'Monroeville');

-- Users
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Donald Trump', 'Trump2024', 'donaldjtrump@email.com', '929983874', '5-567-374-9039 x45930', 'donaldjtrump.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Joe Biden', 'SleepyJoeBiden', 'sleepyjoe@email.com', '405667778', '6-643-275-5638 x74534', 'sleepyjoe.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Leanne Graham', 'Bret', 'Sincere@april.biz', '929983874', '1-770-736-8031 x56442', 'hildegard.org');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Ervin Howell', 'Antonette', 'shanna@melissa.tv', '405667778', '010-692-6593 x09125', 'anastasia.net');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Danny Worsnop', 'DannyW', 'dannyworsnop@email', '998035694', '653-357-9032 x63452', 'dannyworsnop.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('David Santos', 'DavidS', 'davids@email.com', '607942383', '674-125-9790 x23530', 'davidsantos.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Lupe Batallan', 'LupBat', 'lupbat@email.com', '844305421', '9-845-890-0980 x26320', 'lupbat.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Agustin Laje', 'agustinlaje', 'agustinlaje@email.com', '607942383', '8-374-120-3252 x76532', 'agustinlaje.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Thomas Sowell', 'thomassowell', 'thomassowell@email.com', '607942383', '967-006-3462 x63464', 'thomassowell.com');
INSERT INTO `user` (name, username, email, address, phone, website)
VALUES ('Ludwig Von Mises', 'mises', 'mises@email.com', '998035694', '783-845-0743 x05531', 'mises.org');

-- Company
INSERT INTO company (name, catchphrase, bs)
VALUES ('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');
INSERT INTO company (name, catchphrase, bs)
VALUES ('CocaCola', 'Taste the Feeling', 'drink sweet soda');

-- Company_User
INSERT INTO company_user (idcompany, iduser)
VALUES (1, 1);
INSERT INTO company_user (idcompany, iduser)
VALUES (1, 3);
INSERT INTO company_user (idcompany, iduser)
VALUES (1, 4);
INSERT INTO company_user (idcompany, iduser)
VALUES (1, 6);
INSERT INTO company_user (idcompany, iduser)
VALUES (1, 7);
INSERT INTO company_user (idcompany, iduser)
VALUES (2, 2);
INSERT INTO company_user (idcompany, iduser)
VALUES (2, 5);
INSERT INTO company_user (idcompany, iduser)
VALUES (2, 8);
INSERT INTO company_user (idcompany, iduser)
VALUES (2, 9);
INSERT INTO company_user (idcompany, iduser)
VALUES (2, 10);







