function Pokemon(nome, tipo, level){
    this.nome = nome
    let _tipo = tipo;
    let _level = level;

    this.attack = function(){
        return `${this.nome} está atacando!`
    }

    this.getTipo = function(){
        return _tipo;
    }

    this.getLevel = function(){
        return _level;
    }

    this.levelUp = function(){
        console.log(`${this.nome} subiu de nível!!`)
        _level += 1;
        return _level;
    }
}

function Eletrico(nome, level, poderEletrico){
    Pokemon.call(this, nome, "Elétrico", level);
    let _poderEletrico = poderEletrico;

    this.getPoder = function(){
        return _poderEletrico;
    }

    this.attack = function(){
        return `${this.nome} está atacando e usou Thunderbolt com ${this.getPoder()} de poder elétrico!`;
    }
}

function Psiquico(nome, level, poderPsiquico){
    Pokemon.call(this, nome, "Psiquico", level);
    let _poderPsiquico = poderPsiquico;

    this.getPoder = function(){
        return _poderPsiquico;
    }

    this.attack = function(){
        return `${this.nome} está atacando e usou confusion com ${this.getPoder()} de poder psiquico!`;
    }
}

function Mewtwo(){
    Psiquico.call(this, "Mewtwo", 70, 150);
    this.raridade = function(){
        return `${this.nome} é Lendário`;
    }
}

const pikachu = new Eletrico("Pikachu", 5, 50);
console.log(pikachu.nome);
console.log(pikachu.getTipo());
console.log(pikachu.attack());
console.log('Está no Level '+pikachu.getLevel());
pikachu.levelUp();
console.log('Está no Level '+pikachu.getLevel());

const alakazan = new Psiquico("Alakazan", 30, 70);
console.log(alakazan.nome);
console.log(alakazan.getTipo());
console.log(alakazan.attack());
console.log('Está no Level '+alakazan.getLevel());
alakazan.levelUp();
console.log('Está no Level '+alakazan.getLevel());

const mewtwo = new Mewtwo();
console.log(mewtwo.nome);
console.log(mewtwo.raridade());
console.log(mewtwo.getTipo());
console.log(mewtwo.attack());
console.log('Está no Level '+mewtwo.getLevel());
mewtwo.levelUp();
console.log('Está no Level '+mewtwo.getLevel());