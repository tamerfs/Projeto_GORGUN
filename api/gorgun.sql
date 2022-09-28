CREATE TABLE IF NOT EXISTS gorgun_sql(
    Personid int,
    name VARCHAR(20) NOT NULL,
    idade int,
    classe VARCHAR(20),
    personagem VARCHAR(10) NOT NULL,
    raca VARCHAR(20),
    objetivo VARCHAR(100),
    sexo VARCHAR(10),
PRIMARY KEY (Personid)
);



INSERT INTO gorgun_sql (name, idade, classe, personagem, raca, objetivo, sexo) values ("Tamer", "30","indutor","Aniak Chignik","Dovah","Restaurar os guardiões do sopro","Masculino");
INSERT INTO gorgun_sql (name, personagem) VALUES ('Tamer', 'Aniak Chignik');