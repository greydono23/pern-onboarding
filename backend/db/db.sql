DROP TABLE IF EXISTS pern_demo;

CREATE TABLE IF NOT EXISTS pern_demo
(
    pern_name VARCHAR,
    pern_role VARCHAR,
    pern_year VARCHAR
);

INSERT INTO pern_demo (
    pern_name,
    pern_role,
    pern_year
)
VALUES  ('Greydon', 'TL', '2027'),
        ('Reeya', 'PM', '2026');