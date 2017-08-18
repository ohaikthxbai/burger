CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
    id int not null auto_incremen,
    burger_name varchar(255) not null,
    devoured boolean not null,
    date timestamp not null, 
    primary key(id)
)