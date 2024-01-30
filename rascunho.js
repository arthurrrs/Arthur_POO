CREATE TABLE desenvolvedores(
	id_dev INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nome_dev VARCHAR(100) NOT NULL,
	carga_dev VARCHAR(200) NOT NULL,
	data_ingresso VARCHAR(20) NOT NULL
	);


CREATE TABLE projetos(
	id_projetos INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
	nome_projetos VARCHAR(100) NOT NULL,
	desc_projetos VARCHAR(200) NOT NULL,
	data_inicio VARCHAR(200) NOT NULL,
	data_entrega VARCHAR(20), 
	id_responsavel INT NOT NULL,
	FOREIGN KEY (id_responsavel) 
	REFERENCES desenvolvedores(id_dev)
	); 


	ledsouza@senacrs.com.br  exercicio RPG

	getName() {
		return this.name
	  }