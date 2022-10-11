const filterDbGreater = (db, age) => {
    let filteredDb = db.filter(pessoa => pessoa.idade > age);
    return filteredDb;
}
const filterDbPerAge = (db, age) => {
    let filteredDb = db.filter(pessoa => pessoa.idade == age);
    return filteredDb;
}
const getNames = (db) => {
    let newDb = db.map(pessoa => {
        let separado =
        {
            nome: pessoa.name.split(' ')[0],
            sobrenome: pessoa.name.split(' ')[1],
            idade: pessoa.age
        }
        return separado;
    });
    return newDb;
}

const populateDb = () => {
    let db = [];
    for (let i = 0; i < 100; i++) {
        let person = {
            id: i,
            name: 'name ' + i,
            age: i % 10
        };
        db.push(person);
    }
    return db;
}

const countPerAge = (db) => {
    for (i = 0; i < 10; i++) {
        let filtered = filterDbPerAge(db, i);
        console.log("Com " + i + " anos, existem " + filtered.length + " Registros");
    }
}
const dbPessoas = populateDb();
const names = getNames(dbPessoas);

countPerAge(names);
