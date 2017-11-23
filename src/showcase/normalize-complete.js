const { normalize, schema } = require('normalizr');

const data = fetch('mysite.com/api/v1/data');

// ^ запрашиваем данные

const operations = new schema.Entity('operations');

const accounts = new schema.Entity('accounts', {
  operations: [ operations ]
});

const user = new schema.Entity('user', {
  accounts: [ accounts ]
});

let normilzeData = normalize(data, user);


// Результат
normilzeData = {
  entities: {
    operations: {
      "514": { id: "514", title: "Покупочка", amount: 100 },
      "4215": { id: "4215", title: "Vjz", amount: 100 }
    },
    accounts: {
      "123": {
        type: "account",
        id: "123",
        name: "Основной",
        currency: "RUB",
        operations: ["514", "4215"]
      }
    },
    user: { "321": { type: "user", id: "321", accounts: ["123"] } }
  },
  result: "321"
};
