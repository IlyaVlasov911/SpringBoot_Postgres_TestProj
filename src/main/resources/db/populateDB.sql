DELETE FROM users;
ALTER SEQUENCE global_seq RESTART WITH 100000;

INSERT INTO users (name, email, address, edited)
VALUES ('Ivanov Ivan Ivanovich', 'ivanovii@yandex.ru', 'Russia Red Ural 41', '2022-09-30 10:00:00'),
       ('Sidorov Ivan Ivanovich', 'sidorovii@yandex.ru', 'Russia Red Ural 42', '2022-09-30 11:00:00'),
       ('Petrov Petr Ivanovich', 'petrovpi@yandex.ru', 'Russia Red Ural 43', '2022-09-30 12:00:00'),
       ('Reznikov Ivan Ivanovich', 'reznikovii@yandex.ru', 'Russia Red Ural 44', '2022-09-30 13:00:00'),
       ('Pribe Ivan Ivanovich', 'pribeii@yandex.ru', 'Russia Red Ural 45', '2022-09-30 14:00:00'),
       ('Ivanova Olga Anatolievna', 'ivanovaoa@yandex.ru', 'Russia Red Ural 41', '2022-10-01 10:00:00'),
       ('Petrova Olga Anatolievna', 'petrovaoa@yandex.ru', 'Russia Red Ural 40', '2022-10-01 11:00:00'),
       ('Sidorova Olga Anatolievna', 'sidorovaoa@yandex.ru', 'Russia Red Ural 39', '2022-10-01 12:00:00'),
       ('Reznikova Olga Anatolievna', 'reznikovaoa@yandex.ru', 'Russia Red Ural 38', '2022-10-01 13:00:00'),
       ('Pribe Olga Anatolievna', 'pribeoa@yandex.ru', 'Russia Red Ural 37', '2022-10-01 14:00:00');