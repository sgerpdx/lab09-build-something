DROP TABLE IF EXISTS individuals CASCADE;
DROP TABLE IF EXISTS accessories;

CREATE TABLE individuals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    alias TEXT NOT NULL
);

CREATE TABLE accessories (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    clothing TEXT NOT NULL,
    handheld TEXT NOT NULL,
    face TEXT NOT NULL,
    codeword TEXT NOT NULL,
    human BOOLEAN NOT NULL,
    person_id BIGINT NOT NULL REFERENCES individuals(id)
)

INSERT INTO individuals (alias) VALUES ('Clyde the Transparent Aluminum Salesman'), ('Nina Lately of Misty Hills Farm');