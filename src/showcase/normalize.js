const data = fetch('mysite.com/api/v1/data');


data === {
  type: 'user',
  id: '321',
  accounts: [
    {
      type: 'account',
      id: '123',
      name: 'Основной',
      currency: 'RUB',
      operations: [
        {
          id: '514',
          title: 'Покупочка',
          amount: 100
        },
        {
          id: '4215',
          title: 'Vjz',
          amount: 100
        }
      ]
    }
  ]
}
