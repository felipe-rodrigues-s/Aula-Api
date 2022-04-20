const axios = require('axios')

axios.post('https://todo-back-fullstack.herokuapp.com/task', {
  idClient : "321654",
	type: 1,
	title: "Felipe 2",
	description: "Todo no JS",
	when: "2024-02-27T22:30:00.000"
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});