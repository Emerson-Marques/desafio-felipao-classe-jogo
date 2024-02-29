
class hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método

    attack() {
        let ataque;

        // switch/case

        switch (this.tipo) {
            case 'Mago':
                ataque = 'usou magia';
                break;
            case 'Guerreiro':
                ataque = 'usou espada'
                break;
            case 'Monge':
                ataque = 'usou artes marciais';
                break;
            case 'Ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque: 'usou um ataque.';
        }
        
        // Mensagem do ataque

        console.log(`O ${this.tipo} atacou usndo ${ataque}`);

    }
}

// Validação - classe heroi

const hero1 = new hero('Vladslav', 35, 'Mago');
hero1.attack();

const hero2 = new hero('Katabrok', 27, 'Guerreiro');
hero2.attack();