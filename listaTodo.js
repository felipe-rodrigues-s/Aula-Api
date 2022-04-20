const axios = require('axios')

axios.get('https://todo-back-fullstack.herokuapp.com/task/filter/all/321654')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });