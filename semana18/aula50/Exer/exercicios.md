lista de respostas

1a. Concordo, pois com uma string podemos forma um ID alfa-numerico, aumentando a possibilidade de combinações.

1b. './src/services/idGenerate'

2a. Para autentificação de um usuario, é criado uma conexão com o banco de dados atraves de informaçoes com o .env em seguida é feita uma verificação com os dados do banco.

2b. CREATE TABLE Usuario (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

2c. './src/data/createUser'

3a. define que o valor retornado será de fato uma string e não undefined.


