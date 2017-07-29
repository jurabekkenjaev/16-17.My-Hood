CREATE TABLE information(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(150),
  name VARCHAR(50) NOT NULL,
  location VARCHAR(150) NOT NULL,
  venue VARCHAR(100) NOT NULL,
  vlocation VARCHAR(150),
  description VARCHAR(500) NOT NULL,
  picture VARCHAR(500),
  vote INT(10),
  PRIMARY KEY (id)
);