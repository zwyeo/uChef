drop database if exists appDB;
create database appDB;
use appDB;

create table user (
    email varchar(40) not null primary key,
    username varchar(20) not null,
    password varchar(20) not null
);

create table recipe (
    recipeid int not null primary key,
    userid varchar(40) not null,
    name varchar(40) not null,
    description varchar(1000) not null,
    preptime int not null,
    preptimeunits varchar(40) not null,
    cooktime int not null,
    cooktimeunits varchar(40) not null,
    servingsize int not null,
    calories int not null,
    imagelink varchar(255) not null,
    videolink varchar(255),

    constraint receipe_fk1 foreign key(userid) references user(email)
);

create table tags (
    tagid int not null primary key,
    name varchar(40) not null
);

create table recipetags (
    recipeid int not null,
    tag int not null,

    constraint recipetags_pk primary key(recipeid,tag),
    constraint recipetags_fk1 foreign key(recipeid) references recipe(recipeid),
    constraint recipetags_fk2 foreign key(tag) references tags(tagid)
);

create table ingredients (
    recipeid int not null,
    ingredient varchar(40) not null,
    quantity int not null,
    quantityunits varchar(40) not null,

    constraint ingredients_pk primary key(recipeid,ingredient),
    constraint ingredients_fk1 foreign key(recipeid) references recipe(recipeid)
);

create table equipment (
    recipeid int not null,
    equipment varchar(40) not null,

    constraint equipment_pk primary key(recipeid,equipment),
    constraint equipment_fk1 foreign key(recipeid) references recipe(recipeid)
);

create table bookmarks (
    recipeid int not null,
    userid varchar(40) not null,

    constraint bookmarks_pk primary key(recipeid,userid),
    constraint bookmarks_fk1 foreign key(recipeid) references recipe(recipeid),
    constraint bookmarks_fk2 foreign key(userid) references user(email)
);

create table reviews (
    recipeid int not null,
    userid varchar(40) not null,
    rating int,
    content varchar(1000),

    constraint reviews_pk primary key(recipeid,userid),
    constraint reviews_fk1 foreign key(recipeid) references recipe(recipeid),
    constraint reviews_fk2 foreign key(userid) references user(email)
);

create table userpreferences(
    userid varchar(40) not null,
    tag int not null,
    score int not null,

    constraint userpreferences_pk primary key(userid,tag),
    constraint userpreferences_fk1 foreign key(userid) references user(email),
    constraint userpreferences_fk2 foreign key(tag) references tags(tagid)
);
