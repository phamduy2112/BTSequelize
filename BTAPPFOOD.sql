use BTSQLB1;
create TABLE food_type(
type_id int PRIMARY KEY,
type_name VARCHAR(50)

);
INSERT INTO food_type (type_id,type_name)
VALUES (1, 'Thức ăn'),
		(2,'Đồ uống')
CREATE TABLE food(
food_id int PRIMARY KEY,
food_name VARCHAR(50),
image VARCHAR(50),
price float,
desc_food VARCHAR(50),
type_id int ,
FOREIGN KEY (type_id) REFERENCES  food_type(type_id)
)
INSERT INTO food (food_id, food_name, image, price, desc_food, type_id)
VALUES
    (1, 'Bún riêu cua', 'bunrieu.jpg', 35.5, 'Món ăn ngon miệng từ cua và bún', 1),
    (2, 'Phở bò', 'phobo.jpg', 40.0, 'Món ăn truyền thống của Việt Nam', 1),
    (3, 'Trà Xoài', 'traXoai.jpg', 20.0, 'Trà Xoài Đơn Giản Giải Khát Mùa Hè', 2),
     (4, 'Cơm tấm', 'comtam.jpg', 25.0, 'Món ăn truyền thống của miền Nam Việt Nam', 1),
    (5, 'Bún chả', 'buncha.jpg', 30.0, 'Món ăn ngon từ thịt nướng và bún', 1),
    (6, 'Trà sữa', 'trasua.jpg', 22.5, 'Trà sữa trân châu ngon ở giữa cái nóng mùa hè', 2),
    (7, 'Gỏi cuốn', 'goicuon.jpg', 18.0, 'Gỏi cuốn tươi ngon và đẹp mắt', 1);
CREATE TABLE sub_food(
sub_id int PRIMARY KEY,
sub_name VARCHAR(50),
sub_price float,
food_id int,
FOREIGN KEY (food_id) REFERENCES  food(food_id)
)
INSERT INTO sub_food (sub_id, sub_name, sub_price, food_id)
VALUES
    (1, 'Bún riêu cua',25.2,1),
    (2, 'Bún riêu cua',26.2,2),
    (3, 'Bún riêu cua',27.2,3),
    (4, 'Bún riêu cua',28.2,4),
    (5, 'Bún riêu cua',29.2,5)
create table user (
user_id int PRIMARY KEY,
full_name VARCHAR(50),
email VARCHAR(50),
password VARCHAR(50)

)
INSERT INTO user (user_id, full_name, email, password)
VALUES
    (1, 'Pham Duy','duyp7484@gmail.com','1234567'),
    (2, 'Pham Vinh','vinhp7484@gmail.com','1234567'),
    (3, 'Pham Huy','huyp7484@gmail.com','1234567'),
    (4, 'Pham Hoa','hoap7484@gmail.com','1234567'),
    (5, 'Pham Tien','tienp7484@gmail.com','1234567'),
    (6, 'Pham Quang','quangp7454@gmail.com','1234567'),
    (7, 'Pham Tri','trip7484@gmail.com','1234567'),
    (8, 'Nguyen Huy','huyn7484@gmail.com','1234567'),
    (9, 'Nguyen Hoa','hoan7484@gmail.com','1234567'),
    (10, 'Pham Thang','thangp7484@gmail.com','1234567')

CREATE table order_food(
id_order int PRIMARY KEY auto_increment,
user_id int,
food_id int,
amount int,
code VARCHAR(50),
arr_sub_id VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES  user(user_id),
FOREIGN KEY (food_id) REFERENCES  food(food_id)
)
INSERT INTO order_food (user_id, food_id, amount, code,arr_sub_id)
VALUES
    (1, 2,25,'e12345','Bún bò'),
    (2, 3,28,'e24680','Hũ tiếu'),
    (3, 2,25,'e12456','Cơm tấm'),
    (4, 2,25,'e12789','Trà xoài'),
    (5, 2,25,'e00003','Bún riêu')

create table restaurant(
res_id int PRIMARY KEY,
res_name VARCHAR(50),
image VARCHAR(50),
desc_res VARCHAR(50)
)
INSERT INTO restaurant (res_id, res_name, image, desc_res)
VALUES
    (1, 'restaurant 1','restaurant1.png','Mời bạn qua restaurant1'),
    (2,'restaurant 2','restaurant2.png','Mời bạn qua restaurant2'),
    (3, 'restaurant 3','restaurant3.png','Mời bạn qua restaurant3'),
    (4,'restaurant 4','restaurant4.png','Mời bạn qua restaurant4'),
    (5, 'restaurant 5','restaurant5.png','Mời bạn qua restaurant5')
CREATE TABLE rate_res(
id_rate int PRIMARY KEY auto_increment,
user_id int,
res_id int ,
amount int,
date_rate datetime,
FOREIGN KEY (user_id) REFERENCES  user(user_id),
FOREIGN KEY (res_id) REFERENCES  restaurant(res_id)
)
INSERT INTO rate_res (user_id, res_id, amount, date_rate)
VALUES
    (1,2, 3,'2024-05-27 12:17:24'),
    (2,1, 4,'2024-05-27 12:18:24'),
    (2,3, 3,'2024-05-27 12:19:24'),
    (1,5, 5,'2024-05-27 12:20:24'),
    (3,1, 2,'2024-05-27 12:21:24')
                    

CREATE TABLE like_res(
id_like int PRIMARY KEY auto_increment,
user_id int,
res_id int,

date_like VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES  user(user_id),
FOREIGN KEY (res_id) REFERENCES  restaurant(res_id)
)
INSERT INTO like_res (user_id, res_id, date_like)
VALUES
    (1,2,'2024-05-27 12:17:24'),
    (3,1,'2024-05-27 12:18:24'),
    (2,3,'2024-05-27 12:19:24'),
    (1,5,'2024-05-27 12:20:24'),
    (3,1,'2024-05-27 12:21:24'),
    (2,2,'2024-05-27 12:17:24'),
    (4,1,'2024-05-27 12:18:24'),
    (6,3,'2024-05-27 12:19:24'),
    (4,5,'2024-05-27 12:20:24'),
    (6,1,'2024-05-27 12:21:24'),
    (7,1,'2024-05-27 12:21:24')
    
    
CREATE TABLE dislike_res(
id_dislike int PRIMARY KEY auto_increment,
user_id int,
res_id int,

date_dislike VARCHAR(50),
FOREIGN KEY (user_id) REFERENCES  user(user_id),
FOREIGN KEY (res_id) REFERENCES  restaurant(res_id)
)    
--    Tìm 5 người đã like nhà hàng nhiều nhất


SELECT user.full_name, COUNT(*) AS soLuongThich
FROM like_res
JOIN user ON user.user_id = like_res.user_id
GROUP BY user.full_name
ORDER BY soLuongThich DESC
LIMIT 5;
-- - Tìm 2 nhà hàng có lượt like nhiều nhất.
SELECT restaurant.res_name, COUNT(like_res.res_id) AS soLuongThich
FROM like_res
JOIN restaurant ON restaurant.res_id = like_res.res_id
GROUP BY res_name
ORDER BY soLuongThich DESC
LIMIT 2;
-- Tìm người đã đặt hàng nhiều nhất

SELECT user_id, COUNT(*) AS order_count
FROM order_food
GROUP BY user_id
ORDER BY order_count DESC
LIMIT 1;
-- Tìm người dùng không hoạt động trong hệ thống (không đặt hàng, không like, không đánh giá nhà hàng)
SELECT user.user_id, user.full_name, user.email
FROM user
LEFT JOIN order_food ON user.user_id = order_food.user_id
LEFT JOIN like_res ON user.user_id = like_res.user_id
LEFT JOIN rate_res ON user.user_id = rate_res.user_id
WHERE order_food.user_id IS NULL AND like_res.user_id IS NULL AND rate_res.user_id IS NULL;
