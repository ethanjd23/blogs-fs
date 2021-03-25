CREATE TABLE Authors (
	id int auto_increment,
    name varchar(50) not null, 
    email varchar(70),
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);
ALTER TABLE authors
ADD password VARCHAR(60) DEFAULT null;
ALTER TABLE authors
ADD role VARCHAR(25) DEFAULT 'guest';

CREATE TABLE Tags (
	id INT AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL, 
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE Blogs (
	id int auto_increment,
    title varchar(50) not null,
    content varchar(255) not null,
    authorid int not null,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (authorid) REFERENCES Authors(id)
);

CREATE TABLE BlogTags (
	blogid INT NOT NULL,
    tagid INT NOT NULL,
    PRIMARY KEY (blogid, tagid),
    FOREIGN KEY (blogid) REFERENCES Blogs(id),
    FOREIGN KEY (tagid) REFERENCES Tags(id)
);

CREATE TABLE tokens (
id INT AUTO_INCREMENT NOT NULL,
userid INT NOT NULL,
token TEXT,
expires DATETIME DEFAULT null,
created_at TIMESTAMP DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (userid) REFERENCES authors(id)
);

delimiter //

CREATE PROCEDURE spBlogTags
(blogid INT)
BEGIN 
	SELECT tags.name
	FROM blogtags
    JOIN blogs ON blogs.id = blogtags.blogid
    JOIN tags ON tags.id = blogtags.tagid
    WHERE blogs.id = blogid;
END// 

DELIMITER ;