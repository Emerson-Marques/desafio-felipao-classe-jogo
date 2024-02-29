
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
                ataque = 'magia';
                break;
            case 'Guerreiro':
                ataque = 'espada'
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
            case 'Ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque: 'um ataque.';
        }
        
        // Mensagem do ataque

        console.log(`O ${this.tipo} atacou usando ${ataque}`);

    }
}

// Validação - classe heroi

const hero1 = new hero('Vladslav', 35, 'Mago');
hero1.attack();

const hero2 = new hero('Katabrok', 27, 'Guerreiro');
hero2.attack();