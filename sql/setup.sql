DROP TABLE IF EXISTS individuals CASCADE;
DROP TABLE IF EXISTS accessories;

CREATE TABLE individuals (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    alias TEXT NOT NULL,
    human BOOLEAN NOT NULL
);

CREATE TABLE accessories (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    thing TEXT NOT NULL,
    color TEXT NOT NULL,
    person_id BIGINT NOT NULL REFERENCES individuals(id)
);

INSERT INTO individuals (alias, human) VALUES ('Clyde the Transparent Aluminum Salesman', false), ('Nina Lately of Misty Hills Farm', true);
