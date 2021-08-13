INSERT INTO users (id, username, PASSWORD, email) VALUES("1", "user1", "user1password", "user1@gmail.com");

SELECT * FROM users WHERE username = "user1" AND password = "user1password";

UPDATE users SET bio = "Looking for my dream dog", energy = "Low", age = 60, backyard = "Small", free_time = "High", Strength = "Medium" WHERE id = "1";

SELECT * FROM pets WHERE aggression="Low" AND energy="Medium" AND maintenance="Medium";

DELETE FROM favourites WHERE id = "09b6c358-a356-4991-856a-60cd4a2f8713";

INSERT INTO comments (id, text, user_id, post_id) VALUES ("1", "Love this dog", "1", "150e2144-ca4b-4770-a898-6be09aeb69d7");

INSERT INTO likes (id, user_id, post_id) VALUES (1010, 1234, 1111);

INSERT INTO posts (id, user_id, pet_id, title, content, name, age) VALUES ("826383bid2", "jdhe83-fi3", "gd2n-dubwjd", "buy my dog", "cool content", "Doggo", 10);

DELETE FROM posts WHERE id="826383bid2";

-- DISPLAY TABLES 

SELECT * FROM users;
SELECT * FROM pets;
SELECT * FROM posts;
SELECT * FROM comments;
SELECT * FROM likes;
SELECT * FROM favourites;