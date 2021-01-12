1a. exclui a coluna salary
1b. alterar o nome da coluna de gender para sex 
1c. alterar tamanho do VARCHAR de 6 para 255
1d .ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

2a. UPDATE Actor
    SET name = "João Augusto", birth_date = "1950-12-21"
    WHERE id = "003";

2b. UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE id = "006";

    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE id = "006";


