INSERT INTO customer_details (name,phone,address_line_one,pin_code,city,state,created_at,updated_at ) VALUES ('Gowthamraj', 9600659552, 'No 4 Rajni kanth Street', 600028, 'Chennai', 'Tamilnadu', now(), now());
INSERT INTO customer_details (name,phone,address_line_one,pin_code,city,state,created_at,updated_at ) VALUES ('MS Dhoni', 9999999999, 'No 14 Chepak 1st main road', 600028, 'Chennai', 'Tamilnadu', now(), now());


INSERT INTO order_details (customer_id, product_name, quantity, price, payment_type, payment_status,created_at, updated_at, order_number) VALUES (1, 'Iphone 15', 1, 89999, 'UPI', 'SUCCESS', now(), now(), 0001);
INSERT INTO order_details (customer_id, product_name, quantity, price, payment_type, payment_status,created_at, updated_at, order_number) VALUES (1, 'Iphone Charger', 1, 2500, 'UPI', 'SUCCESS', now(), now(), 0001);
INSERT INTO order_details (customer_id, product_name, quantity, price, payment_type, payment_status,created_at, updated_at, order_number) VALUES (1, 'Apple Airpods', 1, 12000, 'UPI', 'SUCCESS', now(), now(), 2299);

