class Usuario {
    constructor(nome, email, idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
    }

    exibirDados(){
        return `Nome:   ${this.nome}, Email:   ${this.email}, Idade:  ${this.idade}`;
    }
};

const usuario1 = new Usuario("Vinicius", "vinicius@email.com", 35);

class Admin extends Usuario {
    constructor(nome, email, idade, permissao){
        super(nome, email, idade)
        this.permissao = permissao;
    }

    exibirDados(){
        return `Nome:   ${this.nome}, Email:   ${this.email}, Idade:  ${this.idade}, Admin: ${this.permissao ? "sim" : "não"}`;
    }
};

const usuarios = [];

function addUsuarios(nome, email, idade, isAdmin = false) {
    const novoUsuario = isAdmin ? new Admin(nome, email, idade, true) : new Usuario(nome, email, idade);
    usuarios.push(novoUsuario);
    console.log("Usuario cadastrado com sucesso!");
;}

function listarUsuarios(){
    console.log("Lista de usuários: ");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ${usuario.exibirDados()}`);
    });
};

addUsuarios("Vinicius", "vinicius@email.com", 35);
addUsuarios("Aline", "aline@email.com", 35, true);
addUsuarios("Pedro", "pedro@email.com", 6);

listarUsuarios();