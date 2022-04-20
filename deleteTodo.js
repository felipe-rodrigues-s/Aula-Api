const axios = require('axios')
axios({
  method: 'delete',
  url: 'https://todo-back-fullstack.herokuapp.com/task/625f5460049eed0016f48a29',
  data: {
    idClient : "321654",
    type: 1,
    title: "Felipe 2 atualizadoo",
    description: "Todo no JS",
    when: "2024-03-27T22:30:00.000"
  }
});

